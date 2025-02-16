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

    // Validasi sederhana
    if (Object.values(jobData).some((value) => value.trim() === "")) {
      alert("Harap isi semua bidang!");
      return;
    }

    // Convert persyaratan dari string ke array
    const formattedJob = {
      ...jobData,
      _id: Date.now().toString(), // Simulasi ID unik
      requirements: jobData.requirements.split(",").map((req) => req.trim()),
      createdAt: new Date().toISOString().split("T")[0], // Format YYYY-MM-DD
      updatedAt: new Date().toISOString().split("T")[0],
    };

    console.log("Lowongan Ditambahkan:", formattedJob);
    
    // Simulasi penyimpanan data (bisa diganti dengan API call)
    alert("Lowongan berhasil ditambahkan!");
    navigate("/admin/jobs"); // Redirect ke halaman daftar pekerjaan
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Tambah Lowongan Pekerjaan</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Posisi</label>
          <input type="text" name="title" value={jobData.title} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
          <textarea name="description" value={jobData.description} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Persyaratan (Pisahkan dengan koma)</label>
          <input type="text" name="requirements" value={jobData.requirements} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Lokasi</label>
          <input type="text" name="location" value={jobData.location} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Gaji</label>
          <input type="text" name="salaryRange" value={jobData.salaryRange} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Jenis Pekerjaan</label>
          <select name="employmentType" value={jobData.employmentType} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Kontrak</option>
            <option value="Internship">Magang</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Tingkat Pengalaman</label>
          <select name="experienceLevel" value={jobData.experienceLevel} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="Entry">Entry</option>
            <option value="Mid">Mid</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Departemen</label>
          <input type="text" name="department" value={jobData.department} onChange={handleChange} className="border p-2 rounded w-full" required />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select name="status" value={jobData.status} onChange={handleChange} className="border p-2 rounded w-full">
            <option value="open">Dibuka</option>
            <option value="closed">Ditutup</option>
          </select>
        </div>

        <div className="flex justify-end space-x-2">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg" onClick={() => navigate("/admin/jobs")}>
            Batal
          </Button>
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            Simpan
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
