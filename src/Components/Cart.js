import ProductsJSON from '../Products/products.json';

function Cart({ cart, cartQuantity, removeFromCart, changeQuantity, clearCart, cartOpen, toggleCart }) {

    function checkOut() {
        let total = getTotalPrice();
        alert('You have been charged £' + total + ' on your fake credit card!');
        clearCart();
        toggleCart();
    }

    function getTotalPrice() {
        let total = 0;
        cart.map((item, i) => {
            const itemIndex = ProductsJSON.findIndex(product => product.id === item.id);
            return total += ProductsJSON[itemIndex].price * cartQuantity[i];
        });
        total = Math.round(total * 100) / 100;
        return total;
    }

    return (
        <>

            {
                cartOpen && (
                    <div id="Cart">
                        {cart.length > 0 ? (
                            <div>
                                <ul>
                                    {cart.map((product, i) => {
                                        return (
                                            <li key={product.id}>
                                                <div className="title-text">{product.name}</div> <div className="description-text">
                                                    Units: {cartQuantity[i]}  Price: £{Math.round(product.price * cartQuantity[i] * 100) / 100}
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="title-text">Total: £{getTotalPrice()}</div>
                                <br />
                                <button className="btn" onClick={() => checkOut()}>Checkout</button>
                                <button className="btn" onClick={() => clearCart()}>Clear Cart</button>
                            </div>
                        ) : (
                            <div>
                                No items in the cart
                            </div>
                        )}
                        <button className="btn btn-red" onClick={() => toggleCart()}>Close</button>
                    </div>
                )
            }
        </>
    )
}

export default Cart;
