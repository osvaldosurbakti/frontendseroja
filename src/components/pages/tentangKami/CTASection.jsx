import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <motion.div
      className="text-center mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Tertarik Bekerja Sama dengan Kami?
      </h3>
      <p className="text-gray-600 mb-6">
        Hubungi kami untuk informasi lebih lanjut dan mulailah kolaborasi yang luar biasa!
      </p>
      <a
        href="/hubungi-kami"
        className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Hubungi Kami
      </a>
    </motion.div>
  );
};

export default CTASection;
