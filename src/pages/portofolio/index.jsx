import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CategoryFilter from "../../components/ui/CategoryFilter";
import PortfolioCategory from "../../components/pages/portfolio/PortfolioCategory";
import portfolioItems from "../../data/dummyPortofolio";
import Testimonial from "../../components/pages/portfolio/Testimonial";
import VideoSection from "../../components/ui/VideoSection";

const PortfolioPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const uniqueCategories = [
    ...new Map(portfolioItems.map((item) => [item.category?.id, item.category])).values(),
  ];

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = selectedCategory === "" || item.category?.id === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700">
          {t("portfolio.title")}
        </h2>

        <CategoryFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={uniqueCategories}
        />

        {uniqueCategories
          .filter((category) => filteredItems.some((item) => item.category?.id === category.id))
          .map((category) => (
            <PortfolioCategory
              key={category.id}
              category={category}
              searchQuery={searchQuery}
            />
          ))}

        <Testimonial />
        <VideoSection videoUrl="https://www.youtube.com/embed/WDI4luNyBkQ" />
      </div>
    </section>
  );
};

export default PortfolioPage;