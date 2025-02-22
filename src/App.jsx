import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import { routes } from "./routes";

const App = () => {
  const { userRole } = useAuth(); // Ambil peran pengguna dari konteks
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Fungsi untuk toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
      <ScrollToTop /> {/* Pastikan halaman selalu scroll ke atas saat berpindah route */}
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden pt-16">
          {/* Sidebar (hanya untuk admin dan superadmin) */}
          {userRole && (userRole === "admin" || userRole === "superadmin") && (
            <aside
              className={`bg-gray-800 text-white transition-all duration-300 ease-in-out fixed top-16 left-0 h-[calc(100vh-4rem)] ${
                isSidebarOpen ? "w-64" : "w-16"
              }`}
            >
              <Sidebar
                role={userRole}
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={toggleSidebar}
              />
            </aside>
          )}

          {/* Main Area */}
          <main
            className={`flex-1 bg-gray-100 p-6 overflow-y-auto transition-all duration-300 ease-in-out ${
              userRole && (userRole === "admin" || userRole === "superadmin")
                ? isSidebarOpen
                  ? "ml-64"
                  : "ml-16"
                : "ml-0"
            }`}
          >
            <Routes>
              {routes(userRole).map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>
          </main>
        </div>

        {/* Footer (tidak ditampilkan untuk admin dan superadmin) */}
        {!(userRole === "admin" || userRole === "superadmin") && (
          <Footer className="mt-auto" />
        )}
      </div>
    </Router>
  );
};

export default App;