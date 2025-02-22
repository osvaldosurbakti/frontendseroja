import React from "react";
import Modal from "./Modal";
import { Button } from "./Button";

const DeleteConfirmationModal = ({ isOpen, onClose, onConfirm, isLoading, jobTitle }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isLoading={isLoading}>
      <h2 className="text-xl font-bold mb-4">Hapus Lowongan</h2>
      <p className="text-gray-700 mb-6">
        Apakah Anda yakin ingin menghapus <strong>{jobTitle}</strong>?
      </p>
      <div className="flex justify-end gap-4">
        <Button
          onClick={onClose}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
        >
          Batal
        </Button>
        <Button
          onClick={onConfirm}
          disabled={isLoading}
          className={`px-4 py-2 rounded-md text-white ${
            isLoading ? "bg-red-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
          }`}
        >
          {isLoading ? "Menghapus..." : "Hapus"}
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteConfirmationModal;