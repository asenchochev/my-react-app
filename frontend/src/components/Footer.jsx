import React from 'react';
import { Hospital } from 'lucide-react';
import { Link } from 'react-router-dom';  // Импортиране на Link от React Router

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-50 to-white text-gray-800 py-16 mt-24 shadow-lg">
      <div className="container mx-auto px-6 md:px-16 max-w-7xl">
        
        <div className="flex flex-col sm:flex-row justify-between items-start gap-16 mb-12">
          
          <div className="flex flex-col sm:w-2/5 space-y-4">
            <h1 className="text-5xl font-extrabold text-gray-900 flex items-center gap-3">
              <Hospital className="w-12 h-12 text-blue-600" /> MediCenter
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed opacity-90">
              Ние сме ангажирани да предоставяме високи стандарти на медицинска помощ, използвайки съвременни технологии и квалифицирани специалисти, за да се грижим за вашето здраве.
            </p>
          </div>

          <div className="sm:w-1/3">
            <p className="font-semibold text-lg text-gray-900 mb-4">КОМПАНИЯ</p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700 opacity-80">
              {/* Използваме Link компонента за вътрешни линкове */}
              <li>
                <Link to="/" className="hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
                  Начало
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
                  За нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
                  Свържете се с нас
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105">
                  Политика за конфиденциалност
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:w-1/3">
            <p className="font-semibold text-lg text-gray-900 mb-4">СВЪРЖЕТЕ СЕ С НАС</p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700 opacity-80">
              <li>Телефон: <a href="tel:+359123456789" className="hover:text-blue-600 transition-all duration-300">+359 123 456 789</a></li>
              <li>Email: <a href="mailto:contact@hospital.com" className="hover:text-blue-600 transition-all duration-300">contact@hospital.com</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-300 pt-6 mt-12 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Болница MediCenter. Всички права запазени.
            <br />
            Дизайн от <a href="https://github.com/asenchochev" className="text-blue-600 hover:underline transition duration-300 ease-in-out">Асен Чочев</a>
          </p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
