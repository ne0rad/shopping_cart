import ProductsJSON from '../Products/products.json';

function Products({ addToCart, changeQuantity, toggleCart, openCart }) {

  return (
    <div id="Products" className="main">
      <h1>Products</h1>
      <ul>
        {ProductsJSON.map((product) => {
          return (
            <li key={product.id}>
              <div className="title-text">{product.name}</div>
              <div className="description-text">{product.description}</div>
              £{product.price}
              <button className="btn" onClick={() => {
                addToCart(product);
                openCart();
              }}>ADD</button>
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
