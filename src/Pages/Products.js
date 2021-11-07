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
                type="number"
                min="0"
                max="100"
                value={getCartQuantity(product.id)}
                onChange={(e) => changeQuantity(product.id, parseInt(e.target.value))}
              />
              <button className="btn" onClick={() => addToCart(product.id)}>ADD</button>
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
