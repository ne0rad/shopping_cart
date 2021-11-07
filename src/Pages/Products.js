import ProductsJSON from '../Products/products.json';

function Products({ addToCart, changeQuantity, toggleCart, openCart }) {

  return (
    <div id="Products" className="main">
      <h1>Products</h1>
      <ul>
        {ProductsJSON.map((product) => {
          return (
            <li key={product.id}>
              {product.name}
              <br />
              {product.description}
              <br />
              £{product.price}
              <br />
              <button className="btn" onClick={() => {
                addToCart(product);
                openCart();
              }}>ADD</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default Products;
