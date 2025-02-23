import React from "react";
import TextInput from "../../ui/TextInput";

const EducationField = ({ index, education, handleChange }) => (
  <div className="space-y-4">
    <TextInput
      label={`Education ${index + 1} - Degree`}
      name={`education.${index}.degree`}
      value={education.degree}
      onChange={handleChange}
      required
    />
    <TextInput
      label={`Education ${index + 1} - Field`}
      name={`education.${index}.field`}
      value={education.field}
      onChange={handleChange}
      required
    />
    <TextInput
      label={`Education ${index + 1} - Institution`}
      name={`education.${index}.institution`}
      value={education.institution}
      onChange={handleChange}
      required
    />
    <TextInput
      label={`Education ${index + 1} - Year Graduated`}
      name={`education.${index}.yearGraduated`}
      value={education.yearGraduated}
      onChange={handleChange}
      required
    />
  </div>
);

export default EducationField;