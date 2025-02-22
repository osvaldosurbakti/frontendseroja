import React, { useState, useEffect, useMemo } from "react";
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

  // Filtering menggunakan useMemo agar lebih efisien
  const filteredJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        (filterStatus === "all" || job.status === filterStatus)
    );
  }, [jobs, search, filterStatus]);

  // Reset ke halaman pertama saat filter atau pencarian berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [search, filterStatus]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Notifikasi */}
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}

      {/* Judul Halaman */}
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Manajemen Lowongan Pekerjaan
      </h1>

      {/* Data Lowongan */}
      <div className="mb-8">
        <DataLowongan />
      </div>

      {/* Filter dan Pencarian */}
      <JobFilters
        search={search}
        setSearch={setSearch}
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
      />

      {/* Tabel Lowongan */}
      <JobTable
        jobs={currentJobs}
        onDelete={handleDelete}
        onStatusToggle={handleStatusToggle}
        dummyApplicants={dummyApplicants}
      />

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default JobManagement;