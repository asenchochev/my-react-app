import React from 'react';
import { assets } from '../assets/assets';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-16 bg-gray-100">
      {/* Изображението на лекаря */}
      <div className="w-96 h-96 flex justify-center items-center">
        <img
          src={assets.notfound} // Увери се, че пътят е правилен
          alt="Sad Doctor 3D"
          className="w-full h-full object-contain transform transition-all hover:rotate-3 hover:scale-110 duration-500 drop-shadow-lg"
        />
      </div>
      
      {/* Текстовото съобщение */}
      <div className="max-w-lg mt-8 bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-8xl font-extrabold text-blue-700">404</h1>
        <h2 className="text-4xl text-gray-700 mt-4">Страницата не беше намерена</h2>
        <p className="text-lg text-gray-600 mt-6">
          Извиняваме се, но страницата, която търсите, не съществува или е била премахната.
        </p>
        <div className="mt-8">
          <a
            href="/"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Върни се на началната страница
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;