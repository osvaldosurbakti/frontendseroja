import React from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react"; // Import ikon dari lucide-react

const JobFilters = ({ search, setSearch, filterStatus, setFilterStatus }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
      {/* Input Pencarian */}
      <input
        type="text"
        placeholder="Cari lowongan..."
        className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter Status */}
      <select
        className="w-full md:w-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
      >
        <option value="all">Semua Status</option>
        <option value="open">Dibuka</option>
        <option value="closed">Ditutup</option>
      </select>

      {/* Tombol Tambah Pekerjaan */}
      <Link
        to="/admin/jobs/add"
        className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-all"
      >
        <Plus size={18} /> {/* Ikon tambah */}
        <span>Tambah Pekerjaan</span>
      </Link>
    </div>
  );
};

export default JobFilters;