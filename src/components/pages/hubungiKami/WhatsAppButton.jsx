import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "628123456789"; // Nomor WhatsApp (tanpa tanda +)
  const message = "Halo, saya ingin bertanya lebih lanjut.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition"
    >
      Hubungi via WhatsApp
    </button>
  );
};

export default WhatsAppButton;
