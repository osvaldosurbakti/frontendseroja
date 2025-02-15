import React from "react";
import { useTranslation } from "react-i18next";

const GoogleMapsEmbed = () => {
  const { t } = useTranslation();
  return (
    <div className="mt-10 md:mt-0">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        {t("location.title")}
      </h3>
      <iframe
        src={t("location.mapUrl")}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={t("location.title")}
      ></iframe>
    </div>
  );
};

export default GoogleMapsEmbed;
