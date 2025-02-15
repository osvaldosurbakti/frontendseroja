import { useParams } from "react-router-dom";
import PortfolioDetail from "../../components/pages/portofolio/PortfolioDetail";
import { motion } from "framer-motion";


const PortfolioDetailPage = () => {
  const { id } = useParams();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
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
