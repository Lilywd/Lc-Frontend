import PropTypes from "prop-types";
//todo make responsive menu
// import { useState } from "react";
// import { menu, close } from "../../assets";

const Navbar = ({ logo }) => {
  // const [toggle, setToggle] = useState(false);
  return (
    <nav className="dark:bg-gray-900 uppercase font-extrabold">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto px-16 border-b-2 border-b-gray-500">
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto py-8 pr-16  border-r-2 border-gray-500 text-white"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="cursor-pointer block md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 md:hover:text-secondary"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <a href="#" className="flex items-center text-white">
          {logo ? (
            <div className="w-24 mb-5">
              <img src={logo} className="h-8 object-cover w-full" alt="Logo" />
            </div>
          ) : (
            <h2>Hello Candle</h2>
          )}
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-2 py-8 pl-16  border-l-2 border-gray-500 text-white"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-bold p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <a
                href="#"
                className="cursor-pointer block py-2 text-white rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 md:hover:text-secondary"
                aria-current="page"
              >
                search
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                register
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer block hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="cursor-pointer block py-2rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-secondary md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-white "
              >
                cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
Navbar.propTypes = {
  logo: PropTypes.string,
};

export default Navbar;
