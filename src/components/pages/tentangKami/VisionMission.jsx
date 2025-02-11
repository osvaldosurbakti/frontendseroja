import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 animate-fade-in">
          Visi dan Misi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-blue-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex justify-center items-center mb-4">
              <div className="text-blue-500 text-4xl">
                <FaBullseye />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Visi</h3>
            <p className="text-gray-700 leading-7">
              Menjadi perusahaan terdepan dalam memberikan solusi terbaik untuk
              pelanggan.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
            <div className="flex justify-center items-center mb-4">
              <div className="text-green-500 text-4xl">
                <FaLightbulb />
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-3">Misi</h3>
            <ul className="list-disc list-inside text-gray-700 leading-7 text-left">
              <li>Menyediakan layanan berkualitas tinggi.</li>
              <li>Berinovasi sesuai kebutuhan pelanggan.</li>
              <li>Memberikan kontribusi positif kepada masyarakat.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
