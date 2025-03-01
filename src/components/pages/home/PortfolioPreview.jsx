import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const PortfolioPreview = ({ portfolios = [] }) => {
  const { t } = useTranslation();

  // Jika tidak ada data
  if (!Array.isArray(portfolios) || portfolios.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("portfolio.preview_title")}
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("portfolio.no_data")}
          </motion.p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Judul & Deskripsi */}
        <motion.h2
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("portfolio.preview_title")}
        </motion.h2>

        <motion.p
          className="text-gray-600 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t("portfolio.preview_description")}
        </motion.p>

        {/* Grid Portofolio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolios.slice(0, 3).map((portfolio, index) => (
            <motion.div
              key={portfolio.id || index}
              className="relative bg-white shadow-md rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Gambar Portofolio */}
              <div className="relative">
                <img
                  src={portfolio.imageUrl}
                  alt={portfolio.title}
                  className="w-full h-64 object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay efek saat hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Konten Portofolio */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {portfolio.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {portfolio.description.slice(0, 100)}...
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tombol Lihat Selengkapnya */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/portofolio"
            className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg font-semibold hover:scale-105 transition-transform"
          >
            {t("portfolio.view_more")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
