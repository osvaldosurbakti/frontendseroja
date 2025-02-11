import React from "react";

const Textarea = ({ label, value, onChange, placeholder, rows = 4, error }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? "border-red-500 focus:ring-red-300" : "border-gray-300 focus:ring-blue-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
