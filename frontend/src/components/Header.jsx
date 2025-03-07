import React from 'react'
import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div>
      {/* Left side */}
      <div>
        <p>
        Записване на Часове <br /> С Доверени Доктори
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>Просто прегледайте нашия обширен списък с доверени лекари, 
          насрочете срещата си безпроблемно</p>
        </div>
        <a href="">Резервирайте час <img src={assets.arrow_icon} alt="" /></a>
      </div>

      {/* Right Side */}
      <div>
        <img src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
