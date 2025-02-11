import React from "react";
import { useParams } from "react-router-dom";
import PortfolioDetail from "../../components/pages/portofolio/PortfolioDetail";

const PortfolioDetailPage = () => {
  const { id } = useParams();

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <PortfolioDetail id={id} />
      </div>
    </section>
  );
};

export default PortfolioDetailPage;
