import React from "react";
import CompanyProfile from "../../components/pages/tentangKami/CompanyProfile";
import VisionMission from "../../components/pages/tentangKami/VisionMission";
import TeamList from "../../components/pages/tentangKami/TeamList";
import VideoSection from "../../components/ui/VideoSection";
import CTASection from "../../components/pages/tentangKami/CTASection";
import CompanyStats from "../../components/pages/tentangKami/CompanyStats";
import WhyChooseUs from "../../components/pages/tentangKami/WhyChooseUs";

const TentangKami = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-12">
          Tentang Kami
        </h1>
        <CompanyProfile />
        <VisionMission />
        <TeamList />
        <CompanyStats />
        <WhyChooseUs />
        <VideoSection videoUrl="https://www.youtube-nocookie.com/embed/WDI4luNyBkQ" title="Profil Perusahaan" />
        <CTASection />
      </div>
    </section>
  );
};

export default TentangKami;
