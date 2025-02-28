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
          <div className="flex items-center">
            <FaBriefcase className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Posisi:</strong> {applicant.appliedPosition}
            </p>
          </div>

          <div className="flex items-center">
            <FaEnvelope className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Email:</strong> {applicant.email}
            </p>
          </div>

          <div className="flex items-center">
            <FaPhone className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Telepon:</strong> {applicant.phone}
            </p>
          </div>

          <div className="flex items-center">
            <FaBriefcase className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Pengalaman:</strong> {applicant.experience}
            </p>
          </div>

          <div className="flex items-center">
            <FaBriefcase className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Keahlian:</strong> {applicant.skills.join(", ")}
            </p>
          </div>

          <div className="flex items-center">
            <FaBriefcase className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Status:</strong>
              <span className={`font-semibold px-2 py-1 rounded 
                ${applicant.status === "Rejected" ? "bg-red-100 text-red-600" 
                : applicant.status === "Accepted" ? "bg-green-100 text-green-600" 
                : applicant.status === "Reviewed" ? "bg-yellow-100 text-yellow-600"
                : "bg-blue-100 text-blue-600"}`}>
                {applicant.status}
              </span>
            </p>
          </div>

          <div className="flex items-center">
            <FaCalendar className="text-gray-500 mr-2" />
            <p className="text-gray-700">
              <strong>Tanggal Melamar:</strong> {applicant.appliedDate}
            </p>
          </div>

          <div className="flex items-start">
            <FaBriefcase className="text-gray-500 mr-2 mt-1" />
            <div>
              <strong>Pendidikan:</strong>
              <ul className="list-disc ml-6 text-gray-700">
                {applicant.education.map((edu, index) => (
                  <li key={index}>
                    {edu.degree} di {edu.field}, {edu.institution} ({edu.yearGraduated})
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <FaUser className="text-gray-500 mr-2 mt-1" />
            <div>
              <strong>Media Sosial:</strong>
              <ul className="list-disc ml-6 text-gray-700">
                {applicant.socialMedia.map((social, index) => (
                  <li key={index}>
                    <a href={social.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {social.platform.charAt(0).toUpperCase() + social.platform.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-start">
            <FaBriefcase className="text-gray-500 mr-2 mt-1" />
            <div>
              <strong>Portofolio:</strong>
              <ul className="list-disc ml-6 text-gray-700">
                {applicant.portfolioUrls.map((url, index) => (
                  <li key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {applicant.notes && (
            <div className="flex items-start">
              <FaFilePdf className="text-gray-500 mr-2 mt-1" />
              <p className="text-gray-700">
                <strong>Catatan:</strong> {applicant.notes}
              </p>
            </div>
          )}
        </div>

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
