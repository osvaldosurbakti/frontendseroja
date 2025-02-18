import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/Button";

const AddJob = () => {
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
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(jobData).some((value) => value.trim() === "")) {
      alert("Harap isi semua bidang!");
      return;
    }

    const formattedJob = {
      ...jobData,
      _id: Date.now().toString(),
      requirements: jobData.requirements.split(",").map((req) => req.trim()),
      createdAt: new Date().toISOString().split("T")[0],
      updatedAt: new Date().toISOString().split("T")[0],
    };

    console.log("Lowongan Ditambahkan:", formattedJob);
    alert("Lowongan berhasil ditambahkan!");
    navigate("/admin/jobs");
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Tambah Lowongan Pekerjaan
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "Posisi", name: "title", type: "text" },
          { label: "Deskripsi", name: "description", type: "textarea" },
          { label: "Persyaratan (Pisahkan dengan koma)", name: "requirements", type: "text" },
          { label: "Lokasi", name: "location", type: "text" },
          { label: "Gaji", name: "salaryRange", type: "text" },
          { label: "Departemen", name: "department", type: "text" },
        ].map(({ label, name, type }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            {type === "textarea" ? (
              <textarea
                name={name}
                value={jobData[name]}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            ) : (
              <input
                type={type}
                name={name}
                value={jobData[name]}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
              />
            )}
          </div>
        ))}

        {[
          { label: "Jenis Pekerjaan", name: "employmentType", options: ["Full-Time", "Part-Time", "Contract", "Internship"] },
          { label: "Tingkat Pengalaman", name: "experienceLevel", options: ["Entry", "Mid", "Senior"] },
          { label: "Status", name: "status", options: ["open", "closed"] },
        ].map(({ label, name, options }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <select
              name={name}
              value={jobData[name]}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            >
              {options.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        ))}

        <div className="flex justify-end space-x-2">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg" onClick={() => navigate("/admin/jobs")}>Batal</Button>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Simpan</Button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
