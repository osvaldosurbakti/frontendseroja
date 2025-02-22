import React from "react";
import { FaFilter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CategoryFilter = ({ selectedCategory = "All", onCategoryChange, categories = [] }) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full md:w-1/3">
      <FaFilter className="absolute left-3 top-3 text-gray-500" />
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="pl-10 pr-4 py-2 border rounded-lg w-full bg-white shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-200 cursor-pointer"
      >
        {categories.map((category, index) => (
          <option key={category.id || index} value={category.id}>
            {t(`portfolio.categories.${category.id}`, category.name)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
