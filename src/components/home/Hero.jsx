import Navbar from "../global/Navbar";
import { AboutSection } from "./AboutSection";
import { NewArrivals } from "./NewArrivals";

const Hero = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-cover bg-no-repeat hero-img">
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed ">
          <Navbar />
          <div className="flex h-full items-center justify-center">
            <div className="px-6 text-center text-white md:px-12 uppercase">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                LILIAN CANDLES
              </h1>
              <h3 className="mb-8 text-1xl md:text-3xl  font-bold">
                Best candles in town
              </h3>
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
      <NewArrivals/>
    </>
  );
};

export default Hero;
