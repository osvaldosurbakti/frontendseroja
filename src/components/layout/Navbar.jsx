import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200">
            Seroja Medan Group
          </Link>
        </div>

        {/* Burger Menu (Mobile) */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 md:space-x-6 items-center md:static absolute left-0 top-full w-full md:w-auto bg-blue-600 md:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="text-center py-2 md:py-0">
            <Link to="/" className="text-lg hover:text-gray-200 transition duration-300">
              Home
            </Link>
          </li>
          <li className="text-center py-2 md:py-0">
            <Link to="/tentang-kami" className="text-lg hover:text-gray-200 transition duration-300">
              Tentang Kami
            </Link>
          </li>
          <li className="text-center py-2 md:py-0">
            <Link to="/portofolio" className="text-lg hover:text-gray-200 transition duration-300">
              Portofolio
            </Link>
          </li>
          <li className="text-center py-2 md:py-0">
  <a
    href="/karir"
    className="text-lg hover:text-gray-200 transition duration-300"
  >
    Karir
  </a>
</li>

          <li className="text-center py-2 md:py-0">
            <Link to="/hubungi-kami" className="text-lg hover:text-gray-200 transition duration-300">
              Hubungi Kami
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
