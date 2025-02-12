// pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Gunakan context autentikasi
import LoginForm from "../../components/pages/login/LoginForm"; // Sesuaikan path-nya

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth(); // Fungsi login dari AuthContext
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userRole = await login(formData.email, formData.password); // Panggil fungsi login dari context
      if (userRole) {
        // Redirect berdasarkan role
        navigate(userRole === "admin" ? "/admin" : "/superadmin");
      }
    } catch (error) {
      alert(error.message || "Email atau password salah!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <LoginForm
        onSubmit={handleLogin}
        formData={formData}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default Login;
