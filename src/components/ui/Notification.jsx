import React, { useEffect } from "react";

export const NotificationType = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
};

const Notification = ({ type, message, onClose }) => {
  useEffect(() => {
    // Auto-close notification after 3 seconds
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getNotificationStyle = () => {
    switch (type) {
      case NotificationType.SUCCESS:
        return "bg-green-100 border-green-500 text-green-700";
      case NotificationType.ERROR:
        return "bg-red-100 border-red-500 text-red-700";
      case NotificationType.INFO:
        return "bg-blue-100 border-blue-500 text-blue-700";
      default:
        return "bg-gray-100 border-gray-500 text-gray-700";
    }
  };

  return (
    <div className={`fixed top-4 right-4 border-l-4 p-4 rounded-lg shadow-md ${getNotificationStyle()}`}>
      <div className="flex items-center">
        <span className="mr-2">{message}</span>
        <button
          onClick={onClose}
          className="ml-auto text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notification;