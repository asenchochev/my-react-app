import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ReletedDoctors = ({ speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relatedDoctors, setRelatedDoctors] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doctor) => doctor.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setRelatedDoctors(doctorsData);
    }
  }, [doctors, speciality]);

  const handleDoctorClick = (id) => {
    console.log('Doctor clicked:', id);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {relatedDoctors.slice(0, 10).map((doctor) => (
          <div
            key={doctor._id}
            className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={() => handleDoctorClick(doctor._id)}
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-48 h-48 object-cover rounded-full cursor-pointer"
            />
            <div className="mt-5 text-center">
              <p className="text-xl font-semibold text-gray-900">{doctor.name}</p>
              <p className="text-md text-gray-500">{doctor.speciality}</p>
              <span
                className={`mt-3 inline-block px-4 py-1 text-sm font-medium rounded-full ${
                  doctor.available ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}
              >
                {doctor.available ? 'Наличен' : 'Зает'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReletedDoctors;
