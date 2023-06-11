import React from "react";
import Navbar from "../global/Navbar";
import { useState } from "react";
import { candleProducts } from "../../constants/index";

const Cart = () => {
  const [cartItems, setCartItems] = useState(candleProducts);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-2xl text-left my-8">
          YOUR CART {totalItems} items
        </h1>

        <h2 className="text-2xl text-right mb-4">
          Total: ${calculateTotal().toFixed(2)}
        </h2>

        <div className="border-b py-2">
          <div className="grid grid-cols-5 gap-4">
            <div className="text-lg font-bold">Product</div>
            <div className="text-lg font-bold">Description</div>
            <div className="text-lg font-bold">Price</div>
            <div className="text-lg font-bold">Quantity</div>
            <div></div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 flex items-center"
            >
              <img
                src={item.image}
                alt={item.description}
                className="w-24 h-24 object-cover mr-4"
              />
             
              <button
                className=" text-black px-4 py-1 ml-auto "
                onClick={() => removeItem(item.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-8">
          <a href="#" className="text-blue-500">
            Continue Shopping
          </a>
          <button className="bg-black text-white px-4 py-2 rounded">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
