import React from "react";
import { Button } from "../../../ui/Button";

const SearchFilter = ({ 
  searchQuery, 
  onSearchChange, 
  selectedCategory, 
  onCategoryChange, 
  onAddPortfolio, 
  categories 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      {/* Input Pencarian */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Cari portofolio..."
        className="border p-2 rounded-md w-full md:w-auto flex-1"
        aria-label="Cari portofolio"
      />
      
      {/* Filter Kategori */}
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border p-2 rounded-md w-full md:w-auto"
        aria-label="Filter kategori portofolio"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {/* Tombol Tambah Portofolio */}
      <Button
        onClick={onAddPortfolio}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
      >
        Tambah Portofolio
      </Button>
    </div>
  );
};

export default SearchFilter;
