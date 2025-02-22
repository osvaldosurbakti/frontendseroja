import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import dummyJobs from "../../../data/dummyJobs";
import dummyApplicants from "../../../data/dummyApplicants";
import JobFilters from "../../../components/pages/admin/jobs/JobFilters";
import JobTable from "../../../components/pages/admin/jobs/JobTable";
import Pagination from "../../../components/ui/Pagination";
import Notification, { NotificationType } from "../../../components/ui/Notification";
import DataLowongan from "../../../components/pages/admin/jobs/DataLowongan";

const JobManagement = () => {
  const [jobs, setJobs] = useState(dummyJobs);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [notification, setNotification] = useState(null);
  const jobsPerPage = 5;
  const navigate = useNavigate();

  // Notifikasi otomatis hilang setelah 3 detik
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Fungsi untuk menghapus lowongan
  const handleDelete = (id) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
    setNotification({ type: NotificationType.SUCCESS, message: "Lowongan berhasil dihapus!" });
  };

  // Fungsi untuk mengubah status lowongan
  const handleStatusToggle = (id) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job._id === id ? { ...job, status: job.status === "open" ? "closed" : "open" } : job
      )
    );
    setNotification({ type: NotificationType.SUCCESS, message: "Status lowongan berhasil diubah!" });
  };

  // Filtering dan Pagination menggunakan useMemo
  const filteredJobs = useMemo(() => {
    return jobs.filter(
      ({ title, status }) =>
        title.toLowerCase().includes(search.toLowerCase()) &&
        (filterStatus === "all" || status === filterStatus)
    );
  }, [jobs, search, filterStatus]);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const currentJobs = useMemo(() => {
    const start = (currentPage - 1) * jobsPerPage;
    return filteredJobs.slice(start, start + jobsPerPage);
  }, [filteredJobs, currentPage, jobsPerPage]);

  return (
    <div className="container mx-auto p-6">
      {/* Notifikasi */}
      {notification && <Notification type={notification.type} message={notification.message} />}

      {/* Judul Halaman */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manajemen Lowongan Pekerjaan</h1>

      {/* Statistik Lowongan */}
      <DataLowongan />

      {/* Spacer untuk jarak antara statistik dan filter */}
      <div className="mb-4"></div>

      {/* Filter dan Pencarian */}
      <JobFilters
        searchQuery={search}
        onSearchChange={setSearch}
        selectedStatus={filterStatus}
        onStatusChange={setFilterStatus}
        onAddJob={() => navigate("/admin/jobs/add")}
      />

      {/* Tabel Lowongan atau Pesan Jika Kosong */}
      {currentJobs.length > 0 ? (
        <JobTable
          jobs={currentJobs}
          onEdit={(id) => navigate(`/admin/jobs/edit/${id}`)}
          onDelete={handleDelete}
          onStatusToggle={handleStatusToggle}
          dummyApplicants={dummyApplicants}
        />
      ) : (
        <p className="text-center text-gray-500">Data tidak ditemukan.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </div>
  );
};

export default JobManagement;
