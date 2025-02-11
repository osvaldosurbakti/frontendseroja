import React from "react";

const Sidebar = ({ role = "admin", items = [] }) => {
  const menuItems = role === "admin"
    ? ["Dashboard", "Profile", "Settings"]
    : ["Dashboard", "Manage Users", "Reports"];

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-lg font-bold mb-4">Dashboard</h2>
      <ul className="space-y-2">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <a href={`/${item.toLowerCase()}`} className="block py-2 px-3 hover:bg-gray-700 rounded">
              {item}
            </a>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold mb-2">Custom Links</h3>
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li key={idx}>
                <a href={item.href} className="block py-2 px-3 hover:bg-gray-700 rounded">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
