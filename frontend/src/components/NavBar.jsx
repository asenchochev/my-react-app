import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="Лого" />
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : ""}>
          <li className="py-1">НАЧАЛО</li>
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => isActive ? "text-blue-500" : ""}>
          <li className="py-1">ВСИЧКИ ДОКТОРИ</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : ""}>
          <li className="py-1">ЗА НАС</li>
        </NavLink>
      </ul>
      <div>
      <button onClick={() => navigate('/login')} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 uppercase tracking-wide">Създай профил</button>

      </div>
    </div>
  );
};

export default NavBar;
