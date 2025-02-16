import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PortfolioList = lazy(() => import("./PortfolioList"));

const PortfolioCategory = ({ category, searchQuery }) => {
  const { t } = useTranslation();

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
        {t(`portfolio.categories.${category}`, category)}
      </motion.h3>
      <Suspense fallback={<p className="text-center">{t("portfolio.loading")}</p>}>
        <PortfolioList category={category} searchQuery={searchQuery.toLowerCase()} />
      </Suspense>
    </motion.div>
  );
};

export default PortfolioCategory;
