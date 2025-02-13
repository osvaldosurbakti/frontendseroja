import React from "react";
import PortfolioList from "../../components/pages/portofolio/PortfolioList";

const PortfolioPage = () => {
  const categories = [
    "Konstruksi Gedung",
    "Konstruksi Sipil",
    "Desain Interior dan Eksterior",
    "Marmer",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-md">
          Daftar Portofolio
        </h2>
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                {category}
              </h3>
              <PortfolioList category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
