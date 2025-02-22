import React from "react";
import { FaBriefcase, FaUser, FaClipboardList, FaFolderOpen } from "react-icons/fa";
import dummyJobs from "../../data/dummyJobs";
import dummyApplicants from "../../data/dummyApplicants";
import dummyPortofolio from "../../data/dummyPortofolio"; // Tambahkan file dummyPortfolios.js

const AdminDashboard = () => {
  // Hitung total lowongan
  const totalJobs = dummyJobs.length;

  // Hitung total pelamar
  const totalApplicants = dummyApplicants.length;

  // Hitung total lowongan yang masih dibuka (status: "open")
  const totalOpenJobs = dummyJobs.filter((job) => job.status === "open").length;

  // Hitung total portfolio
  const totalPortofolio = dummyPortofolio.length;

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card Total Lowongan */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
          <FaBriefcase className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Total Lowongan</h2>
            <p className="text-3xl font-bold text-gray-900">{totalJobs}</p>
          </div>
        </div>

        {/* Card Total Pelamar */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
          <FaUser className="text-green-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Total Pelamar</h2>
            <p className="text-3xl font-bold text-gray-900">{totalApplicants}</p>
          </div>
        </div>

        {/* Card Lowongan Dibuka */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
          <FaClipboardList className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Lowongan Dibuka</h2>
            <p className="text-3xl font-bold text-gray-900">{totalOpenJobs}</p>
          </div>
        </div>

        {/* Card Total Portfolio */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4 hover:shadow-lg transition-shadow duration-300">
          <FaFolderOpen className="text-purple-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Total Portofolio</h2>
            <p className="text-3xl font-bold text-gray-900">{totalPortofolio}</p>
          </div>
        </div>
      </div>

      {/* Daftar Lowongan */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Daftar Lowongan</h2>
        <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto hover:shadow-lg transition-shadow duration-300">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-2 border">Posisi</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyJobs.map((job, index) => (
                <tr key={index} className="border hover:bg-gray-100 transition-colors duration-200">
                  <td className="p-2 border">{job.title}</td>
                  <td className="p-2 border text-center capitalize">{job.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Daftar Pelamar */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Daftar Pelamar</h2>
        <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto hover:shadow-lg transition-shadow duration-300">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="p-2 border">Nama</th>
                <th className="p-2 border">Posisi Dilamar</th>
              </tr>
            </thead>
            <tbody>
              {dummyApplicants.map((applicant, index) => (
                <tr key={index} className="border hover:bg-gray-100 transition-colors duration-200">
                  <td className="p-2 border">{applicant.name}</td>
                  <td className="p-2 border">{applicant.appliedPosition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;