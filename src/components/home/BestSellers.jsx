import { Card } from "../global/Card";
import { candleProducts } from "../../constants/index";

export const BestSellers = () => {
  return (
    <section className="flex flex-col">
      <h1 className="flex py-5 mx-10 text-4xl text-gray-800 uppercase">
        New Arrivals
      </h1>
      <div className="flex overflow-x-auto md:snap-x mb-10 ml-20 md:horizontal-scroll">
        <div className="flex flex-wrap w-full justify-evenly my-10">
          {candleProducts.slice(0, 3).map((card, index) => (
            <div key={index}>
              <Card key={index} img={card.img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
