import React from "react";

const AdminDashboard = () => {
 return (
    <div className="flex h-screen">
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Card Statistik */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Portofolio</h2>
            <p className="text-3xl font-bold">15</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Lowongan</h2>
            <p className="text-3xl font-bold">5</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">Total Pelamar</h2>
            <p className="text-3xl font-bold">120</p>
          </div>
        </div>
      </main>
    </div>
  );
};
export default AdminDashboard;
