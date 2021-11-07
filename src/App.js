import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

const DIR = ''; // Change this to '/shopping_cart' if you want to use the gh pages

function App() {
    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        let loadedCart = JSON.parse(window.localStorage.getItem('cart'));
        let loadedQuantity = JSON.parse(window.localStorage.getItem('quantity'));
        setCart(loadedCart);
        setCartQuantity(loadedQuantity);
    }, []);

    function addToCart(item) {
        const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (itemIndex === -1) {
            setCart([...cart, item]);
            setCartQuantity([...cartQuantity, 1]);
            window.localStorage.setItem('cart', JSON.stringify([...cart, item]));
            window.localStorage.setItem('quantity', JSON.stringify([...cartQuantity, 1]));
        } else {
            const newCartQuantity = [...cartQuantity];
            newCartQuantity[itemIndex]++;
            setCartQuantity(newCartQuantity);
            window.localStorage.setItem('quantity', JSON.stringify(newCartQuantity));
        }
    }

    function changeQuantity(item, quantity) {
        const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        const newCartQuantity = [...cartQuantity];
        newCartQuantity[itemIndex] = quantity;
        setCartQuantity(newCartQuantity);
    }

    function removeFromCart(item) {
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
    }

    function clearCart() {
        setCart([]);
        setCartQuantity([]);
        window.localStorage.setItem('cart', JSON.stringify([]));
        window.localStorage.setItem('quantity', JSON.stringify([]));
    }

    function toggleCart() {
        setCartOpen(!cartOpen);
    }

    function openCart() {
        setCartOpen(true);
    }

    return (
        <div id="content">
            <Cart
                cart={cart}
                cartQuantity={cartQuantity}
                removeFromCart={removeFromCart}
                changeQuantity={changeQuantity}
                clearCart={clearCart}
                cartOpen={cartOpen}
                toggleCart={toggleCart}
            />
            <BrowserRouter>
                <Header
                    toggleCart={toggleCart}
                    DIR={DIR}
                />
                <Main
                    cart={cart}
                    addToCart={addToCart}
                    changeQuantity={changeQuantity}
                    toggleCart={toggleCart}
                    openCart={openCart}
                    DIR={DIR}
                />
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;
