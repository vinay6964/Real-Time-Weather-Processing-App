import React, { useState } from 'react';
import Modal from 'react-modal';

// Set the app root for accessibility
Modal.setAppElement('#root');

const WeatherCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div
        className="bg-white shadow-lg rounded-lg p-6 max-w-sm mx-auto my-4 transition-transform duration-300 transform hover:scale-105"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.city}</h2>
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
      </div>

      {/* React Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel={`${data.city} Weather Details`}
        className="modal-content bg-white rounded-lg p-8 shadow-2xl max-w-lg mx-auto relative"
        overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
        closeTimeoutMS={300} // Smooth closing animation
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={closeModal}
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
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">{data.city} Weather Details</h2>
          <div className="text-lg space-y-2 text-left">
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
      </Modal>
    </>
  );
};

export default WeatherCard;
