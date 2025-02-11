// src/pages/tentangKami/CompanyProfile.js
import React from "react";
import { FaBuilding } from "react-icons/fa";

const CompanyProfile = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6 flex justify-center items-center">
          <div className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
            <FaBuilding size={40} />
          </div>
        </div>
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 animate-fade-in">
          Profil Perusahaan
        </h2>
        <p className="text-lg text-gray-700 leading-8 max-w-3xl mx-auto">
          Kami adalah perusahaan yang berdedikasi dalam memberikan layanan terbaik
          kepada pelanggan kami. Dengan pengalaman bertahun-tahun, kami terus
          berkembang dan berinovasi untuk memberikan solusi yang terbaik dan relevan
          dengan kebutuhan pelanggan kami.
        </p>
      </div>
    </section>
  );
};

export default CompanyProfile;
