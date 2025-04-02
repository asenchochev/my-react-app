import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';

const Navbar = () => {
  const { adminToken, setAdminToken } = useContext(AdminContext);
  const { dToken, setDToken } = useContext(DoctorContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    adminToken && setAdminToken('');
    adminToken && localStorage.removeItem('adminToken');
    dToken && setDToken('');
    dToken && localStorage.removeItem('dToken');
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5 shadow-lg flex items-center justify-between">
      {/* Left Side - Logo & Role */}
      <div className="flex items-center gap-6">
        <img
          className="w-36 sm:w-44 cursor-pointer transition-all duration-300 transform hover:scale-105"
          src={assets.admin_logo}
          alt="Logo"
        />
        <p className="text-sm font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full py-2 px-4 shadow-xl">
          {adminToken ? 'Админ' : 'Доктор'}
        </p>
      </div>

      {/* Right Side - Logout Button */}
      <button
        onClick={logout}
        className="bg-white text-blue-600 font-semibold text-sm py-2 px-8 rounded-full shadow-md hover:bg-blue-50 transition duration-200 ease-in-out"
      >
        Излез
      </button>
    </div>
  );
};

export default Navbar;
