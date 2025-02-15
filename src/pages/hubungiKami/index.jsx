import React from "react";
import { useTranslation } from "react-i18next";
import ContactInfo from "../../components/pages/hubungiKami/ContactInfo";
import WhatsAppButton from "../../components/pages/hubungiKami/WhatsAppButton";
import GoogleMapsEmbed from "../../components/pages/hubungiKami/GoogleMapsEmbed";
import FAQ from "../../components/pages/hubungiKami/FAQ";

const HubungiKami = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          {t("contactUs.title")}
        </h2>

        {/* Informasi & Kontak */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-full md:w-1/3 text-center space-y-6">
            <p className="text-gray-600">{t("contactUs.description")}</p>
            <WhatsAppButton />
            <ContactInfo />
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12">
          <GoogleMapsEmbed />
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <FAQ />
        </div>
      </div>
    </section>
  );
};

export default HubungiKami;
