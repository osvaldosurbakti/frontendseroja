import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
