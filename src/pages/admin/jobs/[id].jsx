import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyJobs from "../../../data/dummyJobs";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = dummyJobs.find((job) => job._id === id);

  if (!job) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">Lowongan tidak ditemukan!</h1>
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
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600">Perusahaan: <strong>{job.company}</strong></p>
      <p>Lokasi: {job.location}</p>
      <p>Gaji: {job.salary}</p>
      <p>Status: <span className={`font-semibold ${job.status === "open" ? "text-green-600" : "text-red-600"}`}>{job.status}</span></p>
      <p>Deskripsi: {job.description}</p>
      <button
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
        onClick={() => navigate(-1)}
      >
        Kembali
      </button>
    </div>
  );
};

export default JobDetail;
