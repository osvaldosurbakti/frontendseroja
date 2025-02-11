import React from "react";

// Import gambar lokal
import kons3 from "../../../assets/images/kons1.jpeg";
import kons2 from "../../../assets/images/kons2.jpeg";
import kons1 from "../../../assets/images/kons3.jpeg";

const PortfolioPreview = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Proyek A",
      description: "Deskripsi singkat proyek A",
      image: kons1, // Gunakan variabel hasil import
    },
    {
      id: 2,
      title: "Proyek B",
      description: "Deskripsi singkat proyek B",
      image: kons2, // Gunakan variabel hasil import
    },
    {
      id: 3,
      title: "Proyek C",
      description: "Deskripsi singkat proyek C",
      image: kons3, // Gunakan variabel hasil import
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Portofolio Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
