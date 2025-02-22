import React from "react";
import { FaBriefcase, FaClipboardList } from "react-icons/fa";
import dummyJobs from "../../../../data/dummyJobs";

const DataLowongan = () => {
  const totalJobs = dummyJobs.length;
  const totalOpenJobs = dummyJobs.filter((job) => job.status === "open").length;
  const totalClosedJobs = dummyJobs.filter((job) => job.status === "closed").length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistik Lowongan</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card Total Lowongan */}
        <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-4">
          <FaBriefcase className="text-blue-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Total Lowongan</h3>
            <p className="text-2xl font-bold text-gray-900">{totalJobs}</p>
          </div>
        </div>

        {/* Card Lowongan Dibuka */}
        <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-4">
          <FaClipboardList className="text-green-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Lowongan Dibuka</h3>
            <p className="text-2xl font-bold text-gray-900">{totalOpenJobs}</p>
          </div>
        </div>

        {/* Card Lowongan Ditutup */}
        <div className="bg-red-50 p-4 rounded-lg flex items-center space-x-4">
          <FaClipboardList className="text-red-500 text-3xl" />
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Lowongan Ditutup</h3>
            <p className="text-2xl font-bold text-gray-900">{totalClosedJobs}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataLowongan;