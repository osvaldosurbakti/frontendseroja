import React from "react";
import { FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-6">
      {/* Info Kontak */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Kontak Kami</h3>
        <p><FaEnvelope className="inline text-blue-600" /> Email: info@serojamedangroup.com</p>
        <p><FaPhone className="inline text-blue-600" /> Telepon: (061) 42569658</p>
      </div>

      {/* Jam Operasional */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Jam Operasional</h3>
        <p><FaClock className="inline text-blue-600" /> Senin - Jumat: 08:00 - 17:00 WIB</p>
        <p>Sabtu: 08:00 - 12:00 WIB</p>
        <p>Minggu & Libur Nasional: Tutup</p>
      </div>
    </div>
  );
};

export default ContactInfo;
