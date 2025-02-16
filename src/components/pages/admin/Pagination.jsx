import React from "react";
import { Button } from "../../ui/Button";

const Pagination = ({ jobsPerPage, totalJobs, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-6">
      {pageNumbers.map((number) => (
        <Button
          key={number}
          onClick={() => paginate(number)}
          className={`mx-1 px-4 py-2 rounded-lg ${
            currentPage === number ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          {number}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;