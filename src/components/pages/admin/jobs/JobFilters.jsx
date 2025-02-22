import React from "react";
import { Button } from "../../../ui/Button";

const JobFilters = ({ 
  searchQuery, 
  onSearchChange, 
  selectedStatus, 
  onStatusChange, 
  onAddJob 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      {/* Input Pencarian */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Cari lowongan..."
        className="border p-2 rounded-md w-full md:w-auto flex-1"
        aria-label="Cari lowongan"
      />
      
      {/* Filter Status */}
      <select
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value)}
        className="border p-2 rounded-md w-full md:w-auto"
        aria-label="Filter status lowongan"
      >
        <option value="all">Semua Status</option>
        <option value="open">Dibuka</option>
        <option value="closed">Ditutup</option>
      </select>

      {/* Tombol Tambah Lowongan */}
      <Button
        onClick={onAddJob}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
      >
        Tambah Lowongan
      </Button>
    </div>
  );
};

export default JobFilters;
