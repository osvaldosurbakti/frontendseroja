import React, { useState } from "react";
import { FaTrash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ApplicantTable = ({
  currentApplicants,
  selectedApplicants,
  handleSelectApplicant,
  handleSort,
  sortConfig,
  filteredApplicants,
  setSelectedApplicants,
  onDelete, // Fungsi untuk menghapus pelamar
  onChangeStatus, // Fungsi untuk mengubah status
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk mengontrol modal
  const [selectedApplicantId, setSelectedApplicantId] = useState(null); // State untuk menyimpan ID pelamar yang dipilih
  const [newStatus, setNewStatus] = useState("Pending"); // State untuk menyimpan status baru

  // Fungsi untuk membuka modal dan menyimpan ID pelamar yang dipilih
  const handleStatusClick = (id) => {
    setSelectedApplicantId(id);
    setIsModalOpen(true);
  };

  // Fungsi untuk mengubah status setelah konfirmasi
  const handleConfirmStatusChange = () => {
    onChangeStatus(selectedApplicantId, newStatus);
    setIsModalOpen(false); // Tutup modal setelah mengubah status
  };

  return (
    <>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-4 text-left">
              <input
                type="checkbox"
                checked={selectedApplicants.length === filteredApplicants.length}
                onChange={() => {
                  if (selectedApplicants.length === filteredApplicants.length) {
                    setSelectedApplicants([]); // Unselect all
                  } else {
                    setSelectedApplicants(filteredApplicants.map((applicant) => applicant._id)); // Select all
                  }
                }}
              />
            </th>
            <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort("name")}>
              Nama {sortConfig.key === "name" && (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
            <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort("appliedPosition")}>
              Posisi {sortConfig.key === "appliedPosition" && (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
            <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort("status")}>
              Status {sortConfig.key === "status" && (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
            <th className="py-3 px-4 text-left cursor-pointer" onClick={() => handleSort("appliedDate")}>
              Tanggal Melamar {sortConfig.key === "appliedDate" && (sortConfig.direction === "asc" ? "↑" : "↓")}
            </th>
            <th className="py-3 px-4 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentApplicants.length > 0 ? (
            currentApplicants.map((applicant) => (
              <tr key={applicant._id} className="border-b">
                <td className="py-3 px-4">
                  <input
                    type="checkbox"
                    checked={selectedApplicants.includes(applicant._id)}
                    onChange={() => handleSelectApplicant(applicant._id)}
                  />
                </td>
                <td className="py-3 px-4">{applicant.name}</td>
                <td className="py-3 px-4">{applicant.appliedPosition}</td>
                <td
                  className={`py-3 px-4 font-semibold cursor-pointer ${
                    applicant.status === "Rejected" ? "text-red-600" : "text-green-600"
                  }`}
                  onClick={() => handleStatusClick(applicant._id)} // Klik status untuk membuka modal
                >
                  {applicant.status}
                </td>
                <td className="py-3 px-4">{applicant.appliedDate}</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    {/* Tombol Detail */}
                    <Link
                      to={`/admin/applicants/${applicant._id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center"
                    >
                      <FaEye className="mr-1" /> Detail
                    </Link>

                    {/* Tombol Hapus */}
                    <button
                      onClick={() => onDelete(applicant._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center"
                    >
                      <FaTrash className="mr-1" /> Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-3 text-gray-500">
                Tidak ada pelamar ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal untuk mengubah status */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Ubah Status</h2>
            <select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
              className="border p-2 rounded w-full mb-4"
            >
              <option value="Pending">Pending</option>
              <option value="Reviewed">Reviewed</option>
              <option value="Interview Scheduled">Interview Scheduled</option>
              <option value="Rejected">Rejected</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmStatusChange}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicantTable;