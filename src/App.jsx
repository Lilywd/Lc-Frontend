import "./App.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Product";
// import Hero from "./components/home/Hero";

function App() {
  return (
    <>

      <Routes>
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<Products/>} />

      </Routes> 
    </>
  );
}

export default App;
