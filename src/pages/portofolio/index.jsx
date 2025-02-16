import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchQuery, setRandomTestimonial, selectCategory, selectSearchQuery } from "../../components/redux/slices/portfolioSlice";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CategoryFilter from "../../components/pages/portfolio/CategoryFilter";
import SearchBar from "../../components/pages/portfolio/SearchBar";
import PortfolioCategory from "../../components/pages/portfolio/PortfolioCategory";
import Testimonial from "../../components/pages/portfolio/Testimonial";
import VideoSection from "../../components/pages/portfolio/VideoSection";
import { useRef } from "react";


const PortfolioPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectCategory);
  const searchQuery = useSelector(selectSearchQuery);
  const testimonials = useSelector((state) => state.portfolio.testimonials);
  const intervalRef = useRef(null);


  // Kategori dengan terjemahan
  const categories = [
    { id: "building_construction", name: t("portfolio.categories.building_construction") },
    { id: "civil_construction", name: t("portfolio.categories.civil_construction") },
    { id: "interior_exterior_design", name: t("portfolio.categories.interior_exterior_design") },
    { id: "marble", name: t("portfolio.categories.marble") },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setRandomTestimonial());
    }, 5000);
  
    intervalRef.current = interval;
  
    return () => clearInterval(interval);
  }, [dispatch]);
  
  

  const handleCategoryChange = (e) => dispatch(setCategory(e.target.value));
  const handleSearchChange = (e) => dispatch(setSearchQuery(e.target.value));

  if (!categories.length) return <div>{t("portfolio.no_categories")}</div>;
if (!testimonials?.length) return <div>{t("portfolio.no_testimonials")}</div>;

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {t("portfolio.title")}
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} categories={categories} />
          <SearchBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
        </div>

        {categories
          .filter((category) => selectedCategory === "" || category.id === selectedCategory)
          .map((category) => (
            <PortfolioCategory key={category.id} category={category.id} searchQuery={searchQuery} />
          ))}

        <VideoSection videoUrl="https://www.youtube.com/embed/WDI4luNyBkQ?si=MFqSwG4ForZB8Thf" />

        <Testimonial />
      </div>
      
    </section>
  );
  
};
export default PortfolioPage;
