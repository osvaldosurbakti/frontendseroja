import React from "react";
import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SearchBar = ({ searchQuery, onSearchChange }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full md:w-1/3">
      <FaSearch className="absolute left-3 top-3 text-gray-500" />
      <input
        type="text"
        placeholder={t("search.placeholder")}
        value={searchQuery}
        onChange={onSearchChange}
        className="pl-10 pr-4 py-2 border rounded-lg w-full bg-white shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;
