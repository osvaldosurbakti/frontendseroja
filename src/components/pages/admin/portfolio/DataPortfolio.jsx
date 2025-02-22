import React from "react";
import { FaFolderOpen, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import portfolioItems from "../../../../data/dummyPortofolio";

const DataPortfolio = () => {
  const totalPortfolios = portfolioItems.length;
  const totalActive = portfolioItems.filter((item) => item.status === "active").length;
  const totalInactive = portfolioItems.filter((item) => item.status === "inactive").length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistik Portofolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Portofolio */}
        <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
          <FaFolderOpen className="text-blue-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Portofolio</h3>
            <p className="text-2xl font-bold text-gray-900">{totalPortfolios}</p>
          </div>
        </div>

        {/* Portofolio Aktif */}
        <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-4">
          <FaCheckCircle className="text-green-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Aktif</h3>
            <p className="text-2xl font-bold text-gray-900">{totalActive}</p>
          </div>
        </div>

        {/* Portofolio Nonaktif */}
        <div className="bg-red-50 p-4 rounded-lg flex items-center space-x-4">
          <FaTimesCircle className="text-red-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Nonaktif</h3>
            <p className="text-2xl font-bold text-gray-900">{totalInactive}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPortfolio;
