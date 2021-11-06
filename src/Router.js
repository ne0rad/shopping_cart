import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Products from './Components/Products';

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
