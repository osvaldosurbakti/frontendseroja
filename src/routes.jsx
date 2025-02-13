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
import JobDetail from "./pages/karir/[id]";
import ApplicationForm from "./pages/karir/apply";
import Login from "./pages/login";

// Admin pages
import AdminDashboard from "./pages/admin";
import PortfolioManagement from "./pages/admin/portofolio";
import JobManagement from "./pages/admin/jobs";
import WhatsappSettings from "./pages/admin/whatsapp";
import Statistics from "./pages/admin/statistics";
import Applicants from "./pages/admin/applicants";
import ApplicantDetail from "./pages/admin/[id]";

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
  { path: "/karir/:id", element: <JobDetail /> },
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
    path: "/admin/portofolio",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <PortfolioManagement />
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
    path: "/admin/whatsapp",
    element: (
      <ProtectedRoute role={userRole} requiredRoles={["admin", "superadmin"]}>
        <WhatsappSettings />
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
  
];
