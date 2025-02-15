import React from "react";
import teamMembers from "../../../data/teamData"; // Import data anggota tim

const TeamList = () => {
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto mb-4 rounded-full object-cover shadow-md"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
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
