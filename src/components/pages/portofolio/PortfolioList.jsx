import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import portfolioItems from "../../../data/dummyPortofolio";

const PortfolioList = ({ category }) => {
  const [loading, setLoading] = useState(true);

  const filteredPortfolios = portfolioItems.filter(
    (item) => item.status === "active" && item.category === category
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!filteredPortfolios.length) {
    return (
      <p className="text-center text-gray-500 italic">
        Tidak ada portofolio tersedia untuk kategori ini.
      </p>
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
          <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2">
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
                Lihat Detail
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PortfolioList;
