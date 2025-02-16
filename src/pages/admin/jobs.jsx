import React, { useState } from "react";
import dummyJobs from "../../data/dummyJobs";
import dummyApplicants from "../../data/dummyApplicants";
import JobFilters from "../../components/pages/admin/JobFilters";
import JobTable from "../../components/pages/admin/JobTable";
import Pagination from "../../components/pages/admin/Pagination";
import Notification, { NotificationType } from "../../components/ui/Notification";
import JobFormModal from "./JobFormModal"; // Import modal tambah lowongan

const JobManagement = () => {
  const [jobs, setJobs] = useState(dummyJobs);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const [notification, setNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddJob = () => {
    setIsModalOpen(true);
  };

  const handleSaveJob = (newJob) => {
    setJobs([...jobs, { ...newJob, _id: Date.now().toString() }]); // Tambahkan lowongan baru
    setIsModalOpen(false);
    setNotification({ type: NotificationType.SUCCESS, message: "Lowongan berhasil ditambahkan!" });
  };

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

  return (
    <div className="container mx-auto p-6">
      {notification && <Notification type={notification.type} message={notification.message} />}
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Manajemen Lowongan Pekerjaan</h1>
      
      <JobFilters search={search} setSearch={setSearch} filterStatus={filterStatus} setFilterStatus={setFilterStatus} onAddJob={handleAddJob} />
      <JobTable jobs={currentJobs} handleStatusToggle={handleStatusToggle} handleDelete={handleDelete} dummyApplicants={dummyApplicants} />
      <Pagination jobsPerPage={jobsPerPage} totalJobs={filteredJobs.length} paginate={setCurrentPage} currentPage={currentPage} />

      {/* Modal Tambah Lowongan */}
      {isModalOpen && <JobFormModal onClose={() => setIsModalOpen(false)} onSave={handleSaveJob} />}
    </div>
  );
};

export default JobManagement;
