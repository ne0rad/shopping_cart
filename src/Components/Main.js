import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import NotFound from '../Pages/NotFound';

function Main({ cart, cartQuantity, addToCart, changeQuantity, toggleCart, openCart, closeCart, ProductsJSON, products }) {

    return (
        <div
            className="main-wrap"
            onClick={() => closeCart()}
        >
            <Routes>

                <Route path={'/'} element={<Home />} />
                <Route path={'/products'} element={<Products
                    cart={cart}
                    cartQuantity={cartQuantity}
                    addToCart={addToCart}
                    changeQuantity={changeQuantity}
                    toggleCart={toggleCart}
                    openCart={openCart}
                    ProductsJSON={ProductsJSON}
                    products={products}
                />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </div>
    )
}

export default Main;
