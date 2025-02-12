import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

// Public Pages
import Home from "./pages/home";
import TentangKami from "./pages/tentangKami";
import HubungiKami from "./pages/hubungiKami";
import PortfolioPage from "./pages/portofolio";
import PortfolioDetailPage from "./pages/portofolio/[id]";
import Karir from "./pages/karir";
import JobDetail from "./pages/karir/[id]";
import ApplicationForm from "./pages/karir/apply";
import Login from "./pages/login";

// Admin Pages
import AdminDashboard from "./pages/admin";
import PortfolioManagement from "./pages/admin/portofolio";
import JobManagement from "./pages/admin/jobs";
import WhatsappSettings from "./pages/admin/whatsapp";
import Statistics from "./pages/admin/statistics";
import Applicants from "./pages/admin/applicants";
import ApplicantDetail from "./pages/admin/[id]";

// Superadmin Pages
import SuperadminDashboard from "./pages/superadmin";
import ManageUsers from "./pages/superadmin/users";
import ActivityHistory from "./pages/superadmin/history";

// Protected Route Component
const ProtectedRoute = ({ role, requiredRoles, children, fallback }) => {
  if (!role || !requiredRoles.includes(role)) {
    return fallback || <Navigate to="/login" />;
  }
  return children;
};

function App() {
  const { userRole } = useAuth();

  // Routes for admin
  const adminRoutes = [
    { path: "/admin", component: <AdminDashboard /> },
    { path: "/admin/portofolio", component: <PortfolioManagement /> },
    { path: "/admin/jobs", component: <JobManagement /> },
    { path: "/admin/whatsapp", component: <WhatsappSettings /> },
    { path: "/admin/statistics", component: <Statistics /> },
    { path: "/admin/applicants", component: <Applicants /> },
    { path: "/admin/applicants/:id", component: <ApplicantDetail /> },
  ];

  // Routes for superadmin
  const superadminRoutes = [
    { path: "/superadmin", component: <SuperadminDashboard /> },
    { path: "/superadmin/users", component: <ManageUsers /> },
    { path: "/superadmin/history", component: <ActivityHistory /> },
  ];

  return (
    <Router>
      {/* Navbar is always visible */}
      <Navbar />

      <div className="flex">
        {/* Sidebar for admin and superadmin */}
        {(userRole === "admin" || userRole === "superadmin") && (
          <Sidebar role={userRole} />
        )}

        <div className="flex-1 p-4">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/hubungi-kami" element={<HubungiKami />} />
            <Route path="/portofolio" element={<PortfolioPage />} />
            <Route path="/portofolio/:id" element={<PortfolioDetailPage />} />
            <Route path="/karir" element={<Karir />} />
            <Route path="/karir/:id" element={<JobDetail />} />
            <Route path="/karir/apply/:id" element={<ApplicationForm />} />
            <Route
              path="/login"
              element={
                userRole === "admin" ? (
                  <Navigate to="/admin" />
                ) : userRole === "superadmin" ? (
                  <Navigate to="/superadmin" />
                ) : (
                  <Login />
                )
              }
            />

            {/* Admin Routes */}
            {adminRoutes.map(({ path, component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
                    {component}
                  </ProtectedRoute>
                }
              />
            ))}

            {/* Superadmin Routes */}
            {superadminRoutes.map(({ path, component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute role={userRole} requiredRoles={["superadmin"]}>
                    {component}
                  </ProtectedRoute>
                }
              />
            ))}

            {/* Redirect to home for undefined routes */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
