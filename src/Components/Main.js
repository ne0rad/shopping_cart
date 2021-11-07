import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Products from '../Pages/Products';
import Contacts from '../Pages/Contacts';
import NotFound from '../Pages/NotFound';

function Main() {
    return (
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
    )
}

export default Main;
