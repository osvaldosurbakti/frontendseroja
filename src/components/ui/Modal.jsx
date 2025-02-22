import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  children,
  isLoading = false,
  onConfirm, // Fungsi untuk konfirmasi
  confirmText = "Ya", // Teks tombol konfirmasi
  cancelText = "Tidak", // Teks tombol batal
  message = "Apakah Anda yakin?", // Pesan konfirmasi
  isConfirmModal = false, // Mode modal konfirmasi
}) => {
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
              <>
                {/* Tampilkan pesan konfirmasi jika isConfirmModal true */}
                {isConfirmModal && (
                  <div className="text-center">
                    <p className="text-lg text-gray-700 mb-6">{message}</p>
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={onConfirm}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                      >
                        {confirmText}
                      </button>
                      <button
                        onClick={onClose}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                      >
                        {cancelText}
                      </button>
                    </div>
                  </div>
                )}

                {/* Tampilkan children jika bukan modal konfirmasi */}
                {!isConfirmModal && children}
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;