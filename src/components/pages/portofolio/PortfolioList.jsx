// File: src/components/portofolio/PortfolioList.js

import React from "react";
import { Link } from "react-router-dom";

const portfolioItems = [
  { id: 1, title: "Proyek A", description: "Deskripsi singkat proyek A" },
  { id: 2, title: "Proyek B", description: "Deskripsi singkat proyek B" },
  { id: 3, title: "Proyek C", description: "Deskripsi singkat proyek C" },
];

const PortfolioList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {portfolioItems.map((item) => (
        <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <Link
              to={`/portofolio/${item.id}`}
              className="text-blue-600 hover:underline"
            >
              Lihat Detail
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
