import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Impor useAuth


const Sidebar = ({ role }) => {
  const navigate = useNavigate();
  const { logout } = useAuth(); // Gunakan logout dari AuthContext

  const handleLogout = () => {
    logout(); // Panggil fungsi logout dari AuthContext
    navigate("/"); // Redirect ke halaman home setelah logout
  };

  // Menu untuk admin
  const adminMenu = [
    { label: "Dashboard", path: "/admin" },
    { label: "Manajemen Portofolio", path: "/admin/portofolio" },
    { label: "Manajemen Lowongan", path: "/admin/jobs" },
    { label: "Pengaturan WhatsApp", path: "/admin/whatsapp" },
    { label: "Laporan Statistik", path: "/admin/statistics" },
    { label: "Daftar Pelamar", path: "/admin/applicants" },
  ];

  // Menu tambahan untuk superadmin
  const superadminMenu = [
    { label: "Dashboard Superadmin", path: "/superadmin" },
    { label: "Manajemen Pengguna", path: "/superadmin/users" },
    { label: "Riwayat Aktivitas", path: "/superadmin/history" },
  ];

  // Gabungkan menu jika user adalah superadmin
  const menuItems = role === "superadmin" ? [...adminMenu, ...superadminMenu] : adminMenu;

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-lg font-bold mb-6">
        Dashboard {role.charAt(0).toUpperCase() + role.slice(1)}
      </h2>
      <ul className="space-y-4">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block py-2 px-3 rounded hover:bg-gray-700 ${
                  isActive ? "bg-gray-700" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
      >
        Logout
      </button>
      </aside>
  );
};

export default Sidebar;
