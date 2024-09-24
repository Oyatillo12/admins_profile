import React from 'react'
import Logo from '../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import {UsersIcon, SettingsIcon} from '../assets/images/icon'

function Navbar() {
  return (
    <div className='w-[20%] bg-[#C4C4C4] h-[100vh] overflow-y-auto'>
      <div className='flex items-center space-x-2 p-8'>
        <img src={Logo} alt="logo icon" width={39} height={39} />
        <h2 className='text-[25px] leading-8'>Company</h2>
      </div>
      <div className='pt-10'>
        <NavLink className="w-full block  items-center flex space-x-2 py-3 text-[20px]  text-black px-8 leading-6" to={"/"}>
            <UsersIcon/>
            <span>Users</span>
        </NavLink>
        <NavLink className="w-full block  items-center flex space-x-2 py-3 text-[20px]  text-black px-8 leading-6" to={"/settings"}>
            <SettingsIcon/>
            <span>Settings</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
