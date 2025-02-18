import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dummyJobs from "../../../data/dummyJobs";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const jobToEdit = dummyJobs.find((job) => job._id === id);

  const [formData, setFormData] = useState(jobToEdit || {
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    status: "open",
  });

  if (!jobToEdit) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold text-red-600">Lowongan tidak ditemukan!</h1>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
          onClick={() => navigate(-1)}
        >
          Kembali
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Lowongan berhasil diperbarui!");
    navigate("/admin/jobs");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Edit Lowongan</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        <label className="block mb-2">Judul Pekerjaan</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <label className="block mb-2">Perusahaan</label>
        <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <label className="block mb-2">Lokasi</label>
        <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <label className="block mb-2">Gaji</label>
        <input type="text" name="salary" value={formData.salary} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <label className="block mb-2">Deskripsi</label>
        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded mb-4" required />

        <label className="block mb-2">Status</label>
        <select name="status" value={formData.status} onChange={handleChange} className="w-full p-2 border rounded mb-4">
          <option value="open">Dibuka</option>
          <option value="closed">Ditutup</option>
        </select>

        <div className="flex justify-between">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">Simpan Perubahan</button>
          <button type="button" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded" onClick={() => navigate(-1)}>Batal</button>
        </div>
      </form>
    </div>
  );
};

export default EditJob;
