import React from "react";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="text-gray-600 text-sm">
      {items.map((item, idx) => (
        <span key={idx}>
          <a href={item.href} className="hover:underline">
            {item.label}
          </a>
          {idx < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
