import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import portfolioItems from "../../../data/dummyPortofolio";
import { Button } from "../../../components/ui/Button";
import Modal from "../../../components/ui/Modal";

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const currentPortfolio = portfolioItems.find((item) => item._id === id);
    console.log("Current Portfolio:", currentPortfolio); // Debug
    setPortfolio(currentPortfolio || null);
  }, [id]);

  const handleDelete = () => {
    console.log("Portfolio deleted:", portfolio);
    alert("Portfolio berhasil dihapus!");
    setTimeout(() => navigate("/admin/portfolio"), 300);
  };

  if (!portfolio)
    return <p className="text-center text-gray-600">Portfolio tidak ditemukan...</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Detail Portfolio</h1>
      
      {/* Pastikan gambar tersedia sebelum ditampilkan */}
      {portfolio.imageUrl && (
        <img
          src={portfolio.imageUrl}
          alt={portfolio.title}
          className="w-full h-64 object-cover mb-4 rounded-lg"
        />
      )}

      <p className="text-gray-700 mb-2">
        <strong>Judul:</strong> {portfolio.title}
      </p>
      <p className="text-gray-700 mb-2">
  <strong>Kategori:</strong> {portfolio.category?.name || "Tidak ada kategori"}
</p>
<p className="text-gray-700 mb-2">
  <strong>Status:</strong> {portfolio.status}
</p>
<p className="text-gray-700 mb-2">
  <strong>Dibuat oleh:</strong> {portfolio.createdBy || "Tidak diketahui"}
</p>
<p className="text-gray-700 mb-2">
  <strong>Tanggal Dibuat:</strong> {portfolio.createdAt}
</p>
<p className="text-gray-700 mb-2">
  <strong>Terakhir Diperbarui:</strong> {portfolio.updatedAt}
</p>

      {/* Tombol Aksi */}
      <div className="flex gap-4 mt-6">
        <Button
          onClick={() => navigate(`/admin/portfolio/edit/${id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
        >
          Edit
        </Button>
        <Button
          onClick={() => setIsDeleteModalOpen(true)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Hapus
        </Button>
      </div>

      {/* Modal Konfirmasi Hapus */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete} // Jika Modal mendukung onConfirm
        isConfirmModal={true}
        message="Apakah Anda yakin ingin menghapus portfolio ini?"
        confirmText="Ya, Hapus"
        cancelText="Batal"
      />
    </div>
  );
};

export default PortfolioDetail;
