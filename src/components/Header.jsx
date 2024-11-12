import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">World Tour</span>
          </Link>

          {/* Hamburger icon for mobile */}
          <button
            className="md:hidden ml-auto p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Links: Hidden on mobile by default, visible when isMenuOpen is true */}

          <nav
            className={`${
              isMenuOpen ? "flex flex-col" : "hidden"
            } flex-col md:flex-row lg:w-2/5 items-center text-center text-base md:ml-auto`}
          >
            <Link
              to="/"
              className="mx-1 cursor-pointer px-2 py-2 text-center  text-gray-600 focus:bg-gray-300 md:focus:bg-transparent "
            >
              Deals
            </Link>
            <Link
              to="/"
              className="mx-1 cursor-pointer px-2 py-2 text-center  text-gray-600 focus:bg-gray-300 md:focus:bg-transparent "
            >
              Support
            </Link>
            <Link
              to="/"
              className="mx-1 cursor-pointer px-2  py-2 text-center  text-gray-600  focus:bg-gray-300 md:focus:bg-transparent "
            >
              Partnership
            </Link>
            <Link
              to="/"
              className="mx-1 cursor-pointer px-2  py-2 text-center  text-gray-600  focus:bg-gray-300 md:focus:bg-transparent "
            >
              Booking
            </Link>
          </nav>

          {/* Buttons */}
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-2 mt-4 md:mt-0">
            <button className="inline-flex items-center rounded-full border border-gray-400 py-1 px-6 focus:outline-none hover:bg-gray-200 text-base">
              Log In
            </button>
            <button className="inline-flex items-center rounded-full bg-black py-1 px-6 focus:outline-none hover:bg-black/80 text-base text-white">
              Register
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
