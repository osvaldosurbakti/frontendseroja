import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import portfolioItems from "../../../data/dummyPortofolio"; // Import dummy data

const EditPortfolio = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Create the navigate function
  
  const [portfolio, setPortfolio] = useState({
    title: "",
    category: "",
    description: "",
    imageUrl: "",
    status: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // State for the uploaded image
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate fetching portfolio data based on ID
    const currentPortfolio = portfolioItems.find((item) => item._id === id);
    if (currentPortfolio) {
      setPortfolio({
        title: currentPortfolio.title,
        category: currentPortfolio.category,
        description: currentPortfolio.description,
        imageUrl: currentPortfolio.imageUrl,
        status: currentPortfolio.status,
      });
      setLoading(false);
    } else {
      setError("Portfolio not found.");
      setLoading(false);
    }
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/") && file.size <= 5000000) { // Limit file size to 5MB
      setSelectedImage(URL.createObjectURL(file)); // Display image preview
      setPortfolio({ ...portfolio, imageUrl: file });
    } else {
      setError("Please select a valid image file (less than 5MB).");
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    setPortfolio({ ...portfolio, imageUrl: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple form validation
    if (!portfolio.title || !portfolio.category || !portfolio.description) {
      setError("All fields are required.");
      setIsSubmitting(false);
      return;
    }

    setError(null);  // Clear previous errors if any

    console.log("Portfolio Updated:", { id, ...portfolio });
    // Simulate a server request
    setTimeout(() => {
      alert("Portfolio updated successfully!");
      navigate("/admin/portfolio"); // Use navigate for redirection
      setIsSubmitting(false);
    }, 2000);  // Simulate a delay for updating the portfolio
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Portfolio</h1>
      
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      
      {!loading && !error && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Judul Portfolio"
              value={portfolio.title}
              onChange={(e) => setPortfolio({ ...portfolio, title: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Kategori"
              value={portfolio.category}
              onChange={(e) => setPortfolio({ ...portfolio, category: e.target.value })}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <textarea
              placeholder="Deskripsi"
              value={portfolio.description}
              onChange={(e) => setPortfolio({ ...portfolio, description: e.target.value })}
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
                <button
                  type="button"
                  onClick={handleDeleteImage}
                  className="text-red-500 mt-2"
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
                  className="max-w-full h-48 object-cover"
                />
              </div>
            )}
          </div>
          <div>
            <select
              value={portfolio.status}
              onChange={(e) => setPortfolio({ ...portfolio, status: e.target.value })}
              className="w-full p-2 border rounded"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button
            type="submit"
            className={`px-4 py-2 rounded w-full ${isSubmitting ? "bg-gray-500" : "bg-green-500"}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Perbarui"}
          </button>
        </form>
      )}
    </div>
  );
};

export default EditPortfolio;
