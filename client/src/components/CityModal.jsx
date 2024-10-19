// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null; // Do not render if modal is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">{data.city} Weather Details</h2>
        <div className="text-lg">
          <p><strong>Temperature:</strong> {data.temp}°C</p>
          <p><strong>Feels Like:</strong> {data.feels_like}°C</p>
          <p><strong>Min Temp:</strong> {data.min_temp}°C</p>
          <p><strong>Max Temp:</strong> {data.max_temp}°C</p>
          <p><strong>Average Temp:</strong> {data.average_temp}°C</p>
          <p><strong>Dominant Condition:</strong> {data.dominant_condition}</p>
          <p><strong>Condition:</strong> {data.main}</p>
          <p><strong>Last Updated:</strong> {new Date(data.date).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
