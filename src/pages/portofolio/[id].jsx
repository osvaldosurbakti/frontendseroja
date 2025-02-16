import { useParams } from "react-router-dom";
import PortfolioDetail from "../../components/pages/portfolio/PortfolioDetail";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl font-bold text-center text-blue-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {t("portfolio.detailTitle")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-gray-100 shadow-lg rounded-lg"
        >
          <PortfolioDetail id={id} />
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioDetailPage;
