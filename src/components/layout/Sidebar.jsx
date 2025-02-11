import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ role }) => {
  const menuItems =
    role === "admin"
      ? [
          { label: "Dashboard", path: "/admin" },
          { label: "Profile", path: "/admin/profile" },
          { label: "Settings", path: "/admin/settings" },
        ]
      : [
          { label: "Dashboard", path: "/superadmin" },
          { label: "Manage Users", path: "/superadmin/manage-users" },
          { label: "Reports", path: "/superadmin/reports" },
        ];

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
    </aside>
  );
};

export default Sidebar;
