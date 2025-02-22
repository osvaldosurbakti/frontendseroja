import React from "react";
import { FaBriefcase, FaUser, FaClipboardList, FaFolderOpen } from "react-icons/fa";
import { BarChart, Bar, PieChart, Pie, Cell, Tooltip, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import dummyJobs from "../../data/dummyJobs";
import dummyApplicants from "../../data/dummyApplicants";
import dummyPortofolio from "../../data/dummyPortofolio";

const AdminDashboard = () => {
  const totalJobs = dummyJobs.length;
  const totalApplicants = dummyApplicants.length;
  const totalOpenJobs = dummyJobs.filter((job) => job.status === "open").length;
  const totalClosedJobs = dummyJobs.filter((job) => job.status === "closed").length;
  const totalPortofolio = dummyPortofolio.length;
  const avgApplicantsPerJob = totalJobs > 0 ? (totalApplicants / totalJobs).toFixed(1) : 0;

  // Hitung jumlah pelamar per posisi
  const applicantsPerJob = dummyJobs.map((job) => ({
    name: job.title,
    applicants: dummyApplicants.filter((applicant) => applicant.appliedPosition === job.title).length,
  }));

  // Lowongan dengan pelamar terbanyak
  const mostPopularJob = applicantsPerJob.reduce((max, job) => (job.applicants > max.applicants ? job : max), { name: "None", applicants: 0 });

  const pieData = [
    { name: "Open Jobs", value: totalOpenJobs, color: "#4CAF50" },
    { name: "Closed Jobs", value: totalClosedJobs, color: "#F44336" },
  ];

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Statistik Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaBriefcase className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Lowongan</h2>
            <p className="text-3xl font-bold">{totalJobs}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaUser className="text-green-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Total Pelamar</h2>
            <p className="text-3xl font-bold">{totalApplicants}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaClipboardList className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Lowongan Dibuka</h2>
            <p className="text-3xl font-bold">{totalOpenJobs}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaClipboardList className="text-red-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Lowongan Ditutup</h2>
            <p className="text-3xl font-bold">{totalClosedJobs}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaClipboardList className="text-purple-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Rata-rata Pelamar/Lowongan</h2>
            <p className="text-3xl font-bold">{avgApplicantsPerJob}</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
          <FaFolderOpen className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-lg font-semibold">Lowongan Terpopuler</h2>
            <p className="text-lg font-bold">{mostPopularJob.name} ({mostPopularJob.applicants} pelamar)</p>
          </div>
        </div>
      </div>

      {/* Grafik Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {/* Grafik Bar Pelamar per Lowongan */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Pelamar per Lowongan</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={applicantsPerJob}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="applicants" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Grafik Pie Lowongan Open vs Closed */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Status Lowongan</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
