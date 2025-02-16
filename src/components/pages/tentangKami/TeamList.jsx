import React from "react";
import teamMembers from "../../../data/teamData";
import { motion } from "framer-motion";

const TeamList = () => {
  const direksi = teamMembers.filter((member) => member.type === "direksi");
  const komisaris = teamMembers.filter((member) => member.type === "komisaris");

  return (
    <section className="py-16 bg-white rounded-2xl shadow-lg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Tim Kami
        </h2>

        {/* Bagian Direksi */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Direksi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {direksi.map((member) => (
              <motion.div
                key={member.id}
                className="bg-gray-100 shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-700">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bagian Komisaris */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Komisaris
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {komisaris.map((member) => (
              <motion.div
                key={member.id}
                className="bg-gray-100 shadow-md rounded-lg p-6 text-center hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-700">{member.position}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamList;
