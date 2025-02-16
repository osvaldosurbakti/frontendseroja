import { motion } from "framer-motion";
import React from "react";

export const Card = ({ children, className }) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
    whileTap={{ scale: 0.98 }}
    className={`border rounded-2xl shadow-md p-4 bg-white transition ${className}`}
  >
    {children}
  </motion.div>
);

export const CardContent = ({ children }) => <div className="p-2">{children}</div>;