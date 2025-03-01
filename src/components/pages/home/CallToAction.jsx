import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 text-white text-center overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
      {/* Efek Partikel Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-16 h-16 bg-white opacity-20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-white opacity-30 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-10 h-10 bg-white opacity-15 blur-2xl rounded-full animate-bounce"></div>
      </div>

      {/* Konten CTA */}
      <div className="relative z-10 container mx-auto">
        <motion.h2
          className="text-5xl font-extrabold tracking-wide leading-tight mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("cta.title")}
        </motion.h2>

        <motion.p
          className="text-lg mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {t("cta.description")}
        </motion.p>

        {/* Tombol CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/hubungi-kami"
            className="inline-block relative px-10 py-4 text-lg font-semibold bg-white text-blue-600 rounded-full shadow-lg transition-all transform hover:scale-110 hover:bg-gray-200"
          >
            {t("cta.button")}
            {/* Efek Glow */}
            <span className="absolute inset-0 w-full h-full bg-white opacity-20 blur-xl rounded-full"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
