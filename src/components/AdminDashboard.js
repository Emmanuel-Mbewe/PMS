import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-700 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pastor Management System - Admin Dashboard</h1>
          <button
            onClick={() => alert("Logged out")}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-6">
        {/* Navigation Panel */}
        <nav className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => alert("Add Pastor")}
            className="bg-white shadow rounded p-4 hover:shadow-lg flex items-center justify-center text-green-700 font-semibold"
          >
            Add Pastor
          </button>
          <button
            onClick={() => alert("Add Church")}
            className="bg-white shadow rounded p-4 hover:shadow-lg flex items-center justify-center text-green-700 font-semibold"
          >
            Add Church
          </button>
          <button
            onClick={() => alert("View Pastors")}
            className="bg-white shadow rounded p-4 hover:shadow-lg flex items-center justify-center text-green-700 font-semibold"
          >
            View Pastors
          </button>
          <button
            onClick={() => alert("View Churches")}
            className="bg-white shadow rounded p-4 hover:shadow-lg flex items-center justify-center text-green-700 font-semibold"
          >
            View Churches
          </button>
          <button
            onClick={() => alert("Generate Reports")}
            className="bg-white shadow rounded p-4 hover:shadow-lg flex items-center justify-center text-green-700 font-semibold"
          >
            Generate Reports
          </button>
          <button
            onClick={() => alert("Manage Users")}
            className="bg-white shadow rounded p-4 hover:shadow-lg flex items-center justify-center text-green-700 font-semibold"
          >
            Manage Users
          </button>
        </nav>

        {/* Content Section */}
        <div className="bg-white p-6 shadow rounded">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
          <p className="text-gray-600">
            Welcome to the admin dashboard! Here, you can manage pastors, churches, users, and
            generate detailed reports. Use the navigation buttons above to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
