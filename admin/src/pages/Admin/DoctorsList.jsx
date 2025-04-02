import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';

const specialityTranslations = {
  "Dermatologist": "Дерматолог",
  "Neurologist": "Невролог",
  "Pediatricians": "Педиатър",
  "General physician": "Общопрактикуващ лекар",
  "Gynaecologist": "Гинеколог",
  "Gastroenterologis": "Гастроентеролог"
};

const DoctorsList = () => {
  const { doctors, adminToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (adminToken) {
      getAllDoctors();
    }
  }, [adminToken]);

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>Списък с Доктори</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          doctors.map((item, index) => (
            <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
              <img className='bg-indigo-50 group-hover:bg-primary transition-all duration-500' src={item.image} alt="" />
              <div className='p-4'>
                <p className='text-neutral-800 text-lg font-medium'>{item.name}</p>
                <p className='text-zinc-600 text-sm'>{specialityTranslations[item.speciality] || item.speciality}</p>
                <div className='mt-2 flex items-center gap-1 text-sm'>
                  <div className='flex items-center gap-2'>
                    <input
                      onChange={() => changeAvailability(item._id)}
                      type="checkbox"
                      checked={item.available}
                      className="w-5 h-5 border-2 border-indigo-300 rounded-full checked:bg-green-500 checked:border-transparent transition duration-300 ease-in-out"
                    />
                    <p className="text-sm text-neutral-700 font-medium">
                      {item.available ? "Наличен" : "Зает"}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DoctorsList;
