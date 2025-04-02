import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const AllAppointments = () => {

  const { adminToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

  useEffect(() => {
    if (adminToken) {
      getAllAppointments()
    }
  }, [adminToken])

  return (
    <div className='w-full max-w-7xl mx-auto p-6'>
      <p className='text-2xl font-semibold text-gray-800 mb-6'>Записани Часове</p>

      <div className='bg-white border rounded-lg shadow-lg max-h-[80vh] overflow-y-auto'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] py-4 px-6 border-b text-sm font-medium text-gray-600'>
          <p>#</p>
          <p>Пациент</p>
          <p>Години</p>
          <p>Дата & Час</p>
          <p>Доктор</p>
          <p>Такса</p>
          <p>Действия</p>
        </div>

        {appointments.map((item, index) => (
          <div className='flex flex-wrap sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-700 py-3 px-6 border-b hover:bg-gray-50 transition-all duration-300' key={index}>
            <p className='hidden sm:block'>{index + 1}</p>
            <div className='flex items-center gap-3'>
              <img className='w-10 h-10 rounded-full' src={item.userData.image} alt="User" />
              <p className='text-sm font-medium'>{item.userData.name}</p>
            </div>
            <p className='hidden sm:block'>{calculateAge(item.userData.dob)}</p>
            <p className='text-sm'>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <div className='flex items-center gap-3'>
              <img className='w-10 h-10 rounded-full bg-gray-200' src={item.docData.image} alt="Doctor" />
              <p className='text-sm font-medium'>{item.docData.name}</p>
            </div>
            <p className='text-sm'>{currency}{item.amount}</p>
            <div className='flex items-center'>
              {item.cancelled
                ? <p className='text-xs font-medium text-red-500'>Отказан</p>
                : item.isCompleted
                  ? <p className='text-xs font-medium text-green-500'>Приет</p>
                  : <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer transition-transform duration-300 hover:scale-110' src={assets.cancel_icon} alt="Cancel Appointment" />
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointments
