"use client";

// components/Navbar.js
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-700 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-black font-bold text-2xl">
              PMS
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-zinc-50 hover:text-gray-700">Home</a>
            <a href="pastors" className="text-zinc-50 hover:text-gray-700">Pastors</a>
            <a href="churches" className="text-zinc-50 hover:text-gray-700">Churches</a>
            <a href="contact" className="text-zinc-50 hover:text-gray-700">Contact</a>
            <a href="about" className="text-zinc-50 hover:text-gray-700">About</a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
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
    </nav>
  );
};

export default Navbar;
