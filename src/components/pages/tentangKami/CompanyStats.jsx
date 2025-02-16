import { motion } from "framer-motion";

const CompanyStats = () => {
  const stats = [
    { label: "Klien Puas", value: "500+" },
    { label: "Proyek Selesai", value: "300+" },
    { label: "Penghargaan", value: "20+" },
    { label: "Tahun Pengalaman", value: "10+" },
  ];

  return (
    <div className="bg-gray-100 py-12 mt-16 rounded-xl shadow-lg">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-8">Statistik Perusahaan</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
            >
              <p className="text-4xl font-extrabold text-blue-600">{stat.value}</p>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyStats;
