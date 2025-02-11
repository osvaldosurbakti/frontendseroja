import React from "react";
import { useParams } from "react-router-dom";
import ApplicationForm from "../../components/pages/karir/ApplicationForm";

const ApplyJobPage = () => {
  const { id } = useParams(); // Ambil ID dari URL

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Lamar Pekerjaan</h2>
        <p className="mb-6">Anda melamar untuk posisi dengan ID: {id}</p>
        <ApplicationForm jobId={id} />
      </div>
    </section>
  );
};

export default ApplyJobPage;
