import React from "react";

const SelectInput = ({ label, name, value, onChange, options, required }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        required={required}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
