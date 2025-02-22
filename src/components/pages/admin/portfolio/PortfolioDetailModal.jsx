import React from "react";

const PortfolioDetailModal = ({ portfolio, onClose }) => {
  if (!portfolio) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{portfolio.title}</h2>
        <img src={portfolio.imageUrl} alt={portfolio.title} className="w-full h-48 object-cover mb-4" />
        <p className="text-gray-700 mb-2"><strong>Kategori:</strong> {portfolio.category}</p>
        <p className="text-gray-700 mb-2"><strong>Deskripsi:</strong> {portfolio.description}</p>
        <p className="text-gray-700 mb-2"><strong>Status:</strong> {portfolio.status}</p>
        <p className="text-gray-700 mb-2"><strong>Dibuat oleh:</strong> {portfolio.createdBy}</p>
        <p className="text-gray-700 mb-4"><strong>Terakhir diperbarui:</strong> {portfolio.updatedAt}</p>
        <Button onClick={onClose} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
          Tutup
        </Button>
      </div>
    </div>
  );
};

export default PortfolioDetailModal;