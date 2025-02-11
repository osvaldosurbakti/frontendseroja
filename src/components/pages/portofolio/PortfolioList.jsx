import React from "react";
import { Link } from "react-router-dom";
import portfolioItems from "../../../data/portfolioItems"; // Impor data dummy

const PortfolioList = () => {
  // Filter portofolio dengan status aktif
  const activePortfolios = portfolioItems.filter((item) => item.status === "active");

  if (!activePortfolios.length) {
    return <p className="text-center text-gray-600">Belum ada portofolio tersedia.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {activePortfolios.map((item) => (
        <div
          key={item._id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            <Link
              to={`/portofolio/${item._id}`}
              className="block mt-4 text-blue-600 hover:underline"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
