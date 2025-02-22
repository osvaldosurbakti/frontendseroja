import React, { useState, useMemo } from "react";
import DeleteConfirmationModal from "../../../ui/DeleteConfirmationModal";
import StatusConfirmationModal from "../../../ui/StatusConfirmationModal";
import ActionButtons from "../../../ui/ActionButtons";
import StatusBadge from "../../../ui/StatusBadge";

const JobTable = ({ jobs = [], onDelete, onStatusToggle, dummyApplicants }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTogglingStatus, setIsTogglingStatus] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  // Fungsi untuk menghitung jumlah pelamar
  const countApplicants = (jobTitle) => {
    return dummyApplicants.filter((app) => app.appliedPosition === jobTitle).length;
  };

  // Fungsi untuk konfirmasi hapus
  const confirmDelete = async () => {
    if (!selectedJob || isDeleting) return;
    setIsDeleting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    onDelete(selectedJob._id);
    setIsDeleteModalOpen(false);
    setSelectedJob(null);
    setIsDeleting(false);
  };

  const handleStatusToggle = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === id ? { ...job, status: job.status === "open" ? "closed" : "open" } : job
      )
    );
  };
  // Fungsi untuk konfirmasi ubah status
  const confirmStatusToggle = async () => {
    if (!selectedJob || isTogglingStatus) return;
    setIsTogglingStatus(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("Mengubah status lowongan:", selectedJob._id); // Debugging
    onStatusToggle={handleStatusToggle} // Pastikan ini diteruskan
    setIsStatusModalOpen(false);
    setSelectedJob(null);
    setIsTogglingStatus(false);
  };

  // Fungsi untuk sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Sorting logic
  const sortedJobs = useMemo(() => {
    if (sortConfig.key) {
      return [...jobs].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return jobs;
  }, [jobs, sortConfig]);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden overflow-x-auto">
      <table className="w-full min-w-max">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-gray-700 cursor-pointer" onClick={() => handleSort("title")}>
              Posisi {sortConfig.key === "title" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-700 cursor-pointer" onClick={() => handleSort("location")}>
              Lokasi {sortConfig.key === "location" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-700 cursor-pointer" onClick={() => handleSort("salaryRange")}>
              Gaji {sortConfig.key === "salaryRange" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
            </th>
            <th className="p-4 text-left text-sm font-semibold text-gray-700">Pelamar</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="p-4 text-left text-sm font-semibold text-gray-700">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {sortedJobs.length > 0 ? (
            sortedJobs.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50 transition-all">
                <td className="p-4 text-sm text-gray-800">{item.title}</td>
                <td className="p-4 text-sm text-gray-800">{item.location}</td>
                <td className="p-4 text-sm text-gray-800">{item.salaryRange}</td>
                <td className="p-4 text-sm text-gray-800">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                    {countApplicants(item.title)} Pelamar
                  </span>
                </td>
                <td className="p-4 text-sm">
                  <StatusBadge
                    status={item.status}
                    onClick={() => {
                      setSelectedJob(item);
                      setIsStatusModalOpen(true);
                    }}
                  />
                </td>
                <td className="p-4 text-sm">
                  <ActionButtons
                    jobId={item._id}
                    onDeleteClick={() => {
                      setSelectedJob(item);
                      setIsDeleteModalOpen(true);
                    }}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-4 text-center text-gray-500">
                Tidak ada data tersedia.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal Konfirmasi Hapus */}
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        isLoading={isDeleting}
        jobTitle={selectedJob?.title}
      />

      {/* Modal Konfirmasi Ubah Status */}
      <StatusConfirmationModal
        isOpen={isStatusModalOpen}
        onClose={() => setIsStatusModalOpen(false)}
        onConfirm={confirmStatusToggle}
        isLoading={isTogglingStatus}
        jobTitle={selectedJob?.title}
        currentStatus={selectedJob?.status}
      />
    </div>
  );
};

export default JobTable;