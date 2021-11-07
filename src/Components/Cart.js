function Cart({ cart, cartQuantity, removeFromCart, changeQuantity, clearCart, cartOpen, toggleCart }) {
    return (
        <>
            {
                cartOpen && (
                    <div id="Cart">
                        <h3>This is shopping cart</h3>
                        <ul>
                        { cart.map((product, i) => {
                            return(
                                <li key={product.id}>
                                    {product.name} ({cartQuantity[i]})  £{Math.round(product.price * cartQuantity[i] * 100) / 100}
                                </li>
                            )
                        }) }
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default Cart;
