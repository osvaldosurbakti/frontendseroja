import React from "react";
import Modal from "./Modal";
import { Button } from "./Button";

const StatusConfirmationModal = ({ isOpen, onClose, onConfirm, isLoading, jobTitle, currentStatus }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isLoading={isLoading}>
      <h2 className="text-xl font-bold mb-4">Ubah Status Lowongan</h2>
      <p className="text-gray-700 mb-6">
        Apakah Anda yakin ingin mengubah status lowongan <strong>{jobTitle}</strong> menjadi{" "}
        <strong>{currentStatus === "open" ? "Ditutup" : "Dibuka"}</strong>?
      </p>
      <div className="flex justify-end gap-4">
        <Button
          type="button" // Tambahkan type untuk menghindari perilaku default
          onClick={onClose}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Batal
        </Button>
        <Button
          type="button" // Tambahkan type untuk menghindari perilaku default
          onClick={onConfirm}
          disabled={isLoading}
          className={`px-4 py-2 rounded-md text-white ${
            isLoading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isLoading ? "Mengubah..." : "Ya, Ubah Status"}
        </Button>
      </div>
    </Modal>
  );
};

export default StatusConfirmationModal;