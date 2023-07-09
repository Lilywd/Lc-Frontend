import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Product";
import Hero from "./components/home/Hero";
import CheckoutForm from "./components/cart/Checkoutform";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<CheckoutForm />} />

        <Route exact path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
