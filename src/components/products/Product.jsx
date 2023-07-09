import { useState } from "react";
import { Link } from "react-router-dom";
import { candleProduct } from "../../constants";

const Product = () => {
  const [activeImage, setActiveImage] = useState(candleProduct[0].img);
  const [amount, setAmount] = useState(1);

  const handleClickImage = (index) => {
    setActiveImage(index);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-8 mx-4 lg:mx-8">
        <div className="p-4">
          <div className="flex flex-col gap-6">
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
        </div>

        <div className="w-full h-[20rem] relative">
          <img
            src={activeImage}
            alt=""
            className="w-full h-full object-cover absolute"
          />
        </div>

        <div className="flex justify-center mt-4">
          <div className="flex gap-2">
            {candleProduct.map((product) => (
              <div
                key={product.id}
                className={`h-4 w-4 rounded-full bg-gray-400 ${
                  activeImage === product.img ? "bg-black" : ""
                }`}
                onClick={() => handleClickImage(product.img)}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between h-24 gap-8 mt-4">
          <div className="flex justify-center">
            <div className="flex flex-col w-16 h-20 gap-1 items-center border">
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
          </div>

          <div className="flex justify-center mt-4">
            <div className="flex gap-4">
              <button className="text-black border font-semibold py-2 px-4 rounded-lg uppercase text-sm">
                Add to Wishlist
              </button>
              <button className="bg-black text-white font-semibold py-2 px-6 rounded-lg uppercase text-sm">
                <Link to="/cart">Add to Cart</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
