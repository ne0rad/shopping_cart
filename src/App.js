import { HashRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        let loadedCart = JSON.parse(window.sessionStorage.getItem('cart'));
        let loadedQuantity = JSON.parse(window.sessionStorage.getItem('quantity'));
        if(!loadedCart) loadedCart = [];
        if(!loadedQuantity) loadedQuantity = [];
        setCart(loadedCart);
        setCartQuantity(loadedQuantity);
    }, []);

    function addToCart(item) {
        const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (itemIndex === -1) {
            setCart([...cart, item]);
            setCartQuantity([...cartQuantity, 1]);
            window.sessionStorage.setItem('cart', JSON.stringify([...cart, item]));
            window.sessionStorage.setItem('quantity', JSON.stringify([...cartQuantity, 1]));
        } else {
            const newCartQuantity = [...cartQuantity];
            newCartQuantity[itemIndex]++;
            setCartQuantity(newCartQuantity);
            window.sessionStorage.setItem('quantity', JSON.stringify(newCartQuantity));
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
        window.sessionStorage.setItem('cart', JSON.stringify([]));
        window.sessionStorage.setItem('quantity', JSON.stringify([]));
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
            <HashRouter>
                <Header
                    toggleCart={toggleCart}
                    cart={cart}
                />
                <Main
                    cart={cart}
                    addToCart={addToCart}
                    changeQuantity={changeQuantity}
                    toggleCart={toggleCart}
                    openCart={openCart}
                />
            </HashRouter>
            <Footer />
        </div>
    )
}

export default App;
