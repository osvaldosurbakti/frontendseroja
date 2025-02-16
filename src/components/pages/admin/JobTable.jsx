import React from "react";
import { Button } from "../../ui/Button";

const JobTable = ({ jobs, handleStatusToggle, handleDelete, dummyApplicants }) => {
  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-4 px-6 text-left">Posisi</th>
            <th className="py-4 px-6 text-left">Lokasi</th>
            <th className="py-4 px-6 text-left">Gaji</th>
            <th className="py-4 px-6 text-left">Status</th>
            <th className="py-4 px-6 text-center">Pelamar</th>
            <th className="py-4 px-6 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => {
            const totalApplicants = dummyApplicants.filter(
              (app) => app.appliedPosition === job.title
            ).length;
            return (
              <tr key={job._id} className="border-b hover:bg-gray-50 transition">
                <td className="py-4 px-6">{job.title}</td>
                <td className="py-4 px-6">{job.location}</td>
                <td className="py-4 px-6">{job.salaryRange}</td>
                <td className="py-4 px-6">
                  <Button
                    onClick={() => handleStatusToggle(job._id)}
                    className={`px-4 py-2 rounded-lg shadow-sm ${
                      job.status === "open"
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-red-500 hover:bg-red-600"
                    } text-white`}
                  >
                    {job.status === "open" ? "Dibuka" : "Ditutup"}
                  </Button>
                </td>
                <td className="py-4 px-6 text-center">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full cursor-pointer ${
                      totalApplicants > 0
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-200 text-gray-500"
                    }`}
                    onClick={() =>
                      alert(
                        `Daftar pelamar untuk ${job.title}: ${dummyApplicants
                          .filter((app) => app.appliedPosition === job.title)
                          .map((app) => app.name)
                          .join(", ")}`
                      )
                    }
                  >
                    {totalApplicants} pelamar
                  </span>
                </td>
                <td className="py-4 px-6 text-center">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-sm mr-2">
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(job._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-sm"
                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
