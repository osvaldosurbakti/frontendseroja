import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Briefcase, Building, HardHat } from "lucide-react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const partners = [
  { name: "CV. Seleksi Alam Nusantara", icon: <HardHat className="w-24 h-24 text-blue-500 drop-shadow-lg animate-pulse" /> },
  { name: "CV. Sekawan Mitra Bersama", icon: <Briefcase className="w-24 h-24 text-blue-500 drop-shadow-lg animate-pulse" /> },
  { name: "CV. Rizky Bersama", icon: <Building className="w-24 h-24 text-blue-500 drop-shadow-lg animate-pulse" /> }
];

const Partners = () => {
  const { t } = useTranslation(); // Gunakan useTranslation untuk mendukung terjemahan

  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        {/* Judul Section */}
        <motion.h2
          className="text-5xl font-extrabold text-gray-800 mb-4 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("partners.title")}
        </motion.h2>

        {/* Subjudul */}
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("partners.subtitle")}
        </motion.p>

        {/* Swiper Carousel */}
        <div className="max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            className="relative"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white bg-opacity-90 backdrop-blur-lg shadow-xl rounded-3xl p-16 flex flex-col items-center text-center transform transition hover:scale-105 hover:shadow-2xl border border-gray-300 border-t-4 border-t-blue-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                >
                  <div className="mb-6">{partner.icon}</div>
                  <h3 className="text-3xl font-semibold text-blue-700">{partner.name}</h3>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Statistik Kemitraan */}
        <motion.p
          className="text-lg text-gray-700 mt-12 font-semibold"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {t("partners.stats")}
        </motion.p>
      </div>
    </section>
  );
};

export default Partners;
