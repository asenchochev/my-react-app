import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {
  const { speciality } = useParams() // Вземаме специалността от параметрите на URL
  const [filterDoc, setFilterDoc] = useState([]) // Стейт за филтрираните доктори
  const [searchTerm, setSearchTerm] = useState('') // Стейт за търсенето по име
  const navigate = useNavigate(); // Навигация
  const { doctors } = useContext(AppContext) // Вземаме докторите от контекста

  // Функция за филтриране на доктори според избраната специалност и търсене по име
  const applyFilter = () => {
    let filteredDoctors = doctors;

    if (speciality) {
      filteredDoctors = filteredDoctors.filter(doc => doc.speciality === speciality); // Филтрираме по специалност
    }

    if (searchTerm) {
      filteredDoctors = filteredDoctors.filter(doc => 
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) // Филтрираме по име
      );
    }

    setFilterDoc(filteredDoctors); // Актуализираме състоянието с филтрираните доктори
  }

  // Извикваме applyFilter при промяна на doctorите, специалността или търсения текст
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality, searchTerm]);

  return (
    <div className="max-w-screen-xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters Section */}
        <div className="lg:col-span-1 p-6 bg-gray-50 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Филтрирай по специалност</h3>
          <div className="flex flex-col space-y-4">
            {['Общопрактикуващ лекар', 'Гинеколог', 'Дерматолог', 'Педиатър', 'Невролог', 'Гастроентеролог'].map((specialityType) => (
              <button 
                key={specialityType} 
                onClick={() => speciality === specialityType ? navigate('/allDoctors') : navigate(`/allDoctors/${specialityType}`)} 
                className={`px-6 py-3 text-left text-sm font-medium rounded-md transition-all ${speciality === specialityType ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
              >
                {specialityType} {/* Извеждаме наименованието на специалността на български */}
              </button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="lg:col-span-3 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Доктори</h2>
          <div className="relative">
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Актуализираме searchTerm при всяка промяна
              placeholder="Търсете доктор по име..." 
              className="w-full px-6 py-3 border border-gray-300 rounded-xl text-lg text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18a8 8 0 10-8-8 8 8 0 008 8zM10 18l6 6" />
              </svg>
            </div>
          </div>

          {/* Doctors List Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filterDoc.length > 0 ? (
              filterDoc.map((item, index) => (
                <div 
                  key={index} 
                  onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0); }} 
                  className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <img 
                    className="w-full h-48 object-cover" 
                    src={item.image} 
                    alt={item.name} 
                  />
                  <div className="p-4">
                    <div className={`flex items-center gap-2 text-sm ${item.available ? 'text-green-500' : 'text-red-500'}`}>
                      <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-red-500'}`}></p>
                      <p>{item.available ? 'Наличен' : 'Не е наличен'}</p>
                    </div>
                    <p className="text-xl font-medium text-gray-800 mt-3">{item.name}</p>
                    <p className="text-gray-500 text-sm">{item.speciality}</p>
                    <div className="mt-4">
                      <button 
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all"
                      >
                        Запишете час
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Няма намерени доктори.</p> // Ако няма резултати от търсенето или филтрирането, показваме съобщение
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors
