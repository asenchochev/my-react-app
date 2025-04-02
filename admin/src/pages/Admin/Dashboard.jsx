import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { adminToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (adminToken) {
      getDashData()
    }
  }, [adminToken])

  return dashData && (
    <div className='m-6 space-y-6'>
      <div className='flex flex-wrap gap-6 justify-center'>
        {/* Doctor Card */}
        <div className='flex items-center gap-4 bg-white p-6 min-w-[220px] rounded-lg border-2 border-gray-200 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'>
          <img className='w-16 h-16 rounded-full bg-gray-200 p-2' src={assets.doctor_icon} alt="Doctor" />
          <div>
            <p className='text-2xl font-semibold text-gray-800'>{dashData.doctors}</p>
            <p className='text-gray-500 text-sm'>Доктори</p>
          </div>
        </div>

        {/* Appointments Card */}
        <div className='flex items-center gap-4 bg-white p-6 min-w-[220px] rounded-lg border-2 border-gray-200 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'>
          <img className='w-16 h-16 rounded-full bg-gray-200 p-2' src={assets.appointments_icon} alt="Appointments" />
          <div>
            <p className='text-2xl font-semibold text-gray-800'>{dashData.appointments}</p>
            <p className='text-gray-500 text-sm'>Часове</p>
          </div>
        </div>

        {/* Patients Card */}
        <div className='flex items-center gap-4 bg-white p-6 min-w-[220px] rounded-lg border-2 border-gray-200 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'>
          <img className='w-16 h-16 rounded-full bg-gray-200 p-2' src={assets.patients_icon} alt="Patients" />
          <div>
            <p className='text-2xl font-semibold text-gray-800'>{dashData.patients}</p>
            <p className='text-gray-500 text-sm'>Пациенти</p>
          </div>
        </div>
      </div>

      {/* Latest Appointments Section */}
      <div className='bg-white rounded-lg shadow-md'>
        <div className='flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-t-lg border-b'>
          <img className='w-6 h-6' src={assets.list_icon} alt="List" />
          <p className='font-semibold text-lg text-gray-700'>Последни Часове</p>
        </div>

        <div className='space-y-4 px-6 py-4'>
          {dashData.latestAppointments.map((item, index) => (
            <div className='flex items-center gap-4 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all' key={index}>
              <img className='w-12 h-12 rounded-full border-2 border-gray-300' src={item.docData.image} alt="Doctor" />
              <div className='flex-1'>
                <p className='text-gray-800 font-medium text-sm'>{item.docData.name}</p>
                <p className='text-gray-500 text-xs'>{slotDateFormat(item.slotDate)}</p>
              </div>
              <div className='flex items-center'>
                {item.cancelled
                  ? <p className='text-red-500 text-xs font-semibold'>Отменено</p>
                  : item.isCompleted
                    ? <p className='text-green-500 text-xs font-semibold'>Завършено</p>
                    : <img onClick={() => cancelAppointment(item._id)} className='w-8 cursor-pointer' src={assets.cancel_icon} alt="Cancel" />
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
