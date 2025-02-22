import React from "react";
import { FaUsers, FaBriefcase, FaBuilding, FaChartBar, FaClock } from "react-icons/fa";
import dummyApplicants from "../../data/dummyApplicants"; // Impor data pelamar
import dummyJobs from "../../data/dummyJobs"; // Impor data lowongan
import portfolioItems from "../../data/dummyPortofolio"; // Impor data portofolio
import dummyUsers from "../../data/dummyUsers"; // Impor data pengguna

const Statistics = () => {
  // Gunakan data dummy yang diimpor
  const applicants = dummyApplicants;
  const jobs = dummyJobs;
  const portfolio = portfolioItems;
  const users = dummyUsers;

  // Hitung statistik pelamar
  const totalApplicants = applicants.length;
  const newApplicantsToday = applicants.filter(
    (applicant) => new Date(applicant.appliedDate).toDateString() === new Date().toDateString()
  ).length;

  // Hitung statistik lowongan
  const totalJobs = jobs.length;
  const openJobs = jobs.filter((job) => job.status === "open").length;

  // Hitung statistik portofolio
  const totalProjects = portfolio.length;
  const activeProjects = portfolio.filter((project) => project.status === "active").length;

  // Hitung statistik pengguna
  const totalUsers = users.length;
  const adminUsers = users.filter((user) => user.role === "admin").length;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Laporan Statistik</h1>

      {/* Statistik Pelamar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-3">
          <FaUsers className="text-blue-500 text-2xl" />
          <div>
            <p className="text-gray-600">Total Pelamar</p>
            <p className="text-xl font-bold text-blue-700">{totalApplicants}</p>
          </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-3">
          <FaUsers className="text-green-500 text-2xl" />
          <div>
            <p className="text-gray-600">Pelamar Baru Hari Ini</p>
            <p className="text-xl font-bold text-green-700">{newApplicantsToday}</p>
          </div>
        </div>
      </div>

      {/* Statistik Lowongan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-purple-50 p-4 rounded-lg flex items-center space-x-3">
          <FaBriefcase className="text-purple-500 text-2xl" />
          <div>
            <p className="text-gray-600">Total Lowongan</p>
            <p className="text-xl font-bold text-purple-700">{totalJobs}</p>
          </div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg flex items-center space-x-3">
          <FaBriefcase className="text-yellow-500 text-2xl" />
          <div>
            <p className="text-gray-600">Lowongan Terbuka</p>
            <p className="text-xl font-bold text-yellow-700">{openJobs}</p>
          </div>
        </div>
      </div>

      {/* Statistik Portofolio */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-pink-50 p-4 rounded-lg flex items-center space-x-3">
          <FaBuilding className="text-pink-500 text-2xl" />
          <div>
            <p className="text-gray-600">Total Proyek</p>
            <p className="text-xl font-bold text-pink-700">{totalProjects}</p>
          </div>
        </div>
        <div className="bg-teal-50 p-4 rounded-lg flex items-center space-x-3">
          <FaBuilding className="text-teal-500 text-2xl" />
          <div>
            <p className="text-gray-600">Proyek Aktif</p>
            <p className="text-xl font-bold text-teal-700">{activeProjects}</p>
          </div>
        </div>
      </div>

      {/* Statistik Pengguna */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-indigo-50 p-4 rounded-lg flex items-center space-x-3">
          <FaUsers className="text-indigo-500 text-2xl" />
          <div>
            <p className="text-gray-600">Total Pengguna</p>
            <p className="text-xl font-bold text-indigo-700">{totalUsers}</p>
          </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg flex items-center space-x-3">
          <FaUsers className="text-red-500 text-2xl" />
          <div>
            <p className="text-gray-600">Admin</p>
            <p className="text-xl font-bold text-red-700">{adminUsers}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;