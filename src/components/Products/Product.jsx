import ProductDesc from "./ProductDesc";
import ProductImage from "./ProductImage";
import Thumbnail from "./Thumbnail";

const Product = () => {
  return (
    <div>
      <section className="relative w-full flex justify-evenly flex-col md:flex-row md:items-center md:gap-10 md:top-10">
        <ProductDesc />
        <ProductImage />
        <Thumbnail />
      </section>
      <div className="flex justify-end">
        <div className="w-20 border border-gray-300 p-2 flex flex-col px-2 py-2 md:py-2 rounded-md mb-10">
          <button type="button" className="hover:opacity-60 ml-7">
            <img src="https://img.icons8.com/?size=1x&id=85496&format=png" alt="minus icon" />
          </button>
          <p className="text-blue font-bold">1</p>
          <button type="button" className="hover:opacity-60 ml-7">
            <img src="https://img.icons8.com/?size=1x&id=3220&format=png" alt="plus icon" />
          </button>
        </div>
        <div className="flex justify-end">
          <div className="flex mb-14">
            <button className="uppercase border border-gray-300 px-4 py-2 rounded-md">Add to Wishlist</button>
            <button className="uppercase bg-black text-white px-4 py-2 ml-5 rounded-md">Add to Cart</button>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Product;
