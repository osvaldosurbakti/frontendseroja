import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const VideoSection = ({ videoUrl }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-3xl font-extrabold text-center mb-6 text-gray-900">
        {t("videoSection.title")}
      </h3>
      <div className="flex justify-center">
        <motion.div
          className="w-full md:w-2/3 aspect-video rounded-lg shadow-md overflow-hidden border border-gray-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <iframe
            className="w-full h-full rounded-lg"
            src={videoUrl}
            title={t("videoSection.videoTitle")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
