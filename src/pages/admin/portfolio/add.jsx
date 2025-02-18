import React, { useState } from "react";

const AddPortfolio = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(""); // Menambahkan kategori
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("active"); // Default status "active"
  const [imageUrl, setImageUrl] = useState(""); // Menambahkan image URL
  const [selectedImage, setSelectedImage] = useState(null); // Untuk menyimpan gambar yang dipilih

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedImage(URL.createObjectURL(file)); // Menampilkan preview gambar
      setImageUrl(file); // Menyimpan file gambar untuk dikirimkan nanti
    } else {
      alert("Please select a valid image file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi inputan
    if (!title || !category || !description || !imageUrl) {
      alert("All fields are required.");
      return;
    }

    // Simulasi pengiriman data ke database
    console.log("Portfolio Added:", { title, category, description, imageUrl, status });

    // Reset form setelah submit
    setTitle("");
    setCategory("");
    setDescription("");
    setStatus("active");
    setImageUrl("");
    setSelectedImage(null);

    alert("Portfolio added successfully!");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Tambah Portfolio</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Judul Portfolio"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Kategori"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <textarea
            placeholder="Deskripsi"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-2">Upload Gambar</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
          />
          {selectedImage && (
            <div className="mt-2">
              <img
                src={selectedImage}
                alt="Preview"
                className="max-w-full h-48 object-cover"
              />
            </div>
          )}
        </div>

        <div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded w-full">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default AddPortfolio;
