import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Home from "./pages/home";
import TentangKami from "./pages/tentangKami";
import HubungiKami from "./pages/hubungiKami";
import PortfolioPage from "./pages/portofolio";
import PortfolioDetailPage from "./pages/portofolio/[id]";
import Karir from "./pages/karir";
import JobDetail from "./pages/karir/[id]";
import ApplicationForm from "./pages/karir/apply";
import Login from "./pages/login";
import AdminDashboard from "./pages/admin/index";
import SuperadminDashboard from "./pages/superadmin/index";

function App() {
  // Dummy role untuk testing
  const userRole = localStorage.getItem("role"); // Simpan role ke localStorage setelah login (admin/superadmin)

  return (
    <Router>
      {userRole !== "admin" && userRole !== "superadmin" && <Navbar />}
      <div className="flex">
        {(userRole === "admin" || userRole === "superadmin") && (
          <Sidebar role={userRole} />
        )}
        <div className="flex-1">
          <Routes>
            {/* Halaman umum */}
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/hubungi-kami" element={<HubungiKami />} />
            <Route path="/portofolio" element={<PortfolioPage />} />
            <Route path="/portofolio/:id" element={<PortfolioDetailPage />} />
            <Route path="/karir" element={<Karir />} />
            <Route path="/karir/:id" element={<JobDetail />} />
            <Route path="/karir/apply/:id" element={<ApplicationForm />} />
            <Route path="/login" element={<Login />} />

            {/* Halaman admin dan superadmin */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/superadmin" element={<SuperadminDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
