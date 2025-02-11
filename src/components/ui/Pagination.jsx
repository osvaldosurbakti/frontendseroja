import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (page > 0 && page <= totalPages) onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => handleClick(currentPage - 1)}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handleClick(i + 1)}
          className={`px-3 py-1 rounded ${
            currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          {i + 1}
        </button>
      ))}
      <button
        onClick={() => handleClick(currentPage + 1)}
        className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
