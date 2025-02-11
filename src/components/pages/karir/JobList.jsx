import React from "react";
import dummyJobs from "../../../data/dummyJobs";

const JobList = () => {
  // Gunakan data dummy untuk simulasi
  const jobs = dummyJobs.filter((job) => job.status === "open"); // Hanya tampilkan lowongan 'open'

  if (!jobs || jobs.length === 0) {
    return <p className="text-center">Belum ada lowongan pekerjaan tersedia.</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <li
          key={job._id}
          className="border border-gray-200 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
        >
          <h2 className="text-xl font-bold text-gray-800">{job.title}</h2>
          <p className="text-gray-600 mt-2">{job.location}</p>
          <p className="text-sm text-gray-500 mt-1">
            {job.salaryRange || "Gaji tidak disebutkan"}
          </p>
          <a
            href={`/karir/${job._id}`}
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Lihat Detail
          </a>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
