import React from "react";
import portfolioItems from "../../../data/portfolioItems"; // Impor data dummy

const PortfolioDetail = ({ id }) => {
  const item = portfolioItems.find((item) => item._id === id);

  if (!item) {
    return <p className="text-center text-gray-600">Portofolio tidak ditemukan.</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <p className="text-sm text-gray-500">
          Dibuat pada: {new Date(item.createdAt).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500">
          Diperbarui pada: {new Date(item.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PortfolioDetail;
