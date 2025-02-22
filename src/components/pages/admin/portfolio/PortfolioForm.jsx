import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import portfolioItems from "../../../../data/dummyPortofolio";
import { Button } from "../../../../components/ui/Button"; // Import komponen Button

const PortfolioForm = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState({
    title: "",
    category: "",
    description: "",
    imageUrl: "",
    status: "active",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(isEdit); // Hanya loading jika mode edit
  const [error, setError] = useState(null);
  const [formErrors, setFormErrors] = useState({}); // State untuk menyimpan pesan error validasi

  useEffect(() => {
    if (isEdit) {
      const currentPortfolio = portfolioItems.find((item) => item._id === id);
      if (currentPortfolio) {
        setPortfolio(currentPortfolio);
        setLoading(false);
      } else {
        setError("Portfolio not found.");
        setLoading(false);
      }
    }
  }, [id, isEdit]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/") && file.size <= 5000000) {
      setSelectedImage(URL.createObjectURL(file));
      setPortfolio({ ...portfolio, imageUrl: file });
      setFormErrors({ ...formErrors, imageUrl: "" }); // Hapus error jika file valid
    } else {
      setFormErrors({ ...formErrors, imageUrl: "File harus berupa gambar (maksimal 5MB)." });
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    setPortfolio({ ...portfolio, imageUrl: "" });
  };

  const validateForm = () => {
    const errors = {};
    if (!portfolio.title) errors.title = "Judul wajib diisi.";
    if (!portfolio.category) errors.category = "Kategori wajib diisi.";
    if (!portfolio.description) errors.description = "Deskripsi wajib diisi.";
    if (!portfolio.imageUrl) errors.imageUrl = "Gambar wajib diupload.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setError(null);
    console.log(isEdit ? "Portfolio Updated:" : "Portfolio Added:", portfolio);
    alert(isEdit ? "Portfolio updated successfully!" : "Portfolio added successfully!");
    navigate("/admin/portfolio");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{isEdit ? "Edit Portfolio" : "Tambah Portfolio"}</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Judul */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Judul</label>
          <input
            type="text"
            placeholder="Judul Portfolio"
            value={portfolio.title}
            onChange={(e) => setPortfolio({ ...portfolio, title: e.target.value })}
            className={`w-full p-2 border rounded ${
              formErrors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formErrors.title && <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>}
        </div>

        {/* Kategori */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
          <input
            type="text"
            placeholder="Kategori"
            value={portfolio.category}
            onChange={(e) => setPortfolio({ ...portfolio, category: e.target.value })}
            className={`w-full p-2 border rounded ${
              formErrors.category ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formErrors.category && <p className="text-red-500 text-sm mt-1">{formErrors.category}</p>}
        </div>

        {/* Deskripsi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
          <textarea
            placeholder="Deskripsi"
            value={portfolio.description}
            onChange={(e) => setPortfolio({ ...portfolio, description: e.target.value })}
            className={`w-full p-2 border rounded ${
              formErrors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formErrors.description && (
            <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>
          )}
        </div>

        {/* Upload Gambar */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload Gambar</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={`w-full p-2 border rounded ${
              formErrors.imageUrl ? "border-red-500" : "border-gray-300"
            }`}
          />
          {formErrors.imageUrl && <p className="text-red-500 text-sm mt-1">{formErrors.imageUrl}</p>}
          {selectedImage && (
            <div className="mt-2">
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full h-48 object-cover rounded-lg"
              />
              <button
                type="button"
                onClick={handleDeleteImage}
                className="text-red-500 mt-2 hover:text-red-700"
              >
                Hapus Gambar
              </button>
            </div>
          )}
          {!selectedImage && portfolio.imageUrl && (
            <div className="mt-2">
              <img
                src={portfolio.imageUrl}
                alt="Current Image"
                className="max-w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={portfolio.status}
            onChange={(e) => setPortfolio({ ...portfolio, status: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        {/* Tombol Submit */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md"
        >
          {isEdit ? "Perbarui" : "Simpan"}
        </Button>
      </form>
    </div>
  );
};

export default PortfolioForm;