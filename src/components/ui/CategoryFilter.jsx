import React from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const CategoryFilter = ({
  searchQuery,
  onSearchChange,
  selectedCategory = "", // Default to empty string
  onCategoryChange,
  categories = [], // Default to an empty array
}) => {
  const { t } = useTranslation();

  // Mapping kategori agar sesuai dengan ID yang diterjemahkan
  const categoryMap = {
    "konstruksi-gedung": "building_construction",
    "konstruksi-sipil": "civil_construction",
    "desain-interior-eksterior": "interior_exterior_design",
    "marmer": "marble",
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* Search Bar */}
      <div className="relative w-full md:w-1/3">
        <FaSearch className="absolute left-3 top-3 text-gray-500" />
        <input
          type="text"
          placeholder={t("search.placeholder")}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 border rounded-lg w-full bg-white shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
      </div>

      {/* Category Filter Dropdown */}
      <div className="relative w-full md:w-1/3">
        <FaFilter className="absolute left-3 top-3 text-gray-500" />
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="pl-10 pr-4 py-2 border rounded-lg w-full bg-white shadow-sm focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        >
          {/* Default empty option */}
          <option value="">{t("portfolio.all_categories")}</option>

          {/* Dynamically render category options with translation */}
          {categories.map((category) => {
            const translatedCategoryId = categoryMap[category.id] || category.id;
            return (
              <option key={category.id} value={category.id}>
                {t(`portfolio.categories.${translatedCategoryId}`, category.name)}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CategoryFilter;
