import React from "react";
import { Link } from "react-router-dom";

const JobFilters = ({ search, setSearch, filterStatus, setFilterStatus }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <input
        type="text"
        placeholder="Cari lowongan..."
        className="border p-2 rounded w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="all">Semua Status</option>
        <option value="open">Dibuka</option>
        <option value="closed">Ditutup</option>
      </select>
      
      <Link to="/admin/addjob" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
        Tambah Pekerjaan
      </Link>
    </div>
  );
};

export default JobFilters;