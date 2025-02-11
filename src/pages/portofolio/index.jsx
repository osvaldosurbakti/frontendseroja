// File: src/pages/portofolio/index.js

import React from "react";
import PortfolioList from "../../components/pages/portofolio/PortfolioList";

const PortfolioPage = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Daftar Portofolio</h2>
        <PortfolioList />
      </div>
    </section>
  );
};
export default PortfolioPage;
