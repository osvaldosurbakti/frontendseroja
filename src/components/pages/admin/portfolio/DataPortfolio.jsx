import React from "react";
import { FaFolderOpen, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import portfolioItems from "../../../../data/dummyPortofolio";

// Komponen untuk Kartu Statistik
const StatCard = ({ icon: Icon, color, title, count }) => (
  <div className={`p-4 rounded-lg flex items-center space-x-4 bg-${color}-50`}>
    <Icon className={`text-${color}-500 text-3xl`} aria-label={title} />
    <div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{count}</p>
    </div>
  </div>
);

const DataPortfolio = () => {
  const totalPortfolios = portfolioItems.length;
  const totalActive = portfolioItems.filter((item) => item.status === "active").length;
  const totalInactive = portfolioItems.filter((item) => item.status === "inactive").length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistik Portofolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard icon={FaFolderOpen} color="blue" title="Total Portofolio" count={totalPortfolios} />
        <StatCard icon={FaCheckCircle} color="green" title="Aktif" count={totalActive} />
        <StatCard icon={FaTimesCircle} color="red" title="Nonaktif" count={totalInactive} />
      </div>
    </div>
  );
};

export default DataPortfolio;
