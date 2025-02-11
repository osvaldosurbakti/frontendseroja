import React from "react";

const Button = ({ variant = "primary", children, ...props }) => {
  const baseStyle = "px-4 py-2 rounded text-white font-semibold";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    danger: "bg-red-600 hover:bg-red-700",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
