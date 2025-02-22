import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const ActionButtons = ({ jobId, onDeleteClick }) => {
  return (
    <div className="flex gap-2">
      {/* Tombol Edit */}
      <Link
        to={`/admin/jobs/edit/${jobId}`}
        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-sm"
      >
        Edit
      </Link>

      {/* Tombol Hapus */}
      <Button
        onClick={onDeleteClick}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
      >
        Hapus
      </Button>

      {/* Tombol Lihat Detail */}
      <Link
        to={`/admin/jobs/${jobId}`}
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
      >
        Lihat Detail
      </Link>
    </div>
  );
};

export default ActionButtons;