import React from "react";
import { Link } from "react-router-dom";

const ApplicantRow = ({ applicant, selectedApplicants, handleSelectApplicant }) => {
  return (
    <tr key={applicant._id} className="border-b">
      <td className="py-3 px-4">
        <input
          type="checkbox"
          checked={selectedApplicants.includes(applicant._id)}
          onChange={() => handleSelectApplicant(applicant._id)}
        />
      </td>
      <td className="py-3 px-4">{applicant.name}</td>
      <td className="py-3 px-4">{applicant.appliedPosition}</td>
      <td className={`py-3 px-4 font-semibold ${applicant.status === "Rejected" ? "text-red-600" : "text-green-600"}`}>
        {applicant.status}
      </td>
      <td className="py-3 px-4">{applicant.appliedDate}</td>
      <td className="py-3 px-4 text-center">
        <Link
          to={`/admin/applicants/${applicant._id}`}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        >
          Detail
        </Link>
      </td>
    </tr>
  );
};

export default ApplicantRow;