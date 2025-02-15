import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaMoneyBillWave, FaCheckCircle, FaArrowLeft, FaBriefcase, FaUserGraduate, FaBuilding } from "react-icons/fa";

const JobDetail = ({ job }) => {
  if (!job) {
    return <p className="text-center text-gray-600">Lowongan tidak ditemukan.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      {/* Judul & Breadcrumb */}
      <div className="mb-6">
        <Link
          to="/karir"
          className="inline-flex items-center text-blue-600 hover:underline mb-4"
        >
          <FaArrowLeft className="mr-2" /> Kembali ke Lowongan
        </Link>
        <h2 className="text-3xl font-extrabold text-gray-800">{job.title}</h2>
      </div>

      {/* Deskripsi Pekerjaan */}
      <p className="text-gray-700 mb-4">{job.description}</p>

      {/* Informasi Lokasi & Gaji */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        <p className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="text-blue-500 mr-2" /> {job.location}
        </p>
        <p className="flex items-center text-gray-600">
          <FaMoneyBillWave className="text-green-500 mr-2" />
          {job.salaryRange || "Negosiasi"}
        </p>
      </div>

      {/* Informasi Tambahan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Jenis Pekerjaan */}
        <p className="flex items-center text-gray-600">
          <FaBriefcase className="text-purple-500 mr-2" /> {job.employmentType}
        </p>
        {/* Tingkat Pengalaman */}
        <p className="flex items-center text-gray-600">
          <FaUserGraduate className="text-orange-500 mr-2" /> {job.experienceLevel}
        </p>
        {/* Departemen */}
        <p className="flex items-center text-gray-600">
          <FaBuilding className="text-indigo-500 mr-2" /> {job.department}
        </p>
      </div>

      {/* Persyaratan Pekerjaan */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Persyaratan:</h3>
        <ul className="list-none space-y-2">
          {job.requirements.map((req, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <FaCheckCircle className="text-green-500 mr-2" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Tombol Lamar */}
      <Link
        to={`/karir/apply/${job._id}`}
        className="block text-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Lamar Pekerjaan
      </Link>
    </div>
  );
};

export default JobDetail;
