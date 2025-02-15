import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqData = [
    { question: "Bagaimana cara menghubungi customer service?", answer: "Anda bisa menghubungi kami melalui WhatsApp atau email." },
    { question: "Berapa lama waktu respon dari tim kami?", answer: "Biasanya kami akan merespons dalam waktu 24 jam pada hari kerja." },
    { question: "Apakah tersedia layanan konsultasi?", answer: "Ya, kami menyediakan layanan konsultasi. Silakan hubungi kami untuk informasi lebih lanjut." },
  ];

  return (
    <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Pertanyaan Umum (FAQ)</h3>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="flex justify-between w-full text-left text-lg font-medium text-gray-800"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.question}
              <FaChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            {openIndex === index && <p className="mt-2 text-gray-600">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
