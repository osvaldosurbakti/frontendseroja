import React from "react";

const SocialMediaField = ({ socialMediaOptions, selectedSocials, socialLinks, handleSelectSocial, handleSocialLinkChange }) => (
  <>
    <label className="block font-medium mt-3">Social Media</label>
    <div className="grid grid-cols-2 gap-3">
      {socialMediaOptions.map(({ id, label }) => (
        <label key={id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={selectedSocials.includes(id)}
            onChange={() => handleSelectSocial(id)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>

    {selectedSocials.length > 0 && (
      <div className="mt-3 space-y-2">
        {selectedSocials.map((id) => (
          <div key={id}>
            <label className="block font-medium">
              {socialMediaOptions.find((s) => s.id === id)?.label}
            </label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded-md mt-1"
              placeholder={`Masukkan ${id === "other" ? "sosial media lain" : id} URL atau username`}
              value={socialLinks[id] || ""}
              onChange={(e) => handleSocialLinkChange(id, e.target.value)}
            />
          </div>
        ))}
      </div>
    )}
  </>
);

export default SocialMediaField;