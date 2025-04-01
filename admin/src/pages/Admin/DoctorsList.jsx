import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="m-5 min-h-screen flex flex-col bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Лист на доктори</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {doctors.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out p-6 flex flex-col items-center space-y-4 hover:shadow-2xl"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-36 h-36 object-cover rounded-full border-4 border-teal-500"
            />
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold text-gray-900">{item.name}</h2>
              <p className="text-lg text-gray-500">{item.specialty}</p>
            </div>
            <div className="flex items-center space-x-3">
              <input
                onChange={() => changeAvailability(item._id)}
                type="checkbox"
                checked={item.available}
                readOnly
                className="form-checkbox h-6 w-6 text-teal-500 transition duration-300 ease-in-out"
              />
              <p className="text-lg text-gray-800 font-semibold">{item.available ? 'Наличен' : 'Не е наличен'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;
