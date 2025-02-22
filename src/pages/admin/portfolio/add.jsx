import React, { useState } from "react";
import PortfolioForm from "../../../components/pages/admin/portfolio/PortfolioForm";


const AddPortfolio = () => {
  return (
    <div>
      <PortfolioForm isEdit={false} />
    </div>
  );
};
export default AddPortfolio;
