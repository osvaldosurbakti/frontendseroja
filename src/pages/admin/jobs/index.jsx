import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dummyJobs from "../../../data/dummyJobs";
import dummyApplicants from "../../../data/dummyApplicants";
import JobFilters from "../../../components/pages/admin/JobFilters";
import JobTable from "../../../components/pages/admin/JobTable";
import Pagination from "../../../components/pages/admin/Pagination";
import Notification, { NotificationType } from "../../../components/ui/Notification";

const JobManagement = () => {
  const [jobs, setJobs] = useState(dummyJobs);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus lowongan ini?")) {
      setJobs(jobs.filter((job) => job._id !== id));
      setNotification({ type: NotificationType.SUCCESS, message: "Lowongan berhasil dihapus!" });
    }
  };

  const handleStatusToggle = (id) => {
    setJobs(jobs.map((job) => 
      job._id === id ? { ...job, status: job.status === "open" ? "closed" : "open" } : job
    ));
    setNotification({ type: NotificationType.SUCCESS, message: "Status lowongan berhasil diubah!" });
  };

  const filteredJobs = jobs.filter(
    (job) => job.title.toLowerCase().includes(search.toLowerCase()) && 
             (filterStatus === "all" || job.status === filterStatus)
  );

  // Pagination Logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-6">
      {notification && <Notification type={notification.type} message={notification.message} />}
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Manajemen Lowongan Pekerjaan</h1>
      
      <JobFilters search={search} setSearch={setSearch} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      <JobTable jobs={currentJobs} handleStatusToggle={handleStatusToggle} handleDelete={handleDelete} dummyApplicants={dummyApplicants} />
      <Pagination jobsPerPage={jobsPerPage} totalJobs={filteredJobs.length} paginate={paginate} currentPage={currentPage} />
    </div>
  );
};

export default JobManagement;