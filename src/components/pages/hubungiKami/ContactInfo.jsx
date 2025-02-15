import React from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone, FaClock } from "react-icons/fa";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-6">
      {/* Info Kontak */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          {t("contact.title")}
        </h3>
        <p>
          <FaEnvelope className="inline text-blue-600" /> {t("contact.email")}:
          <span className="ml-1">info@serojamedangroup.com</span>
        </p>
        <p>
          <FaPhone className="inline text-blue-600" /> {t("contact.phone")}:
          <span className="ml-1">(061) 42569658</span>
        </p>
      </div>

      {/* Jam Operasional */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          {t("contact.hours")}
        </h3>
        <p>
          <FaClock className="inline text-blue-600" /> {t("contact.weekdays")}
        </p>
        <p>{t("contact.saturday")}</p>
        <p>{t("contact.sunday")}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
