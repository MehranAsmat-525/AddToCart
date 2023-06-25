import Header from "./components/Header";
import "./App.css";
import ProductList from "./components/ProductList";
import Data from "./ApiData";
import { useState } from "react";
import CartList from "./components/CartList";
const App = () => {
    const [product, setproduct] = useState(Data);
    const [cart, setcart] = useState([]);
    const [showCart, setshowCart] = useState(false);
    const addToCart = (data) => {
        setcart([...cart, { ...data, quantity: 1 }]);
    };
    const handleShow = (value) => {
        setshowCart(value);
    };

    return (
        <>
            <Header count={cart.length} handleShow={handleShow} />
            {showCart ? (
                <CartList cart={cart} />
            ) : (
                <ProductList product={product} addToCart={addToCart} />
            )}
        </>
    );
};

export default App;
