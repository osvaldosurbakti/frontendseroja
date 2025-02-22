import React from "react";

const ApplicantFilters = ({ searchQuery, setSearchQuery, statusFilter, setStatusFilter }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <input
        type="text"
        placeholder="Cari pelamar berdasarkan nama atau posisi..."
        className="border p-2 rounded flex-grow"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">Semua Status</option>
        <option value="Pending">Pending</option>
        <option value="Reviewed">Reviewed</option>
        <option value="Interview Scheduled">Interview Scheduled</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default ApplicantFilters;