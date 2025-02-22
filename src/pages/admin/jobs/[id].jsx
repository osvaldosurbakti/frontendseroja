import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyJobs from "../../../data/dummyJobs";
import Modal from "../../../components/ui/Modal"; // Import komponen Modal

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = dummyJobs.find((job) => job._id === id);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State untuk modal hapus

  if (!job) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">Lowongan tidak ditemukan!</h1>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Kembali
        </button>
      </div>
    );
  }

  // Fungsi untuk menghapus lowongan
  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  // Fungsi untuk mengonfirmasi penghapusan
  const confirmDelete = () => {
    console.log("Lowongan dihapus:", job._id);
    alert("Lowongan berhasil dihapus!");
    navigate("/admin/jobs");
  };

  // Fungsi untuk navigasi ke halaman edit
  const handleEdit = () => {
    navigate(`/admin/jobs/edit/${job._id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>
        <div className="space-y-4 text-gray-700">
          <p><span className="font-semibold">Deskripsi:</span> {job.description}</p>
          <p><span className="font-semibold">Persyaratan:</span> {job.requirements.join(", ")}</p>
          <p><span className="font-semibold">Lokasi:</span> {job.location}</p>
          <p><span className="font-semibold">Gaji:</span> {job.salaryRange}</p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span className={`font-semibold ${job.status === "open" ? "text-green-600" : "text-red-600"}`}>
              {job.status}
            </span>
          </p>
          <p><span className="font-semibold">Tipe Pekerjaan:</span> {job.employmentType}</p>
          <p><span className="font-semibold">Tingkat Pengalaman:</span> {job.experienceLevel}</p>
          <p><span className="font-semibold">Departemen:</span> {job.department}</p>
          <p><span className="font-semibold">Dibuat Pada:</span> {new Date(job.createdAt).toLocaleDateString()}</p>
          <p><span className="font-semibold">Diperbarui Pada:</span> {new Date(job.updatedAt).toLocaleDateString()}</p>
        </div>

        {/* Tombol Aksi */}
        <div className="flex gap-4 mt-8">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={handleEdit}>
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg" onClick={handleDelete}>
            Hapus
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={() => navigate(-1)}>
            Kembali
          </button>
        </div>
      </div>

      {/* Modal Konfirmasi Hapus */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        isConfirmModal={true}
        message="Apakah Anda yakin ingin menghapus lowongan ini?"
        confirmText="Ya, Hapus"
        cancelText="Batal"
      />
    </div>
  );
};

export default JobDetail;
