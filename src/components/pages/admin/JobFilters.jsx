import React, { useState } from "react";
import { Button } from "../../ui/Button";

const JobFilters = ({ search, setSearch, filterStatus, setFilterStatus, onAddJob }) => {
  return (
    <div className="flex justify-between mb-4">
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
      <Button 
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        onClick={onAddJob} // Panggil fungsi untuk membuka modal
      >
        + Tambah Lowongan
      </Button>
    </div>
  );
};

export default JobFilters;
