export const Button = ({ onClick, children, variant = "primary", className, loading, icon }) => {
  const styles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-300 hover:bg-gray-400 text-black",
    destructive: "bg-red-500 hover:bg-red-600 text-white",
    outline: "border border-gray-500 text-gray-700 hover:bg-gray-100",
    success: "bg-green-500 hover:bg-green-600 text-white",
  };

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`px-4 py-2 rounded-lg transition font-medium flex items-center gap-2 ${styles[variant]} ${className}`}
    >
      {loading ? <Loader2 className="animate-spin" size={18} /> : icon}
      {children}
    </button>
  );
};