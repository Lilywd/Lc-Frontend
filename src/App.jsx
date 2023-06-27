
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import CheckoutForm from "./components/cart/Checkoutform";
import Product from "./pages/product/Product";
// import Hero from "./components/home/Hero";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/checkout" element={<CheckoutForm />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
