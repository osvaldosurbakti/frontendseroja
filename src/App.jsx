import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop"; // Import komponen
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import { routes } from "./routes";


const App = () => {
  const { userRole } = useAuth(); // Fetch user role from context
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Router>
            <ScrollToTop /> {/* Tambahkan di sini */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          {userRole && (userRole === "admin" || userRole === "superadmin") && (
            <aside
              className={`bg-gray-800 text-white p-4 z-40 transition-all duration-300 ${
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

          <main className="flex-1 bg-gray-100 p-6">
            <Routes>
              {routes(userRole).map(({ path, element }, index) => (
                <Route key={index} path={path} element={element} />
              ))}
            </Routes>

            {/* Footer tidak ditampilkan jika user adalah admin atau superadmin */}
            {!(userRole === "admin" || userRole === "superadmin") && <Footer />}
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
