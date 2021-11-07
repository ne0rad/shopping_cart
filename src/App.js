import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);

    function addToCart(item) {
        const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (itemIndex === -1) {
            setCart([...cart, item]);
            setCartQuantity([...cartQuantity, 1]);
        } else {
            const newCartQuantity = [...cartQuantity];
            newCartQuantity[itemIndex]++;
            setCartQuantity(newCartQuantity);
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
    }

    function toggleCart() {
        setCartOpen(!cartOpen);
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
                />
                <Main
                    cart={cart}
                    addToCart={addToCart}
                    changeQuantity={changeQuantity}
                    toggleCart={toggleCart}
                />
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;
