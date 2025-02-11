// src/pages/tentangKami/index.js

import React from "react";
import CompanyProfile from "../../components/pages/tentangKami/CompanyProfile.jsx";
import VisionMission from "../../components/pages/tentangKami/VisionMission.jsx";
import TeamList from "../../components/pages/tentangKami/TeamList.jsx";


const TentangKami = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Tentang Kami</h1>

        {/* Company Profile Section */}
        <div className="mb-10">
          <CompanyProfile />
        </div>

        {/* Vision and Mission Section */}
        <div className="mb-10">
          <VisionMission />
        </div>

        {/* Team List Section */}
        <div>
          <TeamList />
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
