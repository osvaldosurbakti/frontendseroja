import React from "react";

const Card = ({ children, title }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
