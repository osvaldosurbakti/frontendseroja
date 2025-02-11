import React from "react";

const Table = ({ columns, data }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          {columns.map((col, idx) => (
            <th key={idx} className="border border-gray-200 px-4 py-2 text-left">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-100">
            {columns.map((col, i) => (
              <td key={i} className="border border-gray-200 px-4 py-2">
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
