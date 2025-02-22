import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import portfolioItems from "../../../data/dummyPortofolio";
import Pagination from "../../../components/ui/Pagination";
import PortfolioTable from "../../../components/pages/admin/portfolio/PortfolioTable";
import DataPortfolio from "../../../components/pages/admin/portfolio/DataPortfolio";
import SearchFilter from "../../../components/pages/admin/portfolio/PortfolioFilters";

const PortfolioManagement = () => {
  const [portfolios, setPortfolios] = useState(portfolioItems);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const navigate = useNavigate();

  // Menghapus portofolio
  const handleDelete = (id) => {
    setPortfolios((prev) => prev.filter((item) => item._id !== id));
  };

  // Filter & pencarian menggunakan useMemo
  const filteredPortfolios = useMemo(() => {
    return portfolios.filter(({ title, category }) => {
      const matchSearch = title.toLowerCase().includes(search.toLowerCase());
      const matchCategory = filterCategory === "All" || category.id === filterCategory;
      return matchSearch && matchCategory;
    });
  }, [portfolios, search, filterCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredPortfolios.length / itemsPerPage);
  const currentPortfolios = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredPortfolios.slice(start, start + itemsPerPage);
  }, [filteredPortfolios, currentPage, itemsPerPage]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manajemen Portofolio</h1>

      {/* Statistik Portofolio */}
      <DataPortfolio />

      {/* Spacer untuk memberikan jarak antara DataPortfolio dan Filter */}
      <div className="mb-4"></div>

      {/* Search, Filter & Tambah Portofolio */}
      <SearchFilter
  searchQuery={search}
  onSearchChange={setSearch}
  selectedCategory={filterCategory}
  onCategoryChange={setFilterCategory}
  onAddPortfolio={() => navigate("/admin/portfolio/add")}
  categories={[
    { id: "All", name: "Semua Kategori" },
    ...Array.from(new Set(portfolioItems.map(({ category }) => category.id))).map((id) => ({
      id,
      name: portfolioItems.find(({ category }) => category.id === id).category.name,
    })),
  ]}
/>


      {/* Tabel Portofolio atau Pesan Jika Data Kosong */}
      {currentPortfolios.length > 0 ? (
        <PortfolioTable
          portfolios={currentPortfolios}
          onEdit={(id) => navigate(`/admin/portfolio/edit/${id}`)}
          onDelete={handleDelete}
          onViewDetail={(portfolio) => navigate(`/admin/portfolio/${portfolio._id}`)}
        />
      ) : (
        <p className="text-center text-gray-500">Data tidak ditemukan.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
    </div>
  );
};

export default PortfolioManagement;
