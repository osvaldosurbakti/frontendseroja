import React, { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import portfolioItems from "../../../data/dummyPortofolio";
import { Button } from "../../../components/ui/Button";
import Pagination from "../../../components/ui/Pagination";
import PortfolioTable from "../../../components/pages/admin/portfolio/PortfolioTable";
import SearchBar from "../../../components/ui/SearchBar";
import CategoryFilter from "../../../components/ui/CategoryFilter";

const PortfolioManagement = () => {
  const [portfolios, setPortfolios] = useState(portfolioItems);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [filterCategory, setFilterCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const navigate = useNavigate();

  // Fungsi untuk menghapus portofolio
  const handleDelete = (id) => {
    setPortfolios((prev) => prev.filter((item) => item._id !== id));
  };  

  // Gunakan debounce agar pencarian tidak terlalu sering memicu render
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);
    return () => clearTimeout(handler);
  }, [search]);

  // Filtering & Searching dengan useMemo agar lebih efisien
  const filteredPortfolios = useMemo(() => {
    return portfolios.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesCategory = filterCategory === "All" || item.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  }, [portfolios, debouncedSearch, filterCategory]);

  // Reset halaman ke awal saat filter atau pencarian berubah
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, filterCategory]);

  // Hitung jumlah halaman total
  const totalPages = Math.ceil(filteredPortfolios.length / itemsPerPage);

  // Ambil data portofolio untuk halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPortfolios = filteredPortfolios.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi untuk mengubah halaman
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Fungsi untuk navigasi ke halaman detail
  const handleViewDetail = (portfolio) => {
    navigate(`/admin/portfolio/${portfolio._id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Manajemen Portofolio</h1>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <CategoryFilter
          selectedCategory={filterCategory}
          onCategoryChange={setFilterCategory}
          categories={[
            { id: "All", name: "Semua Kategori" },
            ...[...new Set(portfolioItems.map((item) => item.category))].map((category) => ({
              id: category,
              name: category,
            })),
          ]}
        />
        <Button
          onClick={() => navigate("/admin/portfolio/add")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
        >
          Tambah Portofolio
        </Button>
      </div>

      {/* Tabel Portofolio atau Pesan Jika Data Kosong */}
      {currentPortfolios.length > 0 ? (
        <PortfolioTable
  portfolios={currentPortfolios}
  onEdit={(id) => navigate(`/admin/portfolio/edit/${id}`)}
  onDelete={handleDelete} // Kirim ID langsung, tanpa konfirmasi alert
  onViewDetail={handleViewDetail}
/>

      ) : (
        <p className="text-center text-gray-500">Data tidak ditemukan.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default PortfolioManagement;