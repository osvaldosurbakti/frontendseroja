import React from "react";
import { FaBuilding } from "react-icons/fa";
import { motion } from "framer-motion";

const CompanyProfile = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200 rounded-2xl shadow-lg">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          className="mb-6 flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-blue-600 text-white p-5 rounded-full shadow-xl">
            <FaBuilding size={50} />
          </div>
        </motion.div>

        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Profil Perusahaan
        </h2>
        <p className="text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
          Kami adalah perusahaan yang berdedikasi dalam memberikan layanan terbaik
          kepada pelanggan kami. Dengan pengalaman bertahun-tahun, kami terus
          berkembang dan berinovasi untuk memberikan solusi terbaik sesuai kebutuhan pelanggan.
        </p>
      </div>
    </section>
  );
};

export default CompanyProfile;
