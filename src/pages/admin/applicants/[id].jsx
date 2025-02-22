import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyApplicants from "../../../data/dummyApplicants";
import { FaUser, FaEnvelope, FaPhone, FaBriefcase, FaCalendar, FaFilePdf, FaArrowLeft } from "react-icons/fa";

const ApplicantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const applicant = dummyApplicants.find((app) => app._id === id);

  if (!applicant) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">Pelamar tidak ditemukan!</h1>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded flex items-center justify-center mx-auto"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" /> Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <h1 className="text-3xl font-bold flex items-center">
          <FaUser className="mr-2 text-blue-500" /> {applicant.name}
        </h1>
        <div className="mt-6 space-y-4">
          {/* Posisi yang Dilamar */}
          <div className="flex items-center">
            <FaBriefcase className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Posisi:</strong> {applicant.appliedPosition}
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <FaEnvelope className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Email:</strong> {applicant.email}
            </p>
          </div>

          {/* Telepon */}
          <div className="flex items-center">
            <FaPhone className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Telepon:</strong> {applicant.phone}
            </p>
          </div>

          {/* Pengalaman */}
          <div className="flex items-center">
            <FaBriefcase className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Pengalaman:</strong> {applicant.experience}
            </p>
          </div>

          {/* Keahlian */}
          <div className="flex items-center">
            <FaBriefcase className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Keahlian:</strong> {applicant.skills.join(", ")}
            </p>
          </div>

          {/* Status */}
          <div className="flex items-center">
            <FaBriefcase className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Status:</strong>{" "}
              <span
                className={`font-semibold ${
                  applicant.status === "Rejected"
                    ? "text-red-600"
                    : applicant.status === "Accepted"
                    ? "text-green-600"
                    : "text-blue-600"
                }`}
              >
                {applicant.status}
              </span>
            </p>
          </div>

          {/* Tanggal Melamar */}
          <div className="flex items-center">
            <FaCalendar className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Tanggal Melamar:</strong> {applicant.appliedDate}
            </p>
          </div>

          {/* Resume */}
          <div className="flex items-center">
            <FaFilePdf className="text-gray-500 mr-2" />
            <a
              href={applicant.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Lihat Resume
            </a>
          </div>
        </div>

        {/* Tombol Kembali */}
        <button
          className="mt-6 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded flex items-center"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="mr-2" /> Kembali
        </button>
      </div>
    </div>
  );
};

export default ApplicantDetail;