import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = React.useState(false);
  const [token, setToken] = React.useState(localStorage.getItem("token"));  

  const toggleMenu = () => {
    setShowMenu(!showMenu);  
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img className="w-44 cursor-pointer" src={assets.logo} alt="Лого" />
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : ""}>
          <li className="py-1">НАЧАЛО</li>
        </NavLink>
        <NavLink to="/allDoctors" className={({ isActive }) => isActive ? "text-blue-500" : ""}>
          <li className="py-1">ВСИЧКИ ДОКТОРИ</li>
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-500" : ""}>
          <li className="py-1">ЗА НАС</li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-5">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative" onClick={toggleMenu}>
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="Профил" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Икона за меню" />
            {showMenu && (
              <div className="absolute right-0 mt-2 p-2 bg-white shadow-lg rounded-md w-40">
                <ul>
                  <li onClick={() => navigate('MyProfile')} className="py-1 px-2 hover:bg-gray-200 cursor-pointer">Моят Профил</li>
                  <li onClick={() => navigate('MyAppointment')} className="py-1 px-2 hover:bg-gray-200 cursor-pointer">Моите Резервации</li>
                  <li onClick={() => setToken(false)} className="py-1 px-2 hover:bg-gray-200 cursor-pointer">Изход</li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}  
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 uppercase tracking-wide"
          >
            Създай профил
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
