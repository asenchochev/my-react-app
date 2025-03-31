import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUserMd, FaClipboardList, FaUserPlus } from 'react-icons/fa';

const SideBar = () => {
    const { aToken } = useContext(AdminContext);

    return (
        <div className="min-h-screen w-64 bg-white shadow-md p-5 relative">
            {/* Градиентен бордер отдясно */}
            <div className="absolute right-0 top-0 h-full w-[2px] bg-gradient-to-b from-gray-300 to-transparent"></div>

            {aToken && (
                <ul className="mt-5 space-y-4">
                    <li>
                        <NavLink 
                            to="/admin-dashboard" 
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition-all"
                        >
                            <FaHome className="text-gray-600 text-xl" />
                            <p className="text-gray-700 font-medium">Табло за управление</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/all-apointments" 
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition-all"
                        >
                            <FaClipboardList className="text-gray-600 text-xl" />
                            <p className="text-gray-700 font-medium">Записани часове</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/add-doctor" 
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition-all"
                        >
                            <FaUserPlus className="text-gray-600 text-xl" />
                            <p className="text-gray-700 font-medium">Добави доктор</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/doctor-list" 
                            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition-all"
                        >
                            <FaUserMd className="text-gray-600 text-xl" />
                            <p className="text-gray-700 font-medium">Списък с доктори</p>
                        </NavLink>
                    </li>
                </ul>
            )}
        </div>
    );
}

export default SideBar;
