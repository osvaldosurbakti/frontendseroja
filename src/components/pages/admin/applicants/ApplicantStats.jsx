import React from "react";
import { FaClock, FaCheckCircle, FaCalendarAlt, FaTimesCircle, FaUsers, FaUserPlus, FaUserCheck, FaUserTimes, FaHourglassHalf, FaChartBar } from "react-icons/fa";

const ApplicantStats = ({ applicants }) => {
  // Hitung statistik
  const totalApplicants = applicants.length;
  const newApplicantsToday = applicants.filter(
    (applicant) => new Date(applicant.appliedDate).toDateString() === new Date().toDateString()
  ).length;
  const invitedToInterview = applicants.filter(
    (applicant) => applicant.status === "Interview Scheduled"
  ).length;
  const rejectedApplicants = applicants.filter(
    (applicant) => applicant.status === "Rejected"
  ).length;
  const acceptedApplicants = applicants.filter(
    (applicant) => applicant.status === "Accepted"
  ).length;
  const pendingApplicants = applicants.filter(
    (applicant) => applicant.status === "Pending"
  ).length;
  const reviewedApplicants = applicants.filter(
    (applicant) => applicant.status === "Reviewed"
  ).length;

  // Hitung rata-rata waktu proses (dalam hari)
  const averageProcessingTime = (
    applicants
      .filter((applicant) => applicant.status !== "Pending") // Hanya pelamar yang sudah diproses
      .map((applicant) => {
        const appliedDate = new Date(applicant.appliedDate);
        const decisionDate = new Date(applicant.decisionDate || new Date()); // Jika belum ada decisionDate, gunakan tanggal sekarang
        return (decisionDate - appliedDate) / (1000 * 60 * 60 * 24); // Hitung selisih dalam hari
      })
      .reduce((sum, days) => sum + days, 0) / applicants.length || 0
  ).toFixed(1); // Bulatkan ke 1 desimal

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Statistik Pelamar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Pelamar */}
        <div className="bg-indigo-50 p-4 rounded-lg flex items-center space-x-3">
          <FaUsers className="text-indigo-500 text-2xl" />
          <div>
            <p className="text-gray-600">Total Pelamar</p>
            <p className="text-xl font-bold text-indigo-700">{totalApplicants}</p>
          </div>
        </div>

        {/* Pelamar Baru Hari Ini */}
        <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-3">
          <FaUserPlus className="text-blue-500 text-2xl" />
          <div>
            <p className="text-gray-600">Pelamar Baru Hari Ini</p>
            <p className="text-xl font-bold text-blue-700">{newApplicantsToday}</p>
          </div>
        </div>

        {/* Diundang Interview */}
        <div className="bg-purple-50 p-4 rounded-lg flex items-center space-x-3">
          <FaCalendarAlt className="text-purple-500 text-2xl" />
          <div>
            <p className="text-gray-600">Diundang Interview</p>
            <p className="text-xl font-bold text-purple-700">{invitedToInterview}</p>
          </div>
        </div>

        {/* Ditolak */}
        <div className="bg-red-50 p-4 rounded-lg flex items-center space-x-3">
          <FaUserTimes className="text-red-500 text-2xl" />
          <div>
            <p className="text-gray-600">Ditolak</p>
            <p className="text-xl font-bold text-red-700">{rejectedApplicants}</p>
          </div>
        </div>

        {/* Diterima */}
        {acceptedApplicants > 0 && (
          <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-3">
            <FaUserCheck className="text-green-500 text-2xl" />
            <div>
              <p className="text-gray-600">Diterima</p>
              <p className="text-xl font-bold text-green-700">{acceptedApplicants}</p>
            </div>
          </div>
        )}

        {/* Sedang Diproses (Pending) */}
        <div className="bg-yellow-50 p-4 rounded-lg flex items-center space-x-3">
          <FaHourglassHalf className="text-yellow-500 text-2xl" />
          <div>
            <p className="text-gray-600">Sedang Diproses</p>
            <p className="text-xl font-bold text-yellow-700">{pendingApplicants}</p>
          </div>
        </div>

        {/* Sudah Direview (Reviewed) */}
        <div className="bg-teal-50 p-4 rounded-lg flex items-center space-x-3">
          <FaCheckCircle className="text-teal-500 text-2xl" />
          <div>
            <p className="text-gray-600">Sudah Direview</p>
            <p className="text-xl font-bold text-teal-700">{reviewedApplicants}</p>
          </div>
        </div>

        {/* Rata-rata Waktu Proses */}
        <div className="bg-pink-50 p-4 rounded-lg flex items-center space-x-3">
          <FaClock className="text-pink-500 text-2xl" />
          <div>
            <p className="text-gray-600">Rata-rata Waktu Proses</p>
            <p className="text-xl font-bold text-pink-700">{averageProcessingTime} hari</p>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default ApplicantStats;