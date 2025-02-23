import React from "react";

const FileInput = ({ label, name, onChange, required }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type="file"
        name={name}
        onChange={onChange}
        className="w-full pl-3 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        required={required}
      />
    </div>
  );
};

export default FileInput;
