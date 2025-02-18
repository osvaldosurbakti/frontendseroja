import React from "react";
import { useParams } from "react-router-dom";

const PortfolioDetail = () => {
  const { id } = useParams();

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Detail Portfolio</h1>
      <p>ID Portfolio: {id}</p>
      {/* Tambahkan detail portfolio sesuai kebutuhan */}
    </div>
  );
};

export default PortfolioDetail;
