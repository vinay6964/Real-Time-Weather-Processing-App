import React, { useState } from 'react';

const SearchBar = () => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
     e.preventDefault();
     
  };

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring text-black"
      />
      <button
        onClick={(e) => {
         handleSearch(e)
        }}
        className="ml-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
