import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ role, requiredRoles, children }) => {
  if (!role || !requiredRoles.includes(role)) {
    return <Navigate to="/login" />;
  }
  return children;
};
