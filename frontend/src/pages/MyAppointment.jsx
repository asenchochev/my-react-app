import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const MyAppointment = () => {
    const { doctors } = useContext(AppContext)

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Моите записани часове</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {doctors.slice(0, 3).map((doctor) => (
          <div 
            key={doctor.id} 
            className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
          >
            <div className="flex items-center p-6 border-b border-blue-300 bg-gradient-to-r from-blue-50 to-blue-100">
              
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg"
              />
              
              <div className="ml-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">{doctor.name}</h2>
                <p className="text-blue-600 text-lg mb-4">{doctor.speciality}</p>
                <div className="space-y-2">
                  <p className="text-sm text-blue-500">Дата: <span className="font-semibold text-blue-700">{doctor.date}</span></p>
                  <p className="text-sm text-blue-500">Час: <span className="font-semibold text-blue-700">{doctor.time}</span></p>
                </div>

                <div className="flex justify-between space-x-6 mt-6">
                  <button 
                    className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
                  >
                    Платете онлайн
                  </button>
                  <button 
                    className="px-6 py-3 bg-red-600 text-white text-sm font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md"
                  >
                    Откажете записаният час
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointment
