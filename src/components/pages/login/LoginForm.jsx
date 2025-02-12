import React from "react";

const LoginForm = ({ onSubmit, formData, onInputChange, isLoading }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md mx-auto bg-white p-8 shadow-md rounded"
    >
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onInputChange}
          className="w-full border border-gray-300 rounded p-2"
          required
          minLength="6" // Validasi password minimal 6 karakter
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 disabled:bg-blue-400"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
