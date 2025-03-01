import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.png";

// Daftar menu dinamis
const menuItems = [
  { path: "/", key: "home" },
  { path: "/tentang-kami", key: "about_us" },
  { path: "/portofolio", key: "portfolio" },
  { path: "/karir", key: "career" },
  { path: "/hubungi-kami", key: "contact", special: false }, // tombol kontak berbeda desain
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const menuRef = useRef(null);

  // Deteksi bahasa dari i18n langsung
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  // Deteksi klik di luar menu untuk menutupnya
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => location.pathname === path;

  const changeLanguage = () => {
    const newLang = language === "id" ? "en" : "id";
    i18n.changeLanguage(newLang);
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
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>

        {/* Navigation Links */}
        <ul
          ref={menuRef}
          className={`absolute md:relative left-0 top-full md:top-0 w-full md:w-auto bg-blue-700 md:bg-transparent md:flex space-y-4 md:space-y-0 md:space-x-6 text-lg text-center md:text-left transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block p-5 shadow-lg backdrop-blur-md bg-opacity-90" : "hidden md:flex"
          }`}
        >
          {menuItems.map(({ path, key, special }, index) => (
            <li key={index} className="transform hover:scale-105 transition-transform duration-300">
              <Link
                to={path}
                className={`px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2 ${
                  isActive(path) ? "bg-blue-900 font-bold shadow-inner" : "hover:bg-blue-800 hover:shadow-md"
                } ${special ? "bg-white text-blue-700 shadow-md hover:bg-gray-100" : ""}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {isActive(path) && <FaCircle className="text-white text-xs" />}
                <span>{t(`header.${key}`)}</span>
              </Link>
            </li>
          ))}

          {/* Tombol Ganti Bahasa */}
          <li className="transform hover:scale-105 transition-transform duration-300">
            <button
              onClick={changeLanguage}
              className="bg-white text-blue-700 px-3 py-2 rounded-md shadow-md hover:bg-gray-100 hover:shadow-lg transition duration-300 font-semibold flex items-center space-x-2"
            ><img
            src={language === "id" ? "/flags/gb.png" : "/flags/id.png"}
            alt={language === "id" ? "English" : "Indonesian"}
            className="w-5 h-5 inline-block mr-2"
          />
          <span>{language === "id" ? "EN" : "ID"}</span>
          </button>
          </li>

          {/* Tombol Login */}
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
