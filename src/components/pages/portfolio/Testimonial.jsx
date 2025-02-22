import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRandomTestimonial, selectRandomTestimonial } from "../../redux/slices/portfolioSlice";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const testimonial = useSelector(selectRandomTestimonial);
  const [show, setShow] = useState(false);

  // 🔹 Ambil testimoni acak pertama kali komponen dimuat
  useEffect(() => {
    dispatch(setRandomTestimonial());
  }, [dispatch]);

  // 🔹 Animasi muncul & ganti testimoni setiap 10 detik (opsional)
  useEffect(() => {
    setShow(true);
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        dispatch(setRandomTestimonial());
        setShow(true);
      }, 500);
    }, 5000); // Ganti setiap 10 detik

    return () => clearInterval(interval);
  }, [dispatch]);

  if (!testimonial) return null;

  return (
    <motion.div
      className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8 border border-gray-200 text-center mt-16"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h3 className="text-3xl font-extrabold text-gray-900 mb-6">{t("testimonial.title")}</h3>
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={testimonial.text}
            className="bg-blue-50 p-6 rounded-lg shadow-inner border-l-4 border-blue-500"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg italic text-gray-700 leading-relaxed">"{testimonial.text}"</p>
            <h4 className="mt-4 font-semibold text-blue-700 text-xl">— {testimonial.name}</h4>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Testimonial;
