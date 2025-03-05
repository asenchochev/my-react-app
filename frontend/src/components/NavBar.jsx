import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img src={assets.logo} alt="" />
      <ul>
        <NavLink>
            <li>Начало</li>
            <hr />
            <li>ВСИЧКИ ДОКТОРИ</li>
            <hr />
            <li>ЗА НАС</li>
            <hr />

        </NavLink>
      </ul>
      <div>
        <button>Създай профил</button>
      </div>
    </div>
  )
}

export default NavBar
