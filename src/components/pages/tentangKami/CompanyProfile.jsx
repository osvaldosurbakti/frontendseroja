import React from "react";
import { FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CompanyProfile = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 rounded-2xl shadow-xl">
      <div className="container mx-auto px-6 text-center">
        {/* Ikon Animasi */}
        <motion.div
          className="mb-8 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="bg-blue-600 text-white p-6 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            <FaBuilding size={60} />
          </motion.div>
        </motion.div>

        {/* Judul */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("companyProfile.title")}
        </motion.h2>

        {/* Deskripsi */}
        <motion.p
          className="text-lg text-gray-700 leading-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {t("companyProfile.description")}
        </motion.p>
      </div>
    </section>
  );
};

export default CompanyProfile;
