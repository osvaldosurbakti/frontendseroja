import React from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          {t("hero.title")}
        </h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          {t("hero.description")}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
