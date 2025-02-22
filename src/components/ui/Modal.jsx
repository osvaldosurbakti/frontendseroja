import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

const Modal = ({ isOpen, onClose, children, isLoading = false }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Fokus otomatis ke modal
  useEffect(() => {
    if (isOpen) modalRef.current?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm md:max-w-lg relative"
            onClick={(e) => e.stopPropagation()} // Supaya tidak tertutup saat klik di dalam modal
            tabIndex={-1}
            ref={modalRef}
          >
            {/* Tombol Close */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Tutup Modal"
            >
              <X size={20} />
            </button>

            {/* Loader saat modal loading */}
            {isLoading ? (
              <div className="flex justify-center items-center h-32">
                <Loader2 size={40} className="animate-spin text-gray-600" />
              </div>
            ) : (
              children
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
