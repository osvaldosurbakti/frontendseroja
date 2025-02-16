import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const VisionMission = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100 rounded-2xl shadow-lg">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
          Visi dan Misi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            className="bg-blue-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaBullseye className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Visi</h3>
            <p className="text-gray-700">
              Menjadi perusahaan terdepan dalam memberikan solusi terbaik untuk pelanggan.
            </p>
          </motion.div>

          <motion.div
            className="bg-green-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <FaLightbulb className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3">Misi</h3>
            <ul className="list-disc list-inside text-gray-700 leading-7 text-left">
              <li>Menyediakan layanan berkualitas tinggi.</li>
              <li>Berinovasi sesuai kebutuhan pelanggan.</li>
              <li>Memberikan kontribusi positif kepada masyarakat.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
