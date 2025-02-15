import React, { useState } from "react";
import JobList from "../../components/pages/karir/JobList";
import dummyJobs from "../../data/dummyJobs"; // Impor data dummy
import { FaSearch, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

const Careers = () => {
  const [search, setSearch] = useState(""); // Pencarian berdasarkan posisi
  const [filterLocation, setFilterLocation] = useState(""); // Filter berdasarkan lokasi

  const filteredJobs = dummyJobs.filter(
    (job) =>
      job.status === "open" &&
      job.title.toLowerCase().includes(search.toLowerCase()) &&
      (!filterLocation || job.location.toLowerCase().includes(filterLocation.toLowerCase()))
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Halaman */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Bergabunglah dengan Tim Kami 
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Kami mencari individu berbakat yang siap berkembang bersama kami. Temukan posisi yang cocok dengan keahlian dan minat Anda.
          </p>
        </header>

        {/* Filter Pencarian */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Input Pencarian */}
          <div className="relative w-full md:w-1/3">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Cari posisi..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          {/* Dropdown Lokasi */}
          <div className="relative w-full md:w-1/3">
            <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
            <select
              value={filterLocation}
              onChange={(e) => setFilterLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 transition duration-300"
            >
              <option value="">Semua Lokasi</option>
              <option value="Jakarta">Jakarta</option>  
              <option value="Bandung">Bandung</option>
              <option value="Medan">Medan</option>
            </select>
          </div>

          {/* Tombol Reset */}
          {(search || filterLocation) && (
            <button
              onClick={() => {
                setSearch("");
                setFilterLocation("");
              }}
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              <FaTimes className="mr-2" /> Reset Filter
            </button>
          )}
        </div>

        {/* Menampilkan Jumlah Lowongan */}
        <p className="text-gray-600 text-center mb-6">
          {filteredJobs.length > 0
            ? `Menampilkan ${filteredJobs.length} lowongan pekerjaan tersedia`
            : "Tidak ada lowongan yang cocok dengan pencarian Anda."}
        </p>

        {/* Daftar Lowongan */}
        <JobList jobs={filteredJobs} />
      </div>
    </section>
  );
};

export default Careers;
