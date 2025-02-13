import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Ikon untuk tombol buka/tutup sidebar

const Sidebar = ({ role, isSidebarOpen, onToggleSidebar }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!role) {
    navigate("/login");
    return null;
  }

  const adminMenu = [
    { label: "Dashboard", path: "/admin" },
    { label: "Manajemen Portofolio", path: "/admin/portofolio" },
    { label: "Manajemen Lowongan", path: "/admin/jobs" },
    { label: "Pengaturan WhatsApp", path: "/admin/whatsapp" },
    { label: "Laporan Statistik", path: "/admin/statistics" },
    { label: "Daftar Pelamar", path: "/admin/applicants" },
  ];

  const superadminMenu = [
    { label: "Dashboard Superadmin", path: "/superadmin" },
    { label: "Manajemen Pengguna", path: "/superadmin/users" },
    { label: "Riwayat Aktivitas", path: "/superadmin/history" },
  ];

  const menuItems = role === "superadmin" ? [...adminMenu, ...superadminMenu] : adminMenu;

  return (
    <div className="fix h-full">
      <aside
  className={`bg-gray-800 text-white h-full p-4 z-40 transition-all duration-300 flex flex-col ${
    isSidebarOpen ? "w-64" : "w-16"
  }`}
  style={{
    position: "fixed",
    top: "4rem", // Sidebar mulai dari bawah navbar
    height: "calc(100vh - 4rem)", // Sidebar mengikuti tinggi layar
    overflowY: "auto", // Memungkinkan scrolling
  }}
>
  <div className="flex justify-between items-center mb-6">
    {isSidebarOpen && (
      <h2 className="text-lg font-bold">
        Dashboard {role.charAt(0).toUpperCase() + role.slice(1)}
      </h2>
    )}

    <button
      onClick={onToggleSidebar}
      className="text-white bg-gray-700 rounded p-1 hover:bg-gray-600"
    >
      {isSidebarOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
    </button>
  </div>

  <ul className="space-y-4">
    {menuItems.map((item, idx) => (
      <li key={idx}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `block py-2 px-3 rounded hover:bg-gray-700 ${
              isActive ? "bg-gray-700" : ""
            } ${isSidebarOpen ? "text-white" : "text-gray-300"}`
          }
          title={item.label}
        >
          {isSidebarOpen ? item.label : item.label[0]}
        </NavLink>
      </li>
    ))}
  </ul>

  <button
    onClick={handleLogout}
    className={`mt-auto bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full ${
      isSidebarOpen ? "block" : "hidden"
    }`}
  >
    Logout
  </button>
</aside>


      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={onToggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
