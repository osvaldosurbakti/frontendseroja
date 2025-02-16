import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import portfolioItems from "../../../data/dummyPortofolio";

const PortfolioList = ({ category, searchQuery }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const result = portfolioItems.filter(
        (item) =>
          item.status === "active" &&
          item.category.id === category.id &&
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPortfolios(result);
      setLoading(false);
    }, 500); // Mengurangi waktu loading agar lebih responsif
    return () => clearTimeout(timer);
  }, [category.id, searchQuery]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (filteredPortfolios.length === 0) {
    return (
      <motion.p
        className="text-center text-gray-500 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t("portfolio.no_results")}
      </motion.p>
    );
  }

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {filteredPortfolios.map((item) => (
        <SwiperSlide key={item._id}>
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {item.description.slice(0, 100)}...
              </p>
              <Link
                to={`/portofolio/${item._id}`}
                className="inline-block w-full text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md font-medium transition-colors duration-300"
              >
                {t("portfolio.view_details")}
              </Link>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioList;
