function Product({ product, quantity, addToCart, changeQuantity }) {
    return (
        <li key={product.id} className="product">
            <div className="title-text">{product.name}</div>
            <div className="description-text">{product.description}</div>
            <div className="add-div">
                <div className="price-text">£{product.price}</div>
                {quantity > 0 &&
                    (<>
                        <span className="description-text"> Quantity: </span>
                        <button
                            className="btn btn-quantity"
                            onClick={() => quantity > 0 && changeQuantity(product.id, quantity - 1)}
                        >-</button>
                        <span className="quantity-text">{quantity}</span>
                    </>)
                }
                <button
                    className={quantity > 0 ? "btn btn-quantity" : "btn btn-add"}
                    onClick={() => addToCart(product.id)}>{quantity > 0 ? "+" : "Add to Cart"}
                </button>
            </div>
        </li>
    )
}

export default Product;