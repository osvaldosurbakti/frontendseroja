import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ label, name, value, onChange, icon: Icon, type = "text", placeholder = "", required = false }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-3 text-gray-400" />}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          required={required}
        />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

export default TextInput;
