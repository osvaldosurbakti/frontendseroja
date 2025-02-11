import React from "react";
import HeroSection from "../../components/pages/home/HeroSection.jsx";
import AboutSection from "../../components/pages/home/AboutSection.jsx";
import PortfolioPreview from "../../components/pages/home/PortfolioPreview.jsx";


const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioPreview />
    </>
  );
};

export default Home;
