import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const reasons = [
    { title: "Profesional", desc: "Kami memiliki tim yang ahli di bidangnya." },
    { title: "Inovatif", desc: "Selalu menghadirkan solusi terbaru dan kreatif." },
    { title: "Terpercaya", desc: "Banyak klien yang telah membuktikan kualitas kami." },
    { title: "Komitmen", desc: "Kami selalu mengutamakan kepuasan pelanggan." },
  ];

  return (
    <div className="py-16 bg-white text-center">
      <h3 className="text-3xl font-bold text-gray-800 mb-8">Mengapa Memilih Kami?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          >
            <h4 className="text-xl font-semibold text-blue-600">{reason.title}</h4>
            <p className="text-gray-700 mt-2">{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
