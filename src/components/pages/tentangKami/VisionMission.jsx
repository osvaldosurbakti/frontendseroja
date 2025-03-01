import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const VisionMission = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-lg">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t("visionMission.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Visi */}
          <motion.div
            className="bg-blue-50 p-8 rounded-xl shadow-lg transform transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaBullseye className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">{t("visionMission.visionTitle")}</h3>
            <p className="text-gray-700">{t("visionMission.visionText")}</p>
          </motion.div>

          {/* Misi */}
          <motion.div
            className="bg-green-50 p-8 rounded-xl shadow-lg transform transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FaLightbulb className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">{t("visionMission.missionTitle")}</h3>
            <ul className="list-disc list-inside text-gray-700 leading-7 text-left">
              <li>{t("visionMission.mission1")}</li>
              <li>{t("visionMission.mission2")}</li>
              <li>{t("visionMission.mission3")}</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
