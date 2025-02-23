import React from "react";

const Textarea = ({ label, name, value, onChange, placeholder, required }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        required={required}
      ></textarea>
    </div>
  );
};

export default Textarea;
