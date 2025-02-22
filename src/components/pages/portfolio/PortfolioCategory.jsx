import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PortfolioList from "./PortfolioList";

const PortfolioCategory = ({ category, searchQuery }) => {
  const { t } = useTranslation();

  // Pemetaan kategori untuk terjemahan
  const categoryMap = {
    "konstruksi-gedung": "building_construction",
    "konstruksi-sipil": "civil_construction",
    "desain-interior-eksterior": "interior_exterior_design",
    "marmer": "marble",
  };

  // Gunakan ID yang sudah diterjemahkan atau pakai default jika tidak ada di mapping
  const translatedCategoryId = categoryMap[category?.id] || category?.id;
  const categoryName = t(`portfolio.categories.${translatedCategoryId}`, { defaultValue: category?.name });

  if (!category || !category.id) {
    return (
      <motion.p
        className="text-center text-gray-500 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {t("portfolio.no_categories")}
      </motion.p>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        className="text-2xl font-bold text-blue-600 mb-6 border-b pb-2 hover:text-blue-800 transition-colors duration-300"
        whileHover={{ scale: 1.05, color: "#1E40AF" }}
      >
        {categoryName}
      </motion.h3>

      {/* List portofolio berdasarkan kategori */}
      <PortfolioList category={category.id} searchQuery={searchQuery} />
    </motion.div>
  );
};

export default PortfolioCategory;
