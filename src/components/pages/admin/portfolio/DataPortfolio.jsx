import React from "react";
import { FaFolderOpen, FaCheckCircle, FaTimesCircle, FaClock, FaThList } from "react-icons/fa";
import portfolioItems from "../../../../data/dummyPortofolio";
import dayjs from "dayjs";

// Komponen untuk Kartu Statistik
const StatCard = ({ icon: Icon, color, title, count }) => (
  <div className={`p-4 rounded-lg flex items-center space-x-4 bg-${color}-50 shadow-md`}>
    <Icon className={`text-${color}-500 text-3xl`} aria-label={title} />
    <div>
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{count}</p>
    </div>
  </div>
);

const DataPortfolio = () => {
  const totalPortfolios = portfolioItems.length;

  // Statistik Berdasarkan Kategori
  const categoryStats = portfolioItems.reduce((acc, item) => {
    const category = item.category.name;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  // Statistik Berdasarkan Waktu (30 hari terakhir)
  const now = dayjs();
  const recentCreated = portfolioItems.filter(item => dayjs(item.createdAt).isAfter(now.subtract(30, 'day'))).length;
  const recentUpdated = portfolioItems.filter(item => dayjs(item.updatedAt).isAfter(now.subtract(30, 'day'))).length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistik Portofolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard icon={FaFolderOpen} color="blue" title="Total Portofolio" count={totalPortfolios} />
        <StatCard icon={FaClock} color="yellow" title="Dibuat 30 Hari Terakhir" count={recentCreated} />
        <StatCard icon={FaClock} color="purple" title="Diperbarui 30 Hari Terakhir" count={recentUpdated} />
      </div>

      {/* Statistik Berdasarkan Kategori */}
      <h3 className="text-lg font-semibold text-gray-700 mt-6">Portofolio Berdasarkan Kategori</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {Object.entries(categoryStats).map(([category, count]) => (
          <div key={category} className="p-4 bg-gray-100 rounded-lg shadow-md flex items-center space-x-3">
            <FaThList className="text-blue-500 text-2xl" />
            <div>
              <h4 className="text-gray-800 font-semibold">{category}</h4>
              <p className="text-gray-600">{count} Proyek</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPortfolio;
