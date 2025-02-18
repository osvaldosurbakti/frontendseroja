  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import dummyApplicants from "../../data/dummyApplicants";

  const Applicants = () => {
    const [applicants, setApplicants] = useState(dummyApplicants);

    return (
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Daftar Pelamar</h1>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-4 text-left">Nama</th>
              <th className="py-3 px-4 text-left">Posisi</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant) => (
              <tr key={applicant._id} className="border-b">
                <td className="py-3 px-4">{applicant.name}</td>
                <td className="py-3 px-4">{applicant.appliedPosition}</td>
                <td className={`py-3 px-4 font-semibold ${applicant.status === "Rejected" ? "text-red-600" : "text-green-600"}`}>
                  {applicant.status}
                </td>
                <td className="py-3 px-4 text-center">
                  <Link
                    to={`/admin/applicants/${applicant._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  export default Applicants;
