import React, { useState } from 'react';
import Navbar from '../../components/global/Navbar';
import Footer from '../../components/global/Footer';

const Product = () => {
  const [images] = useState({
    img1: "https://i.pinimg.com/originals/4e/c1/f9/4ec1f9082ff0295826d01344220b3752.jpg",
    img2: "https://i.pinimg.com/originals/2f/cb/b3/2fcbb35c683ccba725f74f9c7db79970.jpg",
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center mt-24'>
        <div className='flex justify-between lg:flex-row gap-16 lg:items-center p-4'>
          {/* ABOUT */}
          <div className='flex flex-col gap-6 lg:w-2/4'>
            <div>
              <span className='text-black-600 font-semibold'>Special Candles</span>
              <h1 className='text-3xl font-bold'>Candle Invincible 3</h1>
            </div>
            <h6 className='text-2xl font-semibold'>$ 199.00</h6>
            <p className='text-gray-700'>
              Con ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
            </p>
          </div>

          <div className='flex gap-4 lg:w-2/4'>
            <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
            <div className='flex flex-col justify-between h-24 gap-8'>
              <img src={images.img1} alt="" className='w-24 h-24 cursor-pointer' onClick={() => setActiveImage(images.img1)} />
              <img src={images.img2} alt="" className='w-24 h-24 cursor-pointer' onClick={() => setActiveImage(images.img2)} />
              
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center gap-12'>
          <div className='flex flex-col items-center border'>
            <button className='ml-10 py-2 px-2 rounded-lg text-black-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
            <span className='py-4 px-6 rounded-lg'>{amount}</span>
            <button className='ml-10 py-2 px-4 rounded-lg text-black-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
          </div>
          <div className='flex flex-row item-end gap-12'>
            <div className='flex flex-row gap-4 items-center m-10'>
              <span className='bg-black rounded-full h-3 w-3'></span>
              <span className='bg-gray-400 rounded-full h-3 w-3'></span>
              <span className='bg-gray-400 rounded-full h-3 w-3'></span>
            </div>
            <div className='flex flex-row items-end gap-5'> {/* Update this container */}
              <button className='text-black border font-semibold py-3 px-16 rounded-2 h-full uppercase'>Add to Whishlist</button>
              <button className='bg-black text-white font-semibold py-3 px-16 rounded-2 h-full uppercase'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
