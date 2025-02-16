import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const VideoSection = ({ videoUrl, title }) => {
  const { t } = useTranslation();

  return (
    <div className="mt-16 bg-white p-10 rounded-xl shadow-lg border border-gray-200">
      <h3 className="text-3xl font-extrabold text-center mb-8 text-gray-900">
        {title || t("videoSection.title")}
      </h3>
      <div className="flex justify-center">
        <motion.div
          className="w-full md:w-2/3 aspect-video rounded-lg shadow-md overflow-hidden border border-gray-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ scale: 1.03 }}
        >
          <iframe 
            className="w-full h-full"
            src={videoUrl} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
