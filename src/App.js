import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
	const [cart, setCart] = useState([]);

	function addToCart(item) {
		const itemInCart = cart.find(cartItem => cartItem.id === item.id);
		if (itemInCart) {
			itemInCart.quantity++;
		} else {
			item.quantity = 1;
			setCart([...cart, item]);
		}
	}

	function changeQuantity(item, quantity) {
		const itemInCart = cart.find(cartItem => cartItem.id === item.id);
		if (itemInCart) {
			itemInCart.quantity = quantity;
		}
	}

	function removeFromCart(item) {
		setCart(cart.filter(cartItem => cartItem.id !== item.id));
	}

	function clearCart() {
		setCart([]);
	}

	return (
		<>
			<Cart
				cart={cart}
				removeFromCart={removeFromCart}
				changeQuantity={changeQuantity}
				clearCart={clearCart}
			/>
			<BrowserRouter>
				<Header />
				<Main
					addToCart={addToCart}
					changeQuantity={changeQuantity}
				/>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App;
