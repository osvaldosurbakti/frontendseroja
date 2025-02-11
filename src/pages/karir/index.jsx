import React, { useState } from "react";
import JobList from "../../components/pages/karir/JobList";
import dummyJobs from "../../data/dummyJobs"; // Impor data dummy

const Careers = () => {
  const [search, setSearch] = useState(""); // Untuk pencarian
  const [filterLocation, setFilterLocation] = useState(""); // Filter lokasi

  const filteredJobs = dummyJobs.filter(
    (job) =>
      job.status === "open" &&
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (!filterLocation || job.location.toLowerCase().includes(filterLocation.toLowerCase()))
  );

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Header Halaman */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Karir di Perusahaan Kami</h1>
          <p className="text-gray-600 mt-4">
            Bergabunglah dengan tim kami dan jadilah bagian dari perjalanan luar biasa. Kami mencari
            individu berbakat yang siap berkembang bersama kami.
          </p>
        </header>

        {/* Filter Pencarian */}
        <div className="mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Cari posisi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-1/3 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={filterLocation}
            onChange={(e) => setFilterLocation(e.target.value)}
            className="w-full lg:w-1/3 border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Semua Lokasi</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Surabaya">Surabaya</option>
          </select>
        </div>

        {/* Daftar Lowongan */}
        <JobList jobs={filteredJobs} /> {/* Gunakan data filteredJobs sebagai data */}
      </div>
    </section>
  );
};

export default Careers;
