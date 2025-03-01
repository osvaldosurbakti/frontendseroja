import React from "react";
import HeroSection from "../../components/pages/home/HeroSection.jsx";
import AboutSection from "../../components/pages/home/AboutSection.jsx";
import PortfolioPreview from "../../components/pages/home/PortfolioPreview.jsx";
import CallToAction from "../../components/pages/home/CallToAction.jsx";
import Partners from "../../components/pages/home/Partners.jsx";
import Statistics from "../../components/pages/home/Statistics.jsx";
import dummyportofolio from "../../data/dummyPortofolio";

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PortfolioPreview portfolios={dummyportofolio} />
      <Statistics />
      <Partners />
      <CallToAction />
    </>
  );
};

export default Home;
