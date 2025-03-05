import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="Лого" />
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : ""}>
          <li>Начало</li>
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => isActive ? "text-blue-500" : ""}>
          <li>Всички Доктори</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : ""}>
          <li>За Нас</li>
        </NavLink>
      </ul>
      <div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Създай профил</button>
      </div>
    </div>
  );
};

export default NavBar;
