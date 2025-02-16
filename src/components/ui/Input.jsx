import React from "react";

export const Input = ({ type = "text", value, onChange, placeholder, error, icon }) => {
    return (
      <div className="relative">
        {icon && <Search className="absolute left-3 top-3 text-gray-400" />}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`border p-2 rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:outline-none ${icon ? "pl-10" : ""} ${error ? "border-red-500" : ""}`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
    );
  };