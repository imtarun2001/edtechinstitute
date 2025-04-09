import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white text-gray-800 p-4 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">Oops! Page not found.</h2>
      <p className="text-gray-600 max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300"
      >
        <FaArrowLeft /> Go Home
      </button>

      {/* Optional image or icon */}
      <img
        src="https://illustrations.popsy.co/gray/web-error.svg"
        alt="404 illustration"
        className="w-full max-w-md mt-10"
      />
    </div>
  );
}