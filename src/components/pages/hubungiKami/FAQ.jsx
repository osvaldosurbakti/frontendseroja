import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  // Mengambil data FAQ dari file terjemahan
  const faqData = t("faq.items", { returnObjects: true });

  return (
    <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        {t("faq.title")}
      </h3>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="flex justify-between w-full text-left text-lg font-medium text-gray-800"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.question}
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
