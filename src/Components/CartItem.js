function CartItem({ id, product, quantity, removeFromCart,  changeQuantity }) {
    return (
        <div className="cart-item">
            <span className="title-text">{product.name}</span>
            <div className="title-description">
                {quantity} x <span className="price-text">£{product.price}</span>
                <button className="btn btn-remove" onClick={() => removeFromCart(id)}>Remove</button>

            </div>
            <br />
        </div>
    );
}

export default CartItem;