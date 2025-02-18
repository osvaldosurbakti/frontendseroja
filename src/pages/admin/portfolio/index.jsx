import React, { useState } from "react";
import portfolioItems from "../../data/dummyPortofolio";
import { Card, CardContent } from "../../../components/ui/Card";
import { Input } from "../../../components/ui/Input";
import { Modal } from "../../../components/ui/Modal";
import { Button } from "../../../components/ui/Button";

const PortfolioManagement = () => {
  const [portfolios, setPortfolios] = useState(portfolioItems);
  const [search, setSearch] = useState("");
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // State untuk form modal
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });

  const categories = ["All", ...new Set(portfolioItems.map((item) => item.category))];

  const handleSearch = (event) => setSearch(event.target.value);

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus item ini?")) {
      setPortfolios(portfolios.filter((item) => item._id !== id));
    }
  };

  const openModal = (portfolio = null) => {
    setSelectedPortfolio(portfolio);
    setIsModalOpen(true);
    setFormData(
      portfolio
        ? { title: portfolio.title, category: portfolio.category, description: portfolio.description }
        : { title: "", category: "", description: "" }
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPortfolio(null);
    setFormData({ title: "", category: "", description: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.title || !formData.category || !formData.description) {
      alert("Semua field harus diisi!");
      return;
    }

    if (selectedPortfolio) {
      // Edit
      setPortfolios((prev) =>
        prev.map((item) =>
          item._id === selectedPortfolio._id ? { ...item, ...formData } : item
        )
      );
    } else {
      // Tambah baru
      const newPortfolio = {
        _id: Date.now().toString(), // Dummy ID
        ...formData,
        imageUrl: "https://via.placeholder.com/150", // Placeholder image
      };
      setPortfolios((prev) => [...prev, newPortfolio]);
    }

    closeModal();
  };

  const filteredPortfolios = portfolios.filter(
    (item) =>
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10 px-6">
      <div className="mb-10">&nbsp;</div>
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
          onClick={() => openModal(null)}
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
                <Button onClick={() => openModal(item)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm transition">
                  Edit
                </Button>
                <Button onClick={() => handleDelete(item._id)} className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-2 rounded-lg shadow-sm transition">
                  Hapus
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">{selectedPortfolio ? "Edit Portofolio" : "Tambah Portofolio"}</h2>
            <Input type="text" name="title" placeholder="Judul" className="w-full border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500" value={formData.title} onChange={handleChange} />
            <Input type="text" name="category" placeholder="Kategori" className="w-full border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500" value={formData.category} onChange={handleChange} />
            <Input type="text" name="description" placeholder="Deskripsi" className="w-full border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500" value={formData.description} onChange={handleChange} />
            <div className="flex justify-end mt-6 gap-3">
              <Button onClick={closeModal} className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition">
                Batal
              </Button>
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition">
                Simpan
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default PortfolioManagement;
