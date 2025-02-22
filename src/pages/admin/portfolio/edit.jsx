import React from "react";
import PortfolioForm from "../../../components/pages/admin/portfolio/PortfolioForm";

const EditPortfolio = () => {
  return (
    <div>
      <PortfolioForm isEdit={true} />
    </div>
  );
};

export default EditPortfolio;