import React from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import ApplicationForm from "../../components/pages/karir/ApplicationForm";
import { FaArrowLeft } from "react-icons/fa";
import dummyJobs from "../../data/dummyJobs"; // Import data pekerjaan

const ApplyJobPage = () => {
  const { t } = useTranslation();
  const { id } = useParams(); // Ambil ID dari URL
  const job = dummyJobs.find((job) => job._id === id); // Cari pekerjaan berdasarkan ID

  if (!job) {
    return <p className="text-center text-red-600">{t("applyJob.notFound")}</p>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/karir" className="inline-flex items-center text-blue-600 hover:underline">
              <FaArrowLeft className="mr-2" /> {t("applyJob.backToJobs")}
            </Link>
          </div>

          {/* Header */}
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">{job.title}</h2>
          <p className="text-gray-600 mb-2">{job.description}</p>

          {/* Detail Pekerjaan */}
          <div className="bg-gray-100 p-4 rounded-md mb-6">
            <p><strong>{t("applyJob.location")}:</strong> {job.location}</p>
            <p><strong>{t("applyJob.salary")}:</strong> {job.salaryRange}</p>
            <p><strong>{t("applyJob.jobType")}:</strong> {job.employmentType}</p>
            <p><strong>{t("applyJob.experience")}:</strong> {job.experienceLevel}</p>
            <p><strong>{t("applyJob.department")}:</strong> {job.department}</p>
          </div>

          {/* Formulir Lamaran */}
          <ApplicationForm jobId={id} />
        </div>
      </div>
    </section>
  );
};

export default ApplyJobPage;
