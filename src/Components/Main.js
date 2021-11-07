import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Contacts from '../Pages/Contacts';
import NotFound from '../Pages/NotFound';

function Main({ cart, addToCart, changeQuantity, toggleCart, openCart, DIR }) {

    return (
        <Routes>

            <Route path={`${DIR}/`} element={<Home />} />
            <Route path={`${DIR}/products`} element={<Products
                cart={cart}
                addToCart={addToCart}
                changeQuantity={changeQuantity}
                toggleCart={toggleCart}
                openCart={openCart}
            />} />
            <Route path={`${DIR}/contacts`} element={<Contacts />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
    )
}

export default Main;
