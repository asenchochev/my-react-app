import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext.jsx';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext.jsx';

const Sidebar = () => {
  const { adminToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-300 p-5 border-r shadow-lg overflow-hidden">
      {/* Admin Sidebar */}
      {adminToken && (
        <ul className="space-y-8 text-gray-800">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-5 py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-100 ${
                isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-700 hover:text-blue-800'
              }`
            }
            to="/admin-dashboard"
          >
            <img className="w-7" src={assets.home_icon} alt="" />
            <p className="hidden md:block text-lg font-semibold">Админ Панел</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-5 py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-100 ${
                isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-700 hover:text-blue-800'
              }`
            }
            to="/all-appointments"
          >
            <img className="w-7" src={assets.appointment_icon} alt="" />
            <p className="hidden md:block text-lg font-semibold">Записани Часове</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-5 py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-100 ${
                isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-700 hover:text-blue-800'
              }`
            }
            to="/add-doctor"
          >
            <img className="w-7" src={assets.add_icon} alt="" />
            <p className="hidden md:block text-lg font-semibold">Добави Доктор</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-5 py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-100 ${
                isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-700 hover:text-blue-800'
              }`
            }
            to="/doctor-list"
          >
            <img className="w-7" src={assets.people_icon} alt="" />
            <p className="hidden md:block text-lg font-semibold">Списък С Доктори</p>
          </NavLink>
        </ul>
      )}

      {/* Doctor Sidebar */}
      {dToken && (
        <ul className="space-y-8 text-gray-800 mt-8">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-5 py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-100 ${
                isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-700 hover:text-blue-800'
              }`
            }
            to="/doctor-dashboard"
          >
            <img className="w-7" src={assets.home_icon} alt="" />
            <p className="hidden md:block text-lg font-semibold">Доктор Панел</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-5 py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-100 ${
                isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-700 hover:text-blue-800'
              }`
            }
            to="/doctor-appointments"
          >
            <img className="w-7" src={assets.appointment_icon} alt="" />
            <p className="hidden md:block text-lg font-semibold">Записани Часове</p>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-5 py-4 px-6 rounded-xl transition-all duration-300 hover:bg-blue-100 ${
                isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-blue-700 hover:text-blue-800'
              }`
            }
            to="/doctor-profile"
          >
            <img className="w-7" src={assets.people_icon} alt="" />
            <p className="hidden md:block text-lg font-semibold">Профил</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
