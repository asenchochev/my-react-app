import React from 'react'
import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl px-6 md:px-10 py-8 shadow-lg'>
      {/* Left side */}
      <div className='flex-1 space-y-6 text-white'>
        <p className='text-3xl md:text-4xl font-bold leading-tight'>
          Записване на Часове <br /> С Доверени Доктори
        </p>
        <div className='flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-4'>
          <img src={assets.group_profiles} alt="" className='w-20' />
          <p className='text-sm md:text-base'>
            Просто прегледайте нашия обширен списък с доверени лекари, 
            насрочете срещата си безпроблемно
          </p>
        </div>
        <a href="#speciality" className='inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors'>
          Резервирайте час 
          <img src={assets.arrow_icon} alt="" className='w-5' />
        </a>
      </div>

      {/* Right Side */}
      <div className='flex-1  mt-8 md:mt-0 flex flex-col items-end'>
  <img src={assets.header_img} alt="" className='max-w-full h-auto' />
</div>

    </div>
  )
}

export default Header
