import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  // Check if the current route is active
  const isActive = (path) => location.pathname === path;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6 md:px-10">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide flex items-center">
          <Link to="/" className="hover:text-gray-200 flex items-center transition duration-300">
            <img
              src="src/assets/images/logo.png" // Ganti dengan path logo Anda
              alt="Seroja Medan Group Logo"
              className="h-10 w-10 mr-2 rounded-lg shadow-md"
            />
            Seroja Medan Group
          </Link>
        </div>

        {/* Burger Menu (Mobile) */}
        <button
          className="block md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FaTimes size={24} className="hover:text-gray-300 transition duration-300" />
          ) : (
            <FaBars size={24} className="hover:text-gray-300 transition duration-300" />
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-y-4 md:space-y-0 md:space-x-8 items-center md:static absolute left-0 top-full w-full md:w-auto bg-blue-600 md:bg-transparent transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block p-4 shadow-lg" : "hidden"
          }`}
        >
          <li className="text-center">
            <Link
              to="/"
              className={`text-lg px-3 py-2 rounded-md transition duration-300 ${
                isActive("/") ? "bg-blue-700 font-bold" : "hover:bg-blue-700"
              }`}
            >
              {t("header.home")}
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/tentang-kami"
              className={`text-lg px-3 py-2 rounded-md transition duration-300 ${
                isActive("/tentang-kami") ? "bg-blue-700 font-bold" : "hover:bg-blue-700"
              }`}
            >
              {t("header.about_us")}
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/portofolio"
              className={`text-lg px-3 py-2 rounded-md transition duration-300 ${
                isActive("/portofolio") ? "bg-blue-700 font-bold" : "hover:bg-blue-700"
              }`}
            >
              {t("header.portfolio")}
            </Link>
          </li>
          <li className="text-center">
            <Link
              to="/karir"
              className={`text-lg px-3 py-2 rounded-md transition duration-300 ${
                isActive("/karir") ? "bg-blue-700 font-bold" : "hover:bg-blue-700"
              }`}
            >
              {t("header.career")}
            </Link>
          </li>
          {/* CTA Button */}
          <li className="text-center">
            <Link
              to="/hubungi-kami"
              className="bg-white text-blue-600 px-5 py-2 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 font-semibold"
            >
              {t("header.contact")}
            </Link>
          </li>
          <li className="text-center">
            <button
              onClick={() => changeLanguage(language === "id" ? "en" : "id")}
              className="bg-white text-blue-600 px-3 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-300 font-semibold"
            >
              {language === "id" ? "EN" : "ID"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;