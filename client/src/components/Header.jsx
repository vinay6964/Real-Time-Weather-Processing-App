// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">Weather App</div>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/metro-cities" className="hover:underline">
            Metro Cities
          </Link>
        </nav>
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
