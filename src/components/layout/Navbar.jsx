import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const isActive = (path) => location.pathname === path;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  // Map paths to translation keys
  const pathToKeyMap = {
    "/": "home",
    "/tentang-kami": "about_us",
    "/portofolio": "portfolio",
    "/karir": "career",
    "/hubungi-kami": "contact",
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white shadow-sm fixed w-full z-50 backdrop-blur-md bg-opacity-90">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-12">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 text-2xl font-bold hover:opacity-80 transition duration-300">
          <img
            src={logo}
            alt="Seroja Medan Group Logo"
            className="h-12 w-12 rounded-lg shadow-md transform hover:scale-110 transition-transform duration-300"
          />
          <span className="hidden md:block text-xl font-semibold">Seroja Medan Group</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none transform hover:scale-110 transition-transform duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:relative left-0 top-full md:top-0 w-full md:w-auto bg-blue-700 md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-6 text-lg text-center md:text-left transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block p-5 shadow-lg backdrop-blur-md bg-opacity-90" : "hidden md:flex"
          }`}
        >
          {["/", "/tentang-kami", "/portofolio", "/karir"].map((path, index) => (
            <li key={index} className="transform hover:scale-105 transition-transform duration-300">
              <Link
                to={path}
                className={`px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2 ${
                  isActive(path) ? "bg-blue-900 font-bold shadow-inner" : "hover:bg-blue-800 hover:shadow-md"
                }`}
              >
                {isActive(path) && <FaCircle className="text-white text-xs" />}
                <span>{t(`header.${pathToKeyMap[path]}`)}</span>
              </Link>
            </li>
          ))}
          <li className="transform hover:scale-105 transition-transform duration-300">
            <Link
              to="/hubungi-kami"
              className="bg-white text-blue-700 px-5 py-2 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 font-semibold flex items-center space-x-2"
            >
              <span>{t("header.contact")}</span>
            </Link>
          </li>
          <li className="transform hover:scale-105 transition-transform duration-300">
            <button
              onClick={() => changeLanguage(language === "id" ? "en" : "id")}
              className="bg-white text-blue-700 px-3 py-2 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 font-semibold flex items-center space-x-2"
            >
              <span>{language === "id" ? "EN" : "ID"}</span>
            </button>
          </li>
          <li className="transform hover:scale-105 transition-transform duration-300">
            <Link
              to="/login"
              className="bg-white text-blue-700 px-5 py-2 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 font-semibold flex items-center space-x-2"
            >
              <span>Login</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;