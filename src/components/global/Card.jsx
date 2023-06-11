import PropTypes from "prop-types";

export const Card = ({ img }) => {
  return (
    <div className="inline-block px-3 ">
      <div className="w-72 h-96 max-w-xs overflow-hidden  shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out snap-start">
        <img className="w-full h-full" src={img} />
      </div>
      <p className="py-2 uppercase text-xs font-semibold">Candle</p>
    </div>
  );
};
Card.propTypes = {
  img: PropTypes.string,
};
