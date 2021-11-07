import CartItem from "./CartItem";

function Cart({ cart, cartQuantity, removeFromCart, changeQuantity, clearCart, cartOpen, toggleCart, ProductsJSON, products }) {

    function checkOut() {
        let total = getTotalPrice();
        alert('You have been charged £' + total + ' on your fake credit card!');
        clearCart();
        toggleCart();
    }

    function getTotalPrice() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += ProductsJSON[cart[i]].price * cartQuantity[i];
        }
        return (Math.round(total * 100) / 100).toFixed(2);
    }

    return (
        <>

            {
                cartOpen && (
                    <div id="Cart">
                        {cart.length > 0 ? (
                            <div>
                                {cart.map((item, index) => (
                                    <CartItem
                                        key={index}
                                        product={ProductsJSON[item]}
                                        quantity={cartQuantity[index]}
                                        removeFromCart={() => removeFromCart(index)}
                                        changeQuantity={changeQuantity}
                                    />
                                ))}
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
