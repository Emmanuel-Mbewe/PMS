"use client";

// components/Navbar.js
import { useState } from "react";
import Login from "./Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setShowLoginForm(false); // Hide login form if visible
  };

  return (
    <nav className="bg-green-700 fixed w-full z-50">
      {/* Topmost Layer */}
      <div className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-12">
          <a href="/" className="text-2xl font-bold">PMS</a>
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <span>{user?.username || "User"}</span>
              <button
                onClick={handleLogout}
                className="bg-white text-green-900 font-semibold px-4 py-2 rounded hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowLoginForm(!showLoginForm)}
              className="bg-white text-green-900 font-semibold px-4 py-2 rounded hover:bg-gray-100"
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Navigation Links Layer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden md:flex justify-between items-center h-16">
          <a           href="/" className="text-zinc-50 hover:text-gray-700">Home</a>
          <a href="pastors" className="text-zinc-50 hover:text-gray-700">Pastors</a>
          <a href="churches" className="text-zinc-50 hover:text-gray-700">Churches</a>
          <a href="contact" className="text-zinc-50 hover:text-gray-700">Contact</a>
          <a href="about" className="text-zinc-50 hover:text-gray-700">About</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center justify-between h-16">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800">
          <div className="space-y-4 px-4 py-4">
            <a href="/" className="block text-zinc-50 hover:text-gray-700">Home</a>
            <a href="pastors" className="block text-zinc-50 hover:text-gray-700">Pastors</a>
            <a href="churches" className="block text-zinc-50 hover:text-gray-700">Churches</a>
            <a href="contact" className="block text-zinc-50 hover:text-gray-700">Contact</a>
            <a href="about" className="block text-zinc-50 hover:text-gray-700">About</a>
          </div>
        </div>
      )}

      {/* Login Form */}
      {showLoginForm && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded p-4 z-50">
          <Login
            setIsLoggedIn={setIsLoggedIn}
            setUser={setUser}
            setShowLoginForm={setShowLoginForm}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
