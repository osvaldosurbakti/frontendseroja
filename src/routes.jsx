import React from "react";
import { Navigate } from "react-router-dom";
import { ProtectedRoute } from "./context/ProtectedRoute";

// Public pages
import Home from "./pages/home";
import TentangKami from "./pages/tentangKami";
import HubungiKami from "./pages/hubungiKami";
import PortfolioPage from "./pages/portofolio";
import PortfolioDetailPage from "./pages/portofolio/[id]";
import Karir from "./pages/karir";
import JobDetailPublic from "./pages/karir/[id]"; // JobDetail untuk publik
import ApplicationForm from "./pages/karir/apply";
import Login from "./pages/login";

// Admin pages
import AdminDashboard from "./pages/admin";
import WhatsappSettings from "./pages/admin/whatsapp";
import Statistics from "./pages/admin/statistics";
import Applicants from "./pages/admin/applicants/applicants";
import ApplicantDetail from "./pages/admin/applicants/[id]";
import JobManagement from "./pages/admin/jobs";
import AddJob from "./pages/admin/jobs/add";
import EditJob from "./pages/admin/jobs/edit";
import JobDetailAdmin from "./pages/admin/jobs/[id]"; // JobDetail untuk admin
import PortfolioList from "./pages/admin/portfolio/index";
import PortfolioDetail from "./pages/admin/portfolio/[id]";
import AddPortfolio from "./pages/admin/portfolio/add";
import EditPortfolio from "./pages/admin/portfolio/edit";

// Superadmin pages
import SuperadminDashboard from "./pages/superadmin";
import ManageUsers from "./pages/superadmin/users";
import ActivityHistory from "./pages/superadmin/history";

export const routes = (userRole) => [
  // Public routes
  { path: "/", element: <Home /> },
  { path: "/tentang-kami", element: <TentangKami /> },
  { path: "/hubungi-kami", element: <HubungiKami /> },
  { path: "/portofolio", element: <PortfolioPage /> },
  { path: "/portofolio/:id", element: <PortfolioDetailPage /> },
  { path: "/karir", element: <Karir /> },
  { path: "/karir/:id", element: <JobDetailPublic /> }, // JobDetail untuk publik
  { path: "/karir/apply/:id", element: <ApplicationForm /> },
  { path: "/login", element: <Login /> },

  // Admin routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <AdminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/statistics",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <Statistics />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/whatsapp",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <WhatsappSettings />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/applicants",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <Applicants />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/applicants/:id",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <ApplicantDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <JobManagement />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/:id",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <JobDetailAdmin /> {/* JobDetail untuk admin */}
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/add",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <AddJob />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/jobs/edit/:id",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <EditJob />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/portfolio",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <PortfolioList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/portfolio/:id",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <PortfolioDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/portfolio/add",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <AddPortfolio />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/portfolio/edit/:id",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <EditPortfolio />
      </ProtectedRoute>
    ),
  },

  // Superadmin routes
  {
    path: "/superadmin",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["superadmin"]}>
        <SuperadminDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/superadmin/users",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["superadmin"]}>
        <ManageUsers />
      </ProtectedRoute>
    ),
  },
  {
    path: "/superadmin/history",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["superadmin"]}>
        <ActivityHistory />
      </ProtectedRoute>
    ),
  },

  // Fallback route (redirect to home if no route matches)
  { path: "*", element: <Navigate to="/" /> },
];