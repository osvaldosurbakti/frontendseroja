import React from "react";

const ButtonGroup = ({ buttons = [], className }) => {
  return (
    <div className={`flex space-x-2 ${className}`}>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`px-4 py-2 rounded-lg ${
            button.variant === "primary"
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
