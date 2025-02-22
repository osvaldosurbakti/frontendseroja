import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import portfolioItems from "../../../data/dummyPortofolio";
import { Button } from "../../../components/ui/Button"; // Import komponen Button
import Modal from "../../../components/ui/Modal"; // Named import untuk Modal

const PortfolioDetail = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate(); // Untuk navigasi
  const [portfolio, setPortfolio] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State untuk modal hapus

  useEffect(() => {
    // Cari portfolio berdasarkan ID
    const currentPortfolio = portfolioItems.find((item) => item._id === id);
    setPortfolio(currentPortfolio || null);
  }, [id]);

  // Fungsi untuk menghapus portfolio
  const handleDelete = () => {
    // Simulasi penghapusan data
    console.log("Portfolio deleted:", portfolio);
    alert("Portfolio berhasil dihapus!");
    navigate("/admin/portfolio"); // Kembali ke halaman manajemen portfolio
  };

  if (!portfolio) return <p className="text-center text-gray-600">Portfolio tidak ditemukan...</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Detail Portfolio</h1>
      <img src={portfolio.imageUrl} alt={portfolio.title} className="w-full h-64 object-cover mb-4 rounded-lg" />
      <p className="text-gray-700 mb-2"><strong>Judul:</strong> {portfolio.title}</p>
      <p className="text-gray-700 mb-2"><strong>Kategori:</strong> {portfolio.category}</p>
      <p className="text-gray-700 mb-2"><strong>Deskripsi:</strong> {portfolio.description}</p>
      <p className="text-gray-700 mb-2"><strong>Status:</strong> {portfolio.status}</p>
      <p className="text-gray-700 mb-2"><strong>Dibuat oleh:</strong> {portfolio.createdBy}</p>
      <p className="text-gray-700 mb-2"><strong>Tanggal Dibuat:</strong> {portfolio.createdAt}</p>
      <p className="text-gray-700 mb-2"><strong>Terakhir Diperbarui:</strong> {portfolio.updatedAt}</p>

      {/* Tombol Aksi */}
      <div className="flex gap-4 mt-6">
        <Button
          onClick={() => navigate(`/admin/portfolio/edit/${id}`)} // Navigasi ke halaman edit
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
        >
          Edit
        </Button>
        <Button
          onClick={() => setIsDeleteModalOpen(true)} // Buka modal hapus
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Hapus
        </Button>
      </div>

      {/* Modal Konfirmasi Hapus */}
      <Modal isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Hapus Portfolio</h2>
          <p className="text-gray-700 mb-6">Apakah Anda yakin ingin menghapus portfolio ini?</p>
          <div className="flex justify-end gap-4">
            <Button
              onClick={() => setIsDeleteModalOpen(false)} // Tutup modal
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Batal
            </Button>
            <Button
              onClick={handleDelete} // Konfirmasi hapus
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

export default PortfolioDetail;