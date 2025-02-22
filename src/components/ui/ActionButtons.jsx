import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

const ActionButtons = ({ jobId, onDeleteClick }) => {
  return (
    <div className="flex gap-2">
      <Link
        to={`/admin/jobs/edit/${jobId}`}
        className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600 transition"
      >
        Edit
      </Link>

      <Button
        onClick={onDeleteClick}
        className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition"
      >
        Hapus
      </Button>

      <Link
        to={`/admin/jobs/${jobId}`}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
      >
        Lihat Detail
      </Link>
    </div>
  );
};

export default ActionButtons;
