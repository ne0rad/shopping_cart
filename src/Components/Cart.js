import ProductsJSON from '../Products/products.json';

function Cart({ cart, cartQuantity, removeFromCart, changeQuantity, clearCart, cartOpen, toggleCart }) {

    function checkOut() {
        let total = 0;
        cart.map((item, i) => {
            const itemIndex = ProductsJSON.findIndex(product => product.id === item.id);
            return total += ProductsJSON[itemIndex].price * cartQuantity[i];
        });
        total = Math.round(total * 100) / 100;
        alert('You have been charged £' + total + ' on your fake credit card!');
        clearCart();
    }

    return (
        <>
            {
                cartOpen && (
                    <div id="Cart">
                        <h3>Shopping Cart</h3>
                        {cart.length > 0 ? (
                            <div>
                                <ul>
                                    {cart.map((product, i) => {
                                        return (
                                            <li key={product.id}>
                                                {product.name} ({cartQuantity[i]})  £{Math.round(product.price * cartQuantity[i] * 100) / 100}
                                            </li>
                                        )
                                    })}
                                </ul>
                                <button className="btn"  onClick={() => checkOut()}>Checkout</button>
                                <button className="btn"  onClick={() => clearCart()}>Clear Cart</button>
                            </div>
                        ) : (
                            <div>
                                No items in the cart
                            </div>
                        )}
                        <button className="btn" onClick={() => toggleCart()}>Close</button>
                    </div>
                )
            }
        </>
    )
}

export default Cart;
