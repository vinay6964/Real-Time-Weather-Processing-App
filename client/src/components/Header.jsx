// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* App Logo/Title */}
        <div className="text-3xl font-bold tracking-wide">
          Weather App
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden sm:flex">
          <Link
            to="/"
            className="text-white font-semibold hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/metro-cities"
            className="text-white font-semibold hover:text-blue-300 transition duration-300"
          >
            Metro Cities
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="flex-grow max-w-md mx-4">
          <SearchBar />
        </div>

        {/* Mobile Menu Toggle (optional, if you want mobile nav) */}
        <div className="block sm:hidden">
          <button className="text-white focus:outline-none">
            {/* You can add a hamburger icon here for mobile navigation */}
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
