import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex justify-center items-center">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-5xl font-extrabold text-blue-700">404</h1>
        <h2 className="text-3xl text-gray-700 mt-2">Страницата не беше намерена</h2>
        <p className="text-gray-500 mt-4">
          Извиняваме се, но страницата, която търсите, не съществува или е била премахната.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            Върни се на началната страница
          </a>
        </div>
      </div>
      <div className="absolute bottom-4 text-center text-gray-500 text-xs">
        <p>&copy; 2025 МедиЦентър - Всички права запазени</p>
      </div>
    </div>
  );
};

export default NotFound;
