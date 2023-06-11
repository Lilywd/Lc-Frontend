import { useState } from "react";
import { candleProduct } from "../../constants/index";

const Cart = () => {
  const [cartItems, setCartItems] = useState(candleProduct);

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
      <div className="container mx-auto">
        <div className="flex flex-row  text-left my-7 gap-5">
          <h1 className="text-2xl">YOUR CART</h1>

          <h1 className="text-1xl">{totalItems} items</h1>
        </div>

        <h2 className="text-1xl text-right mb-5">
          Total: ${calculateTotal().toFixed(2)}
        </h2>

        <div className="border py-2">
          <div className="grid grid-cols-5 grid-row-5 gap-2">
            <h3 className="font-bold">Product</h3>
            <h3 className="font-bold">Description</h3>
            <h3 className="font-bold">Price</h3>
            <h3 className="font-bold">Quantity</h3>
            <h3 className="font-bold">Subtotal</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 flex items-center"
            >
              <img
                src={item.img}
                alt={item.description}
                className="w-24 h-24 object-cover mr-10 gap-5"
              />

              <div className="flex flex-row items-center ml-10 gap-10">
                <div className="ml-10 ">
                  <span>{item.description}</span>
                </div>
                <div className="m-10 ">
                  <span>${item.price}</span>
                </div>
                <div className="mr-8">
                  <button
                    className="text-black px-2 py-1"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="text-black px-2 py-1"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>

              <button
                className="text-black px-4 py-1 ml-auto"
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









