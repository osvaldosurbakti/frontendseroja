import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/Button";

const JobForm = ({ initialData = {}, onSubmit }) => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    salaryRange: "",
    employmentType: "Full-Time",
    experienceLevel: "Entry",
    department: "",
    status: "open",
    ...initialData, // Menggunakan initialData jika tersedia
  });

  useEffect(() => {
    setJobData((prevData) => ({
      ...prevData,
      ...initialData,
    }));
  }, [initialData]);

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (Object.values(jobData).some((value) => !value || value.trim() === "")) {
      alert("Harap isi semua bidang!");
      return;
    }

    const formattedJob = {
      ...jobData,
      _id: jobData._id || Date.now().toString(),
      requirements: jobData.requirements.split(",").map((req) => req.trim()),
      createdAt: jobData.createdAt || new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };

    onSubmit(formattedJob);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        {jobData._id ? "Edit Lowongan Pekerjaan" : "Tambah Lowongan Pekerjaan"}
      </h1>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* Input Fields */}
        {[
          { label: "Posisi", name: "title", type: "text", placeholder: "Masukkan posisi pekerjaan" },
          { label: "Deskripsi", name: "description", type: "textarea", placeholder: "Masukkan deskripsi pekerjaan" },
          { label: "Persyaratan (Pisahkan dengan koma)", name: "requirements", type: "text", placeholder: "Contoh: React.js, Node.js, Tailwind CSS" },
          { label: "Lokasi", name: "location", type: "text", placeholder: "Masukkan lokasi pekerjaan" },
          { label: "Gaji", name: "salaryRange", type: "text", placeholder: "Contoh: Rp 10.000.000 - Rp 15.000.000" },
          { label: "Departemen", name: "department", type: "text", placeholder: "Masukkan departemen" },
        ].map(({ label, name, type, placeholder }) => (
          <div key={name} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={jobData[name]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder={placeholder}
                rows={4}
                required
              />
            ) : (
              <input
                type={type}
                name={name}
                value={jobData[name]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder={placeholder}
                required
              />
            )}
          </div>
        ))}

        {/* Dropdown Fields */}
        {[
          { label: "Jenis Pekerjaan", name: "employmentType", options: ["Full-Time", "Part-Time", "Contract", "Internship"] },
          { label: "Tingkat Pengalaman", name: "experienceLevel", options: ["Entry", "Mid", "Senior"] },
          { label: "Status", name: "status", options: ["open", "closed"] },
        ].map(({ label, name, options }) => (
          <div key={name} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select
              name={name}
              value={jobData[name]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex justify-end space-x-4 mt-8">
          <Button
            type="button"
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-all"
            onClick={() => navigate("/admin/jobs")}
          >
            Batal
          </Button>
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all"
          >
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;