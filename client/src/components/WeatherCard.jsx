// src/components/WeatherCard.js
import React, { useState } from 'react';
import Modal from './CityModal';

const WeatherCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto my-4 transition-transform duration-300 transform hover:scale-105"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.city}</h2>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon || '01d'}.png`}
          alt={data.main}
          className="w-16 h-16 mx-auto mt-2"
        />
        <p className="text-lg text-gray-800">Temperature: {data.temp}°C</p>
        <p className="text-sm text-gray-600">Condition: {data.main}</p>
        <p className="text-sm text-gray-600">
          Last Updated: {new Date(data.date).toLocaleTimeString()}
        </p>
      </div>

      {/* Show Details Button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 focus:outline-none transition-all"
        onClick={openModal}
      >
        Show Details
      </button>

      {/* Modal for Details */}
      <Modal isOpen={isModalOpen} onClose={closeModal} data={data} />
    </div>
  );
};

export default WeatherCard;
