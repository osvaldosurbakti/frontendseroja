import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulir berhasil dikirim!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
      >
        Kirim
      </button>
    </form>
  );
};

export default ContactForm;
