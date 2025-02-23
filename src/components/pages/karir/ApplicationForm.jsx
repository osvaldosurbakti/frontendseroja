import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaPaperPlane } from "react-icons/fa";
import TextInput from "../../ui/TextInput";
import TextArea from "../../ui/TextArea";
import SelectInput from "../../ui/SelectInput";
import FileInput from "../../ui/FileInput";

const socialMediaOptions = [
  { id: "linkedin", label: "LinkedIn" },
  { id: "instagram", label: "Instagram" },
  { id: "twitter", label: "Twitter/X" },
  { id: "other", label: "Lainnya" },
];

const languageOptions = [
  { id: "indonesia", label: "Indonesia" },
  { id: "english", label: "Inggris" },
  { id: "mandarin", label: "Mandarin" },
  { id: "other", label: "Lainnya" },
];

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

const ApplicationForm = ({ jobId }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeUrl: "",
    experience: "",
    skills: [],
    appliedDate: new Date().toISOString().split("T")[0],
    availability: "",
    city: "",
    languages: [],
    education: [
      {
        degree: "",
        field: "",
        institution: "",
        yearGraduated: "",
      },
    ],
    socialMedia: [],
    portfolioUrls: [""],
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedSocials, setSelectedSocials] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [otherLanguage, setOtherLanguage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "resume") {
      setFormData({
        ...formData,
        resumeUrl: files ? URL.createObjectURL(files[0]) : "",
      });
    } else if (name.startsWith("education")) {
      const [field, index, subField] = name.split(".");
      const updatedEducation = [...formData.education];
      updatedEducation[index][subField] = value;
      setFormData({
        ...formData,
        education: updatedEducation,
      });
    } else if (name.startsWith("socialMedia")) {
      const [field, platform] = name.split(".");
      setFormData({
        ...formData,
        socialMedia: {
          ...formData.socialMedia,
          [platform]: value,
        },
      });
    } else if (name === "skills") {
      setFormData({
        ...formData,
        [name]: value.split(",").map((item) => item.trim()),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSelectSocial = (id) => {
    if (selectedSocials.includes(id)) {
      setSelectedSocials(selectedSocials.filter((item) => item !== id));
      setSocialLinks((prev) => {
        const updatedLinks = { ...prev };
        delete updatedLinks[id];
        return updatedLinks;
      });
    } else {
      setSelectedSocials([...selectedSocials, id]);
    }
  };

  const handleSocialLinkChange = (id, value) => {
    setSocialLinks({ ...socialLinks, [id]: value });
  };

  const handleSelectLanguage = (id) => {
    if (selectedLanguages.includes(id)) {
      setSelectedLanguages(selectedLanguages.filter((item) => item !== id));
      if (id === "other") {
        setOtherLanguage("");
      }
    } else {
      setSelectedLanguages([...selectedLanguages, id]);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = t("application.validation.name");
    if (!formData.email) newErrors.email = t("application.validation.email");
    if (!formData.phone) newErrors.phone = t("application.validation.phone");
    if (!formData.resumeUrl) newErrors.resumeUrl = t("application.validation.resume");
    if (!formData.experience) newErrors.experience = t("application.validation.experience");
    if (!formData.skills.length) newErrors.skills = t("application.validation.skills");
    if (!formData.availability) newErrors.availability = t("application.validation.availability");
    if (!formData.city) newErrors.city = t("application.validation.city");
    if (!formData.languages.length) newErrors.languages = t("application.validation.languages");
    if (!formData.education.every(edu => edu.degree && edu.field && edu.institution && edu.yearGraduated)) {
      newErrors.education = t("application.validation.education");
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const applicationData = {
      ...formData,
      appliedDate: new Date().toISOString().split("T")[0],
      skills: formData.skills,
      languages: selectedLanguages.includes("other")
        ? [...selectedLanguages.filter((lang) => lang !== "other"), otherLanguage]
        : selectedLanguages,
      socialMedia: selectedSocials.map((id) => ({
        platform: id,
        url: socialLinks[id] || "",
      })),
    };

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(applicationData),
      });

      if (response.ok) {
        alert(t("application.successMessage"));
      } else {
        const errorData = await response.json();
        setErrors({ submit: errorData.message || t("application.errorMessage") });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setErrors({ submit: t("application.errorMessage") });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white shadow-md rounded-lg">
      <TextInput
        label={t("application.fullName")}
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        error={errors.name}
      />

      <TextInput
        label={t("application.email")}
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        error={errors.email}
      />

      <TextInput
        label={t("application.phone")}
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        error={errors.phone}
      />

      <FileInput
        label={t("application.resume")}
        name="resume"
        onChange={handleChange}
        required
        error={errors.resumeUrl}
      />

      <TextArea
        label={t("application.experience")}
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder={t("application.experiencePlaceholder")}
        required
        error={errors.experience}
      />

      <TextInput
        label={t("application.skills")}
        name="skills"
        value={formData.skills.join(", ")}
        onChange={handleChange}
        placeholder={t("application.skillsPlaceholder")}
        required
        error={errors.skills}
      />

      <SelectInput
        label={t("application.availability")}
        name="availability"
        value={formData.availability}
        onChange={handleChange}
        options={[
          { value: "", label: t("application.selectAvailability") },
          { value: "Segera", label: t("application.availabilityImmediate") },
          { value: "Dalam 1 minggu", label: t("application.availabilityOneWeek") },
          { value: "Dalam 1 bulan", label: t("application.availabilityOneMonth") },
          { value: "Dalam 2 bulan", label: t("application.availabilityTwoMonths") },
        ]}
        required
        error={errors.availability}
      />

      <TextInput
        label={t("application.city")}
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
        error={errors.city}
      />

      <label className="block font-medium mt-3">{t("application.languages")}</label>
      <div className="grid grid-cols-2 gap-3">
        {languageOptions.map(({ id, label }) => (
          <label key={id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={selectedLanguages.includes(id)}
              onChange={() => handleSelectLanguage(id)}
            />
            <span>{t(`application.language.${id}`)}</span>
          </label>
        ))}
      </div>
      {errors.languages && <div className="text-red-500">{errors.languages}</div>}

      {selectedLanguages.includes("other") && (
        <TextInput
          label={t("application.otherLanguage")}
          name="otherLanguage"
          value={otherLanguage}
          onChange={(e) => setOtherLanguage(e.target.value)}
          placeholder={t("application.otherLanguagePlaceholder")}
        />
      )}

      {formData.education.map((edu, index) => (
        <EducationField
          key={index}
          index={index}
          education={edu}
          handleChange={handleChange}
        />
      ))}
      {errors.education && <div className="text-red-500">{errors.education}</div>}

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={() =>
            setFormData({
              ...formData,
              education: [
                ...formData.education,
                { degree: "", field: "", institution: "", yearGraduated: "" },
              ],
            })
          }
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          {t("application.addEducation")}
        </button>
        {formData.education.length > 1 && (
          <button
            type="button"
            onClick={() =>
              setFormData({
                ...formData,
                education: formData.education.slice(0, -1),
              })
            }
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            {t("application.removeEducation")}
          </button>
        )}
      </div>

      <label className="block font-medium mt-3">{t("application.socialMedia")}</label>
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

      {formData.portfolioUrls.map((url, index) => (
        <TextInput
          key={index}
          label={`${t("application.portfolioUrl")} ${index + 1}`}
          name={`portfolioUrls.${index}`}
          value={url}
          onChange={(e) => {
            const updatedPortfolioUrls = [...formData.portfolioUrls];
            updatedPortfolioUrls[index] = e.target.value;
            setFormData({
              ...formData,
              portfolioUrls: updatedPortfolioUrls,
            });
          }}
          placeholder={t("application.portfolioUrlPlaceholder")}
        />
      ))}

      <button
        type="button"
        onClick={() =>
          setFormData({
            ...formData,
            portfolioUrls: [...formData.portfolioUrls, ""],
          })
        }
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      >
        {t("application.addPortfolioUrl")}
      </button>

      <TextArea
        label={t("application.notes")}
        name="notes"
        value={formData.notes}
        onChange={handleChange}
      />

      {errors.submit && <div className="text-red-500">{errors.submit}</div>}

      <button
        type="submit"
        className="w-full flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? <span className="animate-spin mr-2">⏳</span> : <FaPaperPlane className="mr-2" />}
        {isSubmitting ? t("application.sending") : t("application.submit")}
      </button>
    </form>
  );
};

export default ApplicationForm;