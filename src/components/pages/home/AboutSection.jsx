import React from "react";
import { FaRocket, FaEye, FaHeart } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 animate-fade-in">
          Tentang Kami
        </h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Kami adalah perusahaan yang berdedikasi untuk memberikan layanan terbaik kepada pelanggan
          dengan inovasi dan keunggulan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-8 bg-white shadow-xl rounded-2xl transform hover:-translate-y-2 transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">
              <FaRocket />
            </div>
            <h3 className="text-2xl font-bold mb-3">Misi Kami</h3>
            <p className="text-gray-600">
              Memberikan solusi inovatif yang berkontribusi pada kesuksesan klien kami.
            </p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-2xl transform hover:-translate-y-2 transition duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaEye />
            </div>
            <h3 className="text-2xl font-bold mb-3">Visi Kami</h3>
            <p className="text-gray-600">
              Menjadi pemimpin pasar di bidang kami dengan layanan berkualitas tinggi.
            </p>
          </div>
          <div className="p-8 bg-white shadow-xl rounded-2xl transform hover:-translate-y-2 transition duration-300">
            <div className="text-red-500 text-4xl mb-4">
              <FaHeart />
            </div>
            <h3 className="text-2xl font-bold mb-3">Nilai Kami</h3>
            <p className="text-gray-600">
              Integritas, inovasi, dan dedikasi adalah inti dari semua yang kami lakukan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
