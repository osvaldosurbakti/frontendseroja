// src/pages/tentangKami/TeamList.js
import React from "react";

const TeamList = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Direktur Utama",
      type: "direksi",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Komisaris",
      type: "komisaris",
    },
    {
      id: 3,
      name: "Robert Brown",
      position: "Manajer Operasional",
      type: "direksi",
    },
    {
      id: 4,
      name: "Emily Johnson",
      position: "Komisaris Independen",
      type: "komisaris",
    },
  ];

  const direksi = teamMembers.filter((member) => member.type === "direksi");
  const komisaris = teamMembers.filter((member) => member.type === "komisaris");

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Tim Kami</h2>
        
        {/* Bagian Direksi */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Direksi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {direksi.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Komisaris */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Komisaris</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {komisaris.map((member) => (
              <div
                key={member.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-700">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamList;
