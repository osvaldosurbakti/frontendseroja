import React, { useState } from "react";

const BulkActions = ({ selectedApplicants, handleBulkAction }) => {
  const [selectedStatus, setSelectedStatus] = useState("Pending"); // State untuk menyimpan status yang dipilih

  return (
    <div className="mb-4">
      <div className="flex items-center space-x-2">
        {/* Dropdown untuk memilih status */}
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="Pending">Pending</option>
          <option value="Reviewed">Reviewed</option>
          <option value="Interview Scheduled">Interview Scheduled</option>
          <option value="Rejected">Rejected</option>
        </select>

        {/* Tombol Ubah Status */}
        <button
          onClick={() => handleBulkAction("changeStatus", selectedStatus)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Ubah Status
        </button>

        {/* Tombol Hapus */}
        <button
          onClick={() => handleBulkAction("delete")}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default BulkActions;