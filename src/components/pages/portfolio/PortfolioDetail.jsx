import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import portfolioItems from "../../../data/dummyPortofolio";

const PortfolioDetail = ({ id }) => {
  const { t } = useTranslation();
  const item = portfolioItems.find((item) => item._id === id);

  if (!item) {
    return <p className="text-center text-gray-600">❌ {t("portfolio.notFound")}</p>;
  }

  const whatsappNumber = "628123456789"; // Ganti dengan nomor perusahaan
  const whatsappMessage = encodeURIComponent(t("portfolio.whatsappMessage", { title: item.title }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200"
    >
      {/* Gambar Portofolio */}
      <motion.img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-64 object-cover"
        loading="lazy"
        initial={{ opacity: 0.8 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />

      {/* Detail Portofolio */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">{item.title}</h2>
        <p className="text-gray-700 leading-relaxed mb-3">{item.description}</p>
        <p className="text-sm text-gray-500">
          {t("portfolio.category")}: <span className="font-medium text-gray-800">{item.category}</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          {t("portfolio.created")}: {new Date(item.createdAt).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500 mb-4">
          {t("portfolio.updated")}: {new Date(item.updatedAt).toLocaleDateString()}
        </p>

        {/* Tombol WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mt-6 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          <FaWhatsapp size={20} /> {t("portfolio.contactViaWhatsApp")}
        </a>

        {/* Tombol Kembali */}
        <Link
          to={`/portofolio?category=${item.category}`}
          className="block mt-4 text-blue-600 font-medium hover:underline"
        >
          {t("portfolio.backToCategory", { category: item.category })}
        </Link>
      </div>
    </motion.div>
  );
};

export default PortfolioDetail;
