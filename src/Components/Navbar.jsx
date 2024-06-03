import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
import { IoChevronForwardSharp } from "react-icons/io5";

const Navbar = () => {
    const[toggle,setToggle]=useState(false)
  return (
    <div className='bg-white sticky top-0 w-full z-50'>

    <div className='mx-4 md:mx-12 lg:mx-24 bg-white '> 
    <div className='flex flex-row justify-between items-center gap-3 px-4'>
        <div className='h-12 md:h-14 overflow-hidden '>
            <img className='h-full w-full object-cover' src="https://prabidhienterprises.com/images/company-profile/Prabidhi%20Enterprise.png" alt="logo" />
        </div>
        <div className='lg:flex hidden lg:flex-row lg:gap-8 text-gray-600 lg:font-semibold'>
        <NavLink to='/'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Home
        </NavLink>            
        <NavLink to='/about'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          About
        </NavLink>            
        <NavLink to='/career'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Career
        </NavLink>            
        <NavLink to='/service'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Service
        </NavLink>            
        <NavLink to='/Portfolio'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Portfolio
        </NavLink>            
        <NavLink to='/blog'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Blog
        </NavLink>            
        </div>
        <div className='lg:flex lg:flex-row hidden'>
            <NavLink to='/contact' className='flex flex-row justify-center items-center gap-2 text-lg px-8 py-1  rounded-3xl bg-[#0849A8] text-white hover:bg-[#0849FF] duration-200 ease-in-out'>Contact<IoChevronForwardSharp /></NavLink>
        </div>
        <div className='flex flex-row lg:hidden text-2xl'>
        <IoReorderThreeSharp onClick={()=>setToggle(!toggle)} />
        </div>
    </div>
    <div className={`bg-white z-50 fixed top-0 right-0 flex flex-col justify-between items-start p-4  md:w-1/2 w-full transform duration-500 ease-in-out ${toggle ? 'translate-x-0' : 'translate-x-[900px]'}`}>
        <div className='flex flex-row w-full justify-between items-center '>
        <div className='h-12 overflow-hidden '>
            <img className='h-full w-full object-cover' src="https://prabidhienterprises.com/images/company-profile/Prabidhi%20Enterprise.png" alt="logo" />
        </div>
        <div className='text-xl'>
        <FaRegWindowClose onClick={()=>setToggle(!toggle)}/>
        </div>
        </div>
        <div className='flex flex-col px-4 mt-3'>

        <NavLink to='/'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Home
        </NavLink>            
        <NavLink to='/about'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          About
        </NavLink>            
        <NavLink to='/career'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Career
        </NavLink>            
        <NavLink to='/service'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Service
        </NavLink>            
        <NavLink to='/Portfolio'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Portfolio
        </NavLink>            
        <NavLink to='/blog'className={({ isActive }) => isActive ? 'text-[#053FAA] bg-dark-900' : 'hover:text-[#053FAA] duration-100 ease-in-out'}>
          Blog
        </NavLink>    
        <NavLink to='/contact' className='flex flex-row w-full justify-center items-center gap-2  px-4  rounded-3xl bg-[#0849A8] text-white hover:bg-[#0849FF] duration-200 ease-in-out'>Contact<IoChevronForwardSharp /></NavLink>
        </div>
      
    </div>

    </div>
    </div>
  )
}

export default Navbar