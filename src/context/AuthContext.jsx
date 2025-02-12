import React, { createContext, useContext, useState, useEffect } from "react";
import dummyUsers from "../data/dummyUsers"; // Pastikan path ini sesuai dengan lokasi file dummyUsers

// Membuat context
const AuthContext = createContext();

// Provider untuk AuthContext
export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState("guest"); // Default role

  // Ambil role dari localStorage saat pertama kali aplikasi dijalankan
  useEffect(() => {
    const savedRole = localStorage.getItem("role");
    if (savedRole) {
      setUserRole(savedRole);
    }
  }, []);

  // Fungsi untuk login menggunakan data dari dummyUsers
  const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Cek kecocokan email dan password di dummyUsers
      const user = dummyUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        setUserRole(user.role);
        localStorage.setItem("role", user.role); // Simpan role di localStorage
        resolve(user.role); // Return role
      } else {
        reject(new Error("Email atau password salah!"));
      }
    });
  };

  // Fungsi untuk logout
  const logout = () => {
    setUserRole("guest");
    localStorage.removeItem("role"); // Hapus role dari localStorage
  };

  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk menggunakan AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
