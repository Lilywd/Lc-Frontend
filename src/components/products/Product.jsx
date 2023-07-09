import { useState } from "react";
import { Link } from "react-router-dom";

import { candleProduct } from "../../constants";

const Product = () => {
  const [activeImage, setActiveImage] = useState(candleProduct[0].img);

  const handleClickImage = (index) => {
    setActiveImage(index);
  };
  const [amount, setAmount] = useState(1);

  return (
    <>
      <div className="flex flex-col items-center mt-8  mx-8 lg:mt-0">
        <div className="flex justify-around lg:flex-row gap-16  p-4 ">
          {/* ABOUT */}
          <div className="flex flex-col gap-6 lg:w-1/3 lg:mt-24">
            <div>
              <span className="text-black-600 font-semibold">
                Special Candles
              </span>
              <h1 className="text-3xl font-bold">Candle Invincible 3</h1>
            </div>
            <h6 className="text-2xl font-semibold">$ 199.00</h6>
            <p className="text-gray-700">
              Con ammortizzazione incredibile per sostenerti in tutti i tuoi
              chilometri, Invincible 3 offre un livello di comfort elevatissimo
              sotto il piede per aiutarti a dare il massimo oggi, domani e
              oltre. Questo modello incredibilmente elastico e sostenitivo, è
              pensato per dare il massimo lungo il tuo percorso preferito e fare
              ritorno a casa carico di energia, in attesa della prossima corsa.
            </p>
          </div>

          <div className=" w-full h-[40rem] lg:w-1/3 relative">
            <img
              src={activeImage}
              alt=""
              className="w-full h-full object-cover absolute"
            />
          </div>

          <div className="flex flex-col justify-between h-24 gap-8 lg:mt-14">
            {candleProduct
              .filter((product) => product.img !== activeImage)
              .map((product) => (
                <div className="relative" key={product.id}>
                  <img
                    src={product.img}
                    alt=""
                    className={`w-24 h-24 cursor-pointer ${
                      activeImage === product.img ? "border-2 border-black" : ""
                    }`}
                    onClick={() => handleClickImage(product.img)}
                  />
                  {activeImage === product.img && (
                    <span className="absolute -bottom-2 -right-2 bg-black text-white rounded-full p-1"></span>
                  )}
                </div>
              ))}
          </div>
        </div>

        <div className="flex flex-col w-16 h-20 gap-1 items-center border mr-8  ">
          <button
            className="ml-10 rounded-lg text-black-800 text-m"
            onClick={() => {
              if (amount > 0) {
                setAmount((prev) => prev - 1);
              }
            }}
          >
            -
          </button>

          <span className="rounded-lg text-m">{amount}</span>
          <button
            className="ml-10 rounded-lg text-black-800 text-m"
            onClick={() => setAmount((prev) => prev + 1)}
          >
            +
          </button>
        </div>

        <div className="flex flex-col justify-between h-24 gap-8 lg:mt-14 gap-4">
          <div className="flex flex-row items-end gap-8  ">
            <div className="flex flex-col justify-between h-24 gap-8">
              <div className="flex flex-row items-end gap-5">
                <div className="flex flex-row items-end justify-end gap-5 ">
                  <div className="flex justify-end fixed bottom-0 right-0 mb-8 mr-8">
                    <div className="flex flex-row gap-4 items-center  m-10 mb-16 overflow-x-auto mr-64">
                      {Object.entries(candleProduct).map(([key, value]) => (
                        <div className="mr-2" key={key}>
                          <span
                            className={`absolute h-4 w-4 rounded-full  ${
                              activeImage === value.img
                                ? "bg-black"
                                : "bg-gray-400"
                            }`}
                            onClick={() => handleClickImage(value.img)}
                          ></span>
                          {/* {activeImage === value && (
                          <span className="absolute -bottom-2 -right-2 bg-black text-white rounded-full p-1"></span>
                        )} */}
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-row items-end mb-10 gap-8">
                      <button className="text-black border font-semibold py-2 px-4 rounded-lg uppercase text-sm">
                        Add to Wishlist
                      </button>
                      <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg uppercase text-sm ml-4">
                        <Link to="/cart">Add to Cart</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
