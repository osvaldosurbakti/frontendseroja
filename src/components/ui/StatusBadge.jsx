import React from "react";
import { CheckCircle, XCircle } from "lucide-react"; // Import ikon dari lucide-react

/**
 * Komponen StatusBadge untuk menampilkan status dengan ikon dan styling yang sesuai.
 *
 * @param {Object} props - Props untuk komponen StatusBadge.
 * @param {string} props.status - Status yang ditampilkan ("open" atau "closed").
 * @param {Function} props.onClick - Fungsi yang dipanggil saat tombol diklik.
 * @param {string} [props.className] - Kelas CSS tambahan untuk kustomisasi.
 * @param {boolean} [props.disabled] - Menonaktifkan tombol jika true.
 * @returns {JSX.Element} Komponen StatusBadge.
 */
const StatusBadge = ({ status, onClick, className = "", disabled = false, ...rest }) => {
  // Tentukan ikon dan teks berdasarkan status
  const icon = status === "open" ? <CheckCircle size={14} /> : <XCircle size={14} />;
  const text = status === "open" ? "Dibuka" : "Ditutup";

  return (
    <button
      type="button" // Tambahkan type untuk menghindari perilaku default tombol
      onClick={onClick}
      disabled={disabled}
      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
        status === "open"
          ? "bg-green-100 text-green-700 hover:bg-green-200"
          : "bg-red-100 text-red-700 hover:bg-red-200"
      } ${
        disabled ? "opacity-50 cursor-not-allowed" : "" // Styling untuk keadaan disabled
      } ${className}`}
      {...rest} // Menangani props tambahan
    >
      {icon} {/* Tampilkan ikon */}
      {text} {/* Tampilkan teks status */}
    </button>
  );
};

export default StatusBadge;