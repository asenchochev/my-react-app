import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-14 mt-24">
      <div className="container mx-auto px-6 md:px-16">
        {/* Top Section: Logo and About */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-16 mb-12">
          {/* Left Section */}
          <div className="flex flex-col sm:w-2/5">
            <img src={assets.logo} alt="Hospital Logo" className="w-40 mb-6" />
            <p className="text-base sm:text-lg text-gray-600 opacity-90 font-sans">
              Ние сме ангажирани да предоставяме високи стандарти на медицинска помощ, използвайки съвременни технологии и квалифицирани специалисти, за да се грижим за вашето здраве.
            </p>
          </div>

          {/* Company Links Section */}
          <div className="sm:w-1/3 mt-8 sm:mt-0">
            <p className="font-semibold text-lg text-gray-800 mb-4">КОМПАНИЯ</p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 opacity-80 font-sans">
              <li><a href="/" className="hover:text-blue-600">Начало</a></li>
              <li><a href="/about" className="hover:text-blue-600">За нас</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Свържете се с нас</a></li>
              <li><a href="/privacy" className="hover:text-blue-600">Политика за конфиденциалност</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="sm:w-1/3 mt-8 sm:mt-0">
            <p className="font-semibold text-lg text-gray-800 mb-4">СВЪРЖЕТЕ СЕ С НАС</p>
            <ul className="space-y-3 text-sm sm:text-base text-gray-600 opacity-80 font-sans">
              <li>Телефон: <a href="tel:+359123456789" className="hover:text-blue-600">+359 123 456 789</a></li>
              <li>Email: <a href="mailto:contact@hospital.com" className="hover:text-blue-600">contact@hospital.com</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-6 mt-12">
          <p className="text-center text-sm text-gray-500 font-sans">
            &copy; {new Date().getFullYear()} Болница [DoctorBooking]. Всички права запазени.
            <br />
            Дизайн от <a href="https://www.yourwebsite.com" className="text-blue-600 hover:underline">Асен Чочев</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
