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
        <div className="flex flex-row justify-between my-7 gap-7">
          <h1 className="text-2xl mt-8 text-gray-600">YOUR CART</h1>
          <h1 className="text-1xl mt-9 text-gray-600">{totalItems} items</h1>
          <div className="ml-auto">
            <h2 className="text-1l text-gray-600 mt-10">
              TOTAL: ${calculateTotal().toFixed(2)}
            </h2>
          </div>
        </div>
        <div className="w-full">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="text-gray-600 pl-0 col border-b font-bold">
                  PRODUCT
                </th>
                <th className="text-gray-600 col border-b font-bold">
                  DESCRIPTION
                </th>
                <th className="text-gray-600 col border-b font-bold">PRICE</th>
                <th className="text-gray-600 col border-b font-bold">
                  QUANTITY
                </th>
                <th className="text-gray-600 col py-2 pl-0 border-b font-bold">
                  SUBTOTAL
                </th>
                <th className="text-gray-600 py-2 pl-0 col border-b font-bold"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className=" border-b flex mt-1 item-center">
                    <img
                      src={item.img}
                      alt={item.description}
                      className="w-24 h-24 mx-auto object-cover"
                    />
                  </td>
                  <td className="py-2 px-4  border-b">
                    <h3 className="font-bold">{item.product}</h3>
                    <p className="text-sm text-gray-600 text-center m-8">
                      {item.description}
                    </p>
                  </td>
                  <td className=" text-gray-600 text-center py-2 px-4 border-b">
                    ${item.price}
                  </td>
                  <td className="py-2 px-4 items-center border-b">
                    <div className="flex text-center items-center">
                      <button
                        className="text-gray-600 text-center px-2 py-1"
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </button>
                      <span className="text-gray-600 text-center mx-2">
                        {item.quantity}
                      </span>
                      <button
                        className="text-gray-600 text-center px-2 py-1"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="text-gray-600 text-center py-5 px-10 border-b">
                    ${Number(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between mt-5 mb-5">
          <div className="mt-4">
            <a href="#" className="text-gray-600 underline w-1 p-3">
              CONTINUE SHOPPING
            </a>
            <a href className="underline">
              {" "}
            </a>
          </div>
          <button className="bg-gray-600 text-white px-3 py-3 my-3 m-3 text-1l rounded">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
