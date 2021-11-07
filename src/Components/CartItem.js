function CartItem({ product, quantity, removeFromCart, changeQuantity }) {
  return (
    <div className="cart-item">
        <div className="title-text">{product.name}</div>
        <div className="title-description">
            {quantity} x ${product.price}
        </div>
        <br />
    </div>
    );
}

export default CartItem;