import React from "react";

const portfolioItems = [
  { id: 1, title: "Proyek A", description: "Detail lengkap proyek A" },
  { id: 2, title: "Proyek B", description: "Detail lengkap proyek B" },
  { id: 3, title: "Proyek C", description: "Detail lengkap proyek C" },
];

const PortfolioDetail = ({ id }) => {
  const item = portfolioItems.find((item) => item.id === parseInt(id));

  if (!item) {
    return <p className="text-center text-gray-600">Portofolio tidak ditemukan.</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
};

export default PortfolioDetail;
