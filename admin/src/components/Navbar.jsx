import React, { useContext } from 'react'
import assets from '../assets/assets'
import { AdminContext } from '../context/AdminContext'

const Navbar = () => {
    const { aToken, setAtoken } = useContext(AdminContext)

    const logout = () => {
        setAtoken(''); // Изчистваме токена
        localStorage.removeItem('aToken'); // Премахваме токена от localStorage
    }

    return (
        <div className='flex justify-between items-center bg-white shadow-lg p-4 rounded-lg transition-shadow duration-300 ease-in-out'>
            <div className='flex items-center gap-4'>
                <img className='w-36 sm:w-40 cursor-pointer transition-transform transform hover:scale-105' src={assets.admin_logo} alt="Logo" />
                <div className='flex items-center gap-2'>
                    <p className='border px-3 py-1 rounded-full text-sm font-semibold bg-gray-100 text-gray-600 shadow-md'>
                        {aToken ? 'Админ' : 'Доктор'}
                    </p>
                </div>
            </div>
            {aToken && (
                <button 
                    onClick={logout} 
                    className='bg-red-600 text-white text-sm px-8 py-3 rounded-lg shadow-xl transition-all transform hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50'
                >
                    ИЗЛЕЗ
                </button>
            )}
        </div>
    )
}

export default Navbar
