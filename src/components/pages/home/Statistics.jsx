import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Briefcase, Users, Calendar, Award } from "lucide-react";

const Statistics = () => {
  const { t } = useTranslation();

  const stats = [
    { label: t("stats.completedProjects"), value: 120, icon: <Briefcase className="w-12 h-12 text-blue-600" />, borderColor: "border-t-blue-500" },
    { label: t("stats.satisfiedClients"), value: 300, icon: <Users className="w-12 h-12 text-green-600" />, borderColor: "border-t-green-500" },
    { label: t("stats.yearsExperience"), value: 10, icon: <Calendar className="w-12 h-12 text-yellow-600" />, borderColor: "border-t-yellow-500" },
    { label: t("stats.professionalTeam"), value: 50, icon: <Award className="w-12 h-12 text-purple-600" />, borderColor: "border-t-purple-500" }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < stat.value) {
            newCounts[index] += Math.ceil(stat.value / 50);
          } else {
            clearInterval(intervals[index]);
            newCounts[index] = stat.value;
          }
          return newCounts;
        });
      }, 30);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        {/* Judul Section */}
        <motion.h2
          className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("stats.title")}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t("stats.subtitle")}
        </motion.p>

        {/* Statistik Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className={`relative bg-white bg-opacity-90 backdrop-blur-lg shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center transition-transform hover:scale-110 hover:shadow-2xl border ${stat.borderColor} border-t-4`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Ikon Background Transparan */}
              <div className="absolute top-2 right-2 opacity-10">{stat.icon}</div>

              {/* Ikon Utama */}
              <div className="mb-4">{stat.icon}</div>

              {/* Counter Animation */}
              <h3 className="text-4xl font-bold text-gray-800">{counts[index]}+</h3>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Garis pemisah halus */}
        <motion.div
          className="mt-12 w-3/4 mx-auto h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 rounded-full"
          initial={{ opacity: 0, width: "0%" }}
          animate={{ opacity: 1, width: "75%" }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
      </div>
    </section>
  );
};

export default Statistics;
