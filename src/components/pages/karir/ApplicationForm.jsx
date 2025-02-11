// src/components/pages/karir/ApplicationForm.js
import React, { useState } from "react";

const ApplicationForm = ({ jobId }) => {
  const [formData, setFormData] = useState({
    applicantName: "",
    email: "",
    phone: "",
    resume: null, // File yang diunggah
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulasikan pembuatan URL untuk file resume
    const resumeUrl = formData.resume
      ? URL.createObjectURL(formData.resume)
      : "";

    // Data sesuai dengan format database
    const applicationData = {
      jobId: jobId, // ID pekerjaan yang dilamar
      applicantName: formData.applicantName,
      email: formData.email,
      phone: formData.phone,
      resumeUrl: resumeUrl, // URL file resume
      createdAt: new Date().toISOString(),
      status: "new", // Default status
    };

    console.log("Data Lamaran:", applicationData);

    // Tambahkan logika pengiriman data ke backend di sini
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Formulir Lamaran</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="applicantName"
            value={formData.applicantName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Nomor Telepon
          </label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">Resume</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Kirim Lamaran
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
