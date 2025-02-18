import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyApplicants from "../../data/dummyApplicants";

const ApplicantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const applicant = dummyApplicants.find((app) => app._id === id);

  if (!applicant) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">Pelamar tidak ditemukan!</h1>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold">{applicant.name}</h1>
      <p className="text-gray-600">Posisi: <strong>{applicant.appliedPosition}</strong></p>
      <p>Email: {applicant.email}</p>
      <p>Telepon: {applicant.phone}</p>
      <p>Pengalaman: {applicant.experience}</p>
      <p>Keahlian: {applicant.skills.join(", ")}</p>
      <p>Status: <span className={`font-semibold ${applicant.status === "Rejected" ? "text-red-600" : "text-green-600"}`}>{applicant.status}</span></p>
      <p>Tanggal Melamar: {applicant.appliedDate}</p>
      <a
        href={applicant.resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-3 text-blue-500 hover:underline"
      >
        Lihat Resume
      </a>
      <button
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        onClick={() => navigate(-1)}
      >
        Kembali
      </button>
    </div>
  );
};

export default ApplicantDetail;
