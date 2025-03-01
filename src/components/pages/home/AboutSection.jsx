import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 overflow-hidden">
      {/* Efek Partikel Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-16 h-16 bg-white opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-white opacity-30 blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 mb-6 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("about.title")}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t("about.description")}
        </motion.p>

        {/* Tombol Menuju Halaman Tentang Kami */}
        <motion.button
          onClick={() => navigate("/tentang-kami")}
          className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-blue-700"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {t("about.learnMore")}
        </motion.button>
      </div>
    </section>
  );
};

export default AboutSection;
