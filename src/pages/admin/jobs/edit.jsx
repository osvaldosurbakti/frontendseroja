import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import JobForm from "../../../components/pages/admin/jobs/JobForm"; // Import komponen JobForm
import dummyJobs from "../../../data/dummyJobs"; // Import data dummy
import Modal from "../../../components/ui/Modal"; // Import komponen Modal

const EditJob = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null); // State untuk menyimpan data awal
  const [isLoading, setIsLoading] = useState(true); // State untuk loading
  const [error, setError] = useState(null); // State untuk error
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); // State untuk modal konfirmasi
  const [updatedJobData, setUpdatedJobData] = useState(null); // State untuk menyimpan data yang akan di-submit

  // Simulasikan pengambilan data dari API
  useEffect(() => {
    const fetchJobData = () => {
      try {
        const jobToEdit = dummyJobs.find((job) => job._id === id); // Cari pekerjaan berdasarkan ID
        if (!jobToEdit) {
          throw new Error("Lowongan tidak ditemukan!");
        }

        // Format data sebelum diteruskan ke JobForm
        const formattedJob = {
          ...jobToEdit,
          requirements: jobToEdit.requirements.join(", "), // Ubah array requirements menjadi string
        };
        setInitialData(formattedJob);
      } catch (err) {
        setError(err.message); // Set error jika terjadi masalah
      } finally {
        setIsLoading(false); // Set loading selesai
      }
    };

    fetchJobData();
  }, [id]);

  // Fungsi untuk menangani submit
  const handleSubmit = (updatedJob) => {
    setUpdatedJobData(updatedJob); // Simpan data yang akan di-submit
    setIsConfirmModalOpen(true); // Buka modal konfirmasi
  };

  // Fungsi untuk menangani konfirmasi
  const handleConfirm = () => {
    console.log("Lowongan Diperbarui:", updatedJobData);
    alert("Lowongan berhasil diperbarui!");
    navigate("/admin/jobs"); // Navigasi kembali ke halaman daftar pekerjaan
    setIsConfirmModalOpen(false); // Tutup modal
  };

  // Fungsi untuk menangani batal
  const handleCancel = () => {
    setIsConfirmModalOpen(false); // Tutup modal tanpa melakukan apa-apa
  };

  // Jika data sedang dimuat
  if (isLoading) {
    return (
      <div className="container mx-auto p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-700">Memuat data...</p>
      </div>
    );
  }

  // Jika terjadi error
  if (error) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">{error}</h1>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Kembali
        </button>
      </div>
    );
  }

  // Render JobForm dengan initialData dan handleSubmit
  return (
    <div>
      <JobForm initialData={initialData} onSubmit={handleSubmit} />

      {/* Modal Konfirmasi */}
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        isConfirmModal={true}
        message="Apakah Anda yakin ingin menyimpan perubahan?"
        confirmText="Ya, Simpan"
        cancelText="Batal"
      />
    </div>
  );
};

export default EditJob;