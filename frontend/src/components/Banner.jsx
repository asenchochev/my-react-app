import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const navigate = useNavigate();

    const handleCreateProfile = () => {
        navigate('/login')
    }

  return (
    <section className="relative flex items-center justify-between p-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl shadow-2xl overflow-hidden">
      {/* ---- Left Side --- */}
      <div className="w-1/2 text-white space-y-5 z-10">
        <h1 className="text-6xl font-bold tracking-wide leading-tight">
          Запишете Час с 100% Доверени Доктори
        </h1>
        <p className="text-lg opacity-90 max-w-lg">
          Лесно и бързо записване при квалифицирани специалисти, на които можете да се доверите.
        </p>
        <button onClick={handleCreateProfile} className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold text-lg transition duration-300 ease-in-out hover:bg-blue-100 hover:shadow-xl transform hover:scale-105">
          Създайте профил
        </button>
      </div>

      {/* ---- Right Side --- */}
      <div className="relative w-1/2 overflow-hidden rounded-lg shadow-xl z-10">
        <img 
          src={assets.appointment_img} 
          alt="Appointment"
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-40"></div>
      </div>

      {/* ---- Decorative Elements --- */}
      <div className="absolute top-0 left-0 w-16 h-16 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
};

export default Banner;
