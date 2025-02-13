import React from "react";
import { Link } from "react-router-dom";
import portfolioItems from "../../../data/dummyPortofolio"; // Impor data dummy

const PortfolioDetail = ({ id }) => {
  const item = portfolioItems.find((item) => item._id === id);

  if (!item) {
    return <p className="text-center text-gray-600">Portofolio tidak ditemukan.</p>;
  }

  // URL WhatsApp (opsional untuk kategori tertentu)
  const whatsappNumber = "628123456789"; // Ganti dengan nomor perusahaan
  const whatsappMessage = encodeURIComponent(`Halo, saya tertarik dengan portofolio ${item.title}.`);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
        <p className="text-gray-600 mb-2">{item.description}</p>
        <p className="text-sm text-gray-500">
          Kategori: <span className="font-medium text-gray-800">{item.category}</span>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Dibuat pada: {new Date(item.createdAt).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500">
          Diperbarui pada: {new Date(item.updatedAt).toLocaleDateString()}
        </p>

        {["Marmer", "Konstruksi Sipil"].includes(item.category) && (
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 px-4 py-2 bg-green-500 text-white text-center font-semibold rounded-lg shadow hover:bg-green-600 transition"
          >
            Hubungi Kami via WhatsApp
          </a>
        )}

        <Link
          to={`/portofolio?category=${item.category}`}
          className="block mt-4 text-blue-600 hover:underline"
        >
          Kembali ke Daftar {item.category}
        </Link>
      </div>
    </div>
  );
};

export default PortfolioDetail;
