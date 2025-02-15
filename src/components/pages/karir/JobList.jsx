import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaArrowRight,
  FaBriefcase,
  FaUserGraduate,
} from "react-icons/fa";

const JobList = ({ jobs }) => {
  const { t } = useTranslation();

  if (!jobs || jobs.length === 0) {
    return (
      <div className="text-center text-gray-600">
        <p className="text-lg">{t("jobList.noJobs")}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-200"
        >
          {/* Posisi Pekerjaan */}
          <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
          
          {/* Lokasi */}
          <div className="flex items-center text-gray-600 mt-2">
            <FaMapMarkerAlt className="mr-2 text-blue-600" />
            <p>{job.location}</p>
          </div>

          {/* Gaji */}
          <div className="flex items-center text-gray-500 text-sm mt-2">
            <FaMoneyBillWave className="mr-2 text-green-500" />
            <p>{job.salaryRange || t("jobList.salaryNotMentioned")}</p>
          </div>

          {/* Jenis Pekerjaan */}
          <div className="flex items-center text-gray-600 text-sm mt-2">
            <FaBriefcase className="mr-2 text-purple-500" />
            <p>{job.employmentType}</p>
          </div>

          {/* Tingkat Pengalaman */}
          <div className="flex items-center text-gray-600 text-sm mt-2">
            <FaUserGraduate className="mr-2 text-orange-500" />
            <p>{job.experienceLevel}</p>
          </div>

          {/* Tombol Detail */}
          <Link
            to={`/karir/${job._id}`}
            className="mt-4 inline-flex items-center text-blue-600 font-medium hover:underline"
          >
            {t("jobList.viewDetails")}
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default JobList;
