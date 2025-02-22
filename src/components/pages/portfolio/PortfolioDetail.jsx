import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import portfolioItems from "../../../data/dummyPortofolio"; // Pastikan path ini benar

const PortfolioDetail = ({ id }) => {
  const { t } = useTranslation();

  // Cari item portfolio berdasarkan ID
  const portfolioItem = portfolioItems.find((item) => item._id === id);

  // Jika item tidak ditemukan
  if (!portfolioItem) {
    return (
      <div className="text-center text-gray-500">
        {t("portfolio.itemNotFound")}
      </div>
    );
  }

  // Pesan WhatsApp yang sudah diformat
  const whatsappMessage = encodeURIComponent(
    t("portfolio.whatsappMessage", { title: portfolioItem.title })
  );

  // URL WhatsApp
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <div className="space-y-6">
      {/* Judul */}
      <h3 className="text-2xl font-bold text-gray-800">
        {portfolioItem.title}
      </h3>

      {/* Gambar */}
      <div className="relative h-64 overflow-hidden rounded-lg">
        <img
          src={portfolioItem.imageUrl}
          alt={portfolioItem.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Deskripsi */}
      <p className="text-gray-600">
        {portfolioItem.description}
      </p>

      {/* Informasi Tambahan */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="text-lg font-semibold text-gray-700">
            {t("portfolio.category")}
          </h4>
          <p className="text-gray-600">
            {portfolioItem.category.name}
          </p>
        </div>
      </div>

      {/* Tombol WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full md:w-auto text-center text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md font-medium transition-colors duration-300"
      >
        {t("portfolio.contactViaWhatsApp")}
      </a>

      {/* Tombol Back to Category List */}
      <Link
        to={`/portofolio`}
        className="inline-block w-full md:w-auto text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors duration-300"
      >
        {t("portfolio.backToCategory")}
      </Link>
    </div>
  );
};

export default PortfolioDetail;