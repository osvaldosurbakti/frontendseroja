import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import portfolioItems from "../../../data/dummyPortofolio";
import { Card, CardContent } from "../../../components/ui/Card";
import { Input } from "../../../components/ui/Input";
import { Button } from "../../../components/ui/Button";

const PortfolioManagement = () => {
  const [portfolios, setPortfolios] = useState(portfolioItems);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false); // State untuk modal
  const [modalType, setModalType] = useState(null); // Tipe modal (add/edit)

  const navigate = useNavigate(); // Inisialisasi navigate

  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))];

  const handleSearch = (event) => setSearch(event.target.value);

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus item ini?")) {
      setPortfolios(portfolios.filter((item) => item._id !== id));
    }
  };

  const openEditPage = (id) => {
    // Arahkan pengguna ke halaman edit dengan menggunakan ID
    navigate(`/admin/portfolio/edit/${id}`);
  };

  const openAddPage = () => {
    // Arahkan pengguna ke halaman tambah portofolio
    navigate(`/admin/portfolio/add`);
  };

  const openModal = (type) => {
    setModalType(type); // Tentukan apakah ini modal add atau edit
    setIsModalOpen(true); // Buka modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Tutup modal
    setModalType(null); // Reset tipe modal
  };

  const filteredPortfolios = portfolios.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Manajemen Portofolio</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <Input
          type="text"
          placeholder="Cari portofolio..."
          value={search}
          onChange={handleSearch}
          className="w-full md:w-1/3 border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500"
        />
        <select
          className="w-full md:w-1/4 border border-gray-300 shadow-sm rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <Button
          onClick={openAddPage} // Menambahkan fungsi untuk mengarahkan ke halaman add
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition duration-200"
        >
          Tambah Portofolio
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPortfolios.map((item) => (
          <Card key={item._id} className="shadow-lg hover:shadow-xl transition duration-300 rounded-lg overflow-hidden">
            <img src={item.imageUrl} alt={item.title} className="w-full h-52 object-cover" />
            <CardContent className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-500 italic">{item.category}</p>
              <p className="mt-3 text-gray-700 text-justify">{item.description}</p>
              <div className="flex justify-between mt-5">
                <Button
                  onClick={() => openEditPage(item._id)} // Mengarahkan ke halaman edit
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm transition"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm transition"
                >
                  Hapus
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal untuk tambah/edit portofolio */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-bold mb-4">
              {modalType === "add" ? "Tambah Portofolio" : "Edit Portofolio"}
            </h2>
            <Input type="text" placeholder="Judul" className="w-full mb-4 border-gray-300" />
            <Input type="text" placeholder="Kategori" className="w-full mb-4 border-gray-300" />
            <Input type="text" placeholder="Deskripsi" className="w-full mb-4 border-gray-300" />
            <div className="flex justify-end gap-4">
              <Button onClick={closeModal} className="bg-gray-500 hover:bg-gray-600 text-white">
                Batal
              </Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white">Simpan</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioManagement;
