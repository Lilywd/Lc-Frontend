
import PropTypes from "prop-types";
const Button = ({ styles, content, type }) => (
  <button
    type={type ? type : "button"}
    className={`py-4 px-6 font-medium text-[18px] text-primary ${styles}`}
  >
    {content ? content : "Get Started"}
  </button>
);
Button.propTypes = {
  styles: PropTypes.string,
  content: PropTypes.string,
  type: PropTypes.string,
};
export default Button;
