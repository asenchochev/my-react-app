import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

const SpecialityItem = () => {
  return (
    <div id="speciality" className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
  <h1 className="text-3xl font-semibold text-gray-800 sm:text-4xl leading-snug">
    Търси по специалност и открий доверени лекари
  </h1>
  <p className="mt-3 text-base text-gray-500 sm:text-lg max-w-xl mx-auto leading-relaxed">
    Разгледайте нашия списък с опитни лекари и насрочете своя час с лекота.
  </p>
</div>


      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0,0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="group bg-white p-5 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-blue-100 rounded-full transition-all duration-300 group-hover:bg-blue-200">
              <img src={item.image} alt={item.speciality} className="w-12 h-12" />
            </div>
            <span className="mt-4 text-lg font-medium text-gray-700 group-hover:text-blue-600">
              {item.speciality}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityItem;
