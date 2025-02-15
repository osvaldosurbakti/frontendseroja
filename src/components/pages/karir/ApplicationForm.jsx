import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaUser, FaEnvelope, FaPhone, FaFileAlt, FaPaperPlane } from "react-icons/fa";

const ApplicationForm = ({ jobId }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    applicantName: "",
    email: "",
    phone: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasikan pembuatan URL untuk file resume
    const resumeUrl = formData.resume ? URL.createObjectURL(formData.resume) : "";

    const applicationData = {
      jobId,
      applicantName: formData.applicantName,
      email: formData.email,
      phone: formData.phone,
      resumeUrl,
      createdAt: new Date().toISOString(),
      status: "new",
    };

    console.log("Data Lamaran:", applicationData);

    setTimeout(() => {
      alert(t("application.successMessage"));
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nama Lengkap */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          {t("application.fullName")}
        </label>
        <div className="relative">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          {t("application.email")}
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Nomor Telepon */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          {t("application.phone")}
        </label>
        <div className="relative">
          <FaPhone className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Upload Resume */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">
          {t("application.resume")}
        </label>
        <div className="relative">
          <FaFileAlt className="absolute left-3 top-3 text-gray-400" />
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Tombol Kirim */}
      <button
        type="submit"
        className="w-full flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="animate-spin mr-2">⏳</span>
        ) : (
          <FaPaperPlane className="mr-2" />
        )}
        {isSubmitting ? t("application.sending") : t("application.submit")}
      </button>
    </form>
  );
};

export default ApplicationForm;
