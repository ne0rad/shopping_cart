function Products({ cart, cartQuantity, addToCart, changeQuantity, toggleCart, openCart, products }) {

  function getCartQuantity(id) {
    let index = cart.indexOf(id);
    if (index > -1) {
      return cartQuantity[index];
    } else {
      return 0;
    }
  }

  return (
    <div id="Products" className="main">
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <div className="title-text">{product.name}</div>
              <div className="description-text">{product.description}</div>
              £{product.price}
              <span> Units:</span>
              <input
                name="quantity"
                className="quantity-input"
                type="number"
                min="0"
                max="10"
                value={getCartQuantity(product.id)}
                onChange={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 10) {
                    changeQuantity(product.id, parseInt(e.target.value))
                  }
                }}
              />
              <button className="btn" onClick={() => addToCart(product.id)}>{getCartQuantity(product.id) > 0 ? "+1" : "Add to Cart"}</button>
              <br />
              <br />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Products;
