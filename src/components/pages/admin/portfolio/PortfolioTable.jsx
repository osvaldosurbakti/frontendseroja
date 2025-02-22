import React, { useState } from "react";
import { Button } from "../../../ui/Button";
import Modal from "../../../ui/Modal"; // Import modal

const PortfolioTable = ({ portfolios = [], onEdit, onDelete, onViewDetail }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null); // Simpan data portfolio yang akan dihapus

  const handleDeleteClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setIsDeleteModalOpen(true); // Buka modal konfirmasi
  };

  const confirmDelete = () => {
    if (selectedPortfolio) {
      onDelete(selectedPortfolio._id);
      setIsDeleteModalOpen(false);
      setSelectedPortfolio(null);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden overflow-x-auto">
      <table className="w-full min-w-max">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-gray-700">Judul</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-700">Kategori</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-700">Deskripsi</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-700">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {portfolios.length > 0 ? (
            portfolios.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50 transition-all">
                <td className="p-4 text-sm text-gray-800">{item.title}</td>
                <td className="p-4 text-sm text-gray-800">{item.category}</td>
                <td className="p-4 text-sm text-gray-800 max-w-xs truncate">{item.description}</td>
                <td className="p-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-4 text-sm">
                  <div className="flex gap-2">
                    <Button
                      onClick={() => onEdit(item._id)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDeleteClick(item)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Hapus
                    </Button>
                    <Button
                      onClick={() => onViewDetail(item)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                    >
                      Lihat Detail
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-4 text-center text-gray-500">
                Tidak ada data tersedia.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal Konfirmasi Hapus */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Hapus Portfolio</h2>
          <p className="text-gray-700 mb-6">
            Apakah Anda yakin ingin menghapus{" "}
            <strong>{selectedPortfolio?.title}</strong>?
          </p>
          <div className="flex justify-end gap-4">
            <Button
              onClick={() => setIsDeleteModalOpen(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Batal
            </Button>
            <Button
              onClick={confirmDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Hapus
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PortfolioTable;
