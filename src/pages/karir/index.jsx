import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import JobList from "../../components/pages/karir/JobList";
import dummyJobs from "../../data/dummyJobs";
import { FaSearch, FaMapMarkerAlt, FaTimes } from "react-icons/fa";

const Careers = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

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
            {t("careers.title")}
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("careers.subtitle")}
          </p>
        </header>

        {/* Filter Pencarian */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Input Pencarian */}
          <div className="relative w-full md:w-1/3">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder={t("careers.searchPlaceholder")}
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
              <option value="">{t("careers.allLocations")}</option>
              <option value="Jakarta">{t("careers.locations.jakarta")}</option>
              <option value="Bandung">{t("careers.locations.bandung")}</option>
              <option value="Medan">{t("careers.locations.medan")}</option>
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
              <FaTimes className="mr-2" /> {t("careers.reset")}
            </button>
          )}
        </div>

        {/* Menampilkan Jumlah Lowongan */}
        <p className="text-gray-600 text-center mb-6">
          {filteredJobs.length > 0
            ? t("careers.results", { count: filteredJobs.length })
            : t("careers.noResults")}
        </p>

        {/* Daftar Lowongan */}
        <JobList jobs={filteredJobs} />
      </div>
    </section>
  );
};

export default Careers;
