import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchQuery } from "../../components/redux/slices/portfolioSlice";
import { selectCategory, selectSearchQuery } from "../../components/redux/slices/portfolioSlice";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const PortfolioList = lazy(() => import("../../components/pages/portofolio/PortfolioList"));

const PortfolioPage = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectCategory);
  const searchQuery = useSelector(selectSearchQuery);

  const categories = [
    "Konstruksi Gedung",
    "Konstruksi Sipil",
    "Desain Interior dan Eksterior",
    "Marmer",
  ];

  // ✅ Gunakan State Lokal untuk Testimonial (Tanpa Redux)
  const [randomTestimonial, setRandomTestimonial] = useState(null);

  // Dummy data testimonial
  const testimonials = [
    { text: "Pelayanan sangat baik, proyek selesai tepat waktu!", name: "Budi Santoso" },
    { text: "Hasil kerja sangat memuaskan, desain modern dan rapi.", name: "Siti Rahma" },
    { text: "Rekomendasi terbaik untuk konstruksi!", name: "Andi Wijaya" },
  ];

  useEffect(() => {
    // Pilih testimonial acak saat komponen dimuat
    if (testimonials.length > 0) {
      const randomIndex = Math.floor(Math.random() * testimonials.length);
      setRandomTestimonial(testimonials[randomIndex]);
    }
  }, []);

  const handleCategoryChange = useCallback(
    (e) => dispatch(setCategory(e.target.value)),
    [dispatch]
  );

  const handleSearchChange = useCallback(
    (e) => dispatch(setSearchQuery(e.target.value)),
    [dispatch]
  );

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        
        <motion.h2 
          className="text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Daftar Portofolio
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <select 
            value={selectedCategory} 
            onChange={handleCategoryChange}
            className="mb-4 md:mb-0 border p-2 rounded-md w-full md:w-1/3 focus:ring focus:ring-blue-200"
          >
            <option value="">Semua Kategori</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <input 
            type="text" 
            placeholder="Cari portofolio..." 
            value={searchQuery}
            onChange={handleSearchChange}
            className="border p-2 rounded-md w-full md:w-1/3 focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="space-y-12">
          {categories
            .filter((category) => !selectedCategory || selectedCategory === category)
            .map((category, index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <motion.h3 
                  className="text-2xl font-bold text-blue-600 mb-6 border-b pb-2 hover:text-blue-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05, color: "#1E40AF" }}
                >
                  {category}
                </motion.h3>
                <Suspense fallback={<p className="text-center">Loading portfolio...</p>}>
                  <PortfolioList category={category} searchQuery={searchQuery.toLowerCase()} />
                </Suspense>
              </motion.div>
            ))}
        </div>

       {/* Section Video */} 
        <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Video Proyek Kami</h3>
          <div className="flex justify-center">
            <motion.div 
              className="w-full md:w-2/3 aspect-video rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/WDI4luNyBkQ?si=MFqSwG4ForZB8Thf"
                title="Video Portofolio"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Apa Kata Klien Kami?</h3>
          <motion.div
            className="text-center italic text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            "{randomTestimonial?.text || 'Belum ada testimonial dari klien kami.'}"
            <br />
            <span className="font-semibold text-gray-900">
              - {randomTestimonial?.name || "Anonim"}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
