import React from "react";
import { useParams } from "react-router-dom";
import JobDetail from "../../components/pages/karir/JobDetail";
import dummyJobs from "../../data/dummyJobs"; // Impor data dummy

const JobDetailPage = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const job = dummyJobs.find((job) => job._id === id); // Cari job berdasarkan _id

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {job ? (
          <JobDetail job={job} /> // Tampilkan detail pekerjaan
        ) : (
          <p className="text-center">Lowongan pekerjaan tidak ditemukan.</p>
        )}
      </div>
    </section>
  );
};

export default JobDetailPage;
