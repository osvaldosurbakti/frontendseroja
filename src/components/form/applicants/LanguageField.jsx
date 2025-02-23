import React from "react";
import TextInput from "../../ui/TextInput";

const LanguageField = ({ languageOptions, selectedLanguages, otherLanguage, handleSelectLanguage, setOtherLanguage, errors }) => (
  <>
    <label className="block font-medium mt-3">Languages</label>
    <div className="grid grid-cols-2 gap-3">
      {languageOptions.map(({ id, label }) => (
        <label key={id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={selectedLanguages.includes(id)}
            onChange={() => handleSelectLanguage(id)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
    {errors.languages && <div className="text-red-500">{errors.languages}</div>}

    {selectedLanguages.includes("other") && (
      <TextInput
        label="Other Language"
        name="otherLanguage"
        value={otherLanguage}
        onChange={(e) => setOtherLanguage(e.target.value)}
        placeholder="Specify other language"
      />
    )}
  </>
);

export default LanguageField;