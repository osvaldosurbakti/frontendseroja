import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "6281234567890";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FaWhatsapp className="text-2xl mr-2" />
      Hubungi via WhatsApp
    </a>
  );
};

export default WhatsAppButton;
