import React, { useState } from "react";
import dummyApplicants from "../../../data/dummyApplicants";
import Pagination from "../../../components/ui/Pagination";
import ApplicantStats from "../../../components/pages/admin/applicants/ApplicantStats";
import ApplicantFilters from "../../../components/pages/admin/applicants/ApplicantFilters";
import BulkActions from "../../../components/pages/admin/applicants/BulkActions";
import ApplicantTable from "../../../components/pages/admin/applicants/ApplicantTable";

const Applicants = () => {
  const [applicants, setApplicants] = useState(dummyApplicants);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter pelamar berdasarkan pencarian dan status
  const filteredApplicants = applicants.filter((applicant) => {
    const matchesSearch = applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      applicant.appliedPosition.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || applicant.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Sorting logic
  const sortedApplicants = [...filteredApplicants].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentApplicants = sortedApplicants.slice(indexOfFirstItem, indexOfLastItem);

  // Hitung total halaman
  const totalPages = Math.ceil(filteredApplicants.length / itemsPerPage);

  // Handle sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Handle bulk selection
  const handleSelectApplicant = (id) => {
    if (selectedApplicants.includes(id)) {
      setSelectedApplicants(selectedApplicants.filter((applicantId) => applicantId !== id));
    } else {
      setSelectedApplicants([...selectedApplicants, id]);
    }
  };

  // Handle bulk actions
  const handleBulkAction = (action, newStatus = null) => {
    if (action === "delete") {
      setApplicants(applicants.filter((applicant) => !selectedApplicants.includes(applicant._id)));
      setSelectedApplicants([]);
    } else if (action === "changeStatus" && newStatus) {
      setApplicants(applicants.map((applicant) =>
        selectedApplicants.includes(applicant._id) ? { ...applicant, status: newStatus } : applicant
      ));
      setSelectedApplicants([]);
    }
  };

  // Fungsi untuk menghapus pelamar
  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus pelamar ini?")) {
      setApplicants(applicants.filter((applicant) => applicant._id !== id));
    }
  };

  // Fungsi untuk mengubah status pelamar
  const handleChangeStatus = (id, newStatus) => {
    setApplicants(applicants.map((applicant) =>
      applicant._id === id ? { ...applicant, status: newStatus } : applicant
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Daftar Pelamar</h1>

      <ApplicantStats applicants={applicants} />
      <ApplicantFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      {selectedApplicants.length > 0 && (
        <BulkActions
          selectedApplicants={selectedApplicants}
          handleBulkAction={handleBulkAction}
        />
      )}
      <ApplicantTable
        currentApplicants={currentApplicants}
        selectedApplicants={selectedApplicants}
        handleSelectApplicant={handleSelectApplicant}
        handleSort={handleSort}
        sortConfig={sortConfig}
        filteredApplicants={filteredApplicants}
        setSelectedApplicants={setSelectedApplicants}
        onDelete={handleDelete} // Teruskan fungsi hapus
        onChangeStatus={handleChangeStatus} // Teruskan fungsi ubah status
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} // Teruskan fungsi setCurrentPage
      />
    </div>
  );
};

export default Applicants;