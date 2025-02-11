import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Selamat Datang di Perusahaan Kami</h1>
        <p className="text-lg mb-6">
          Kami memberikan solusi terbaik untuk kebutuhan bisnis Anda.
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100">
          Pelajari Lebih Lanjut
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
