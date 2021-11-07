import ProductsJSON from '../Products/products.json';

function Products({ addToCart, changeQuantity, toggleCart }) {

  return (
    <div id="Products" className="main">
      <h1>Products</h1>
      <ul>
        { ProductsJSON.map((product) => {
          return(
            <li key={product.id}>
              {product.name}
              <br />
              {product.description}
              <br />
              £{product.price}
              <br />
              <button onClick={() => addToCart(product)}>ADD</button>
            </li>
          )
        }) }
      </ul>
    </div>
  );
}

export default Products;
