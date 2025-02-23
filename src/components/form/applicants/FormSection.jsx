import React from "react";

const FormSection = ({ title, children }) => (
  <fieldset className="border border-gray-300 p-4 rounded-md">
    <legend className="text-lg font-medium">{title}</legend>
    {children}
  </fieldset>
);

export default FormSection;