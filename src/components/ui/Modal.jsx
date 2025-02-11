import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
        <button className="text-gray-600 hover:text-gray-900 float-right" onClick={onClose}>
          ×
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
