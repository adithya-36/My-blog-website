import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-8'>
      <div className='font-bold text-4xl'>My Blog</div>
      <div>
        <ul className='flex gap-12'>
          <NavLink className={(e)=>{return e.isActive?"text-purple-600":"text-black"}} to='/'><li className='hover:text-[#E0B0D5] cursor-pointer'>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"text-purple-600":"text-black"}} to='/about'><li className='hover:text-[#E0B0D5] cursor-pointer'>About</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"text-purple-600":"text-black"}} to='/blog'><li className='hover:text-[#E0B0D5] cursor-pointer'>Blog</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"text-purple-600":"text-black"}} to='/contact'><li className='hover:text-[#E0B0D5] cursor-pointer'>Contact</li></NavLink>
        </ul>
      </div>
      <div>
        <ul className='flex gap-6'>
          <li className='border-none rounded py-2 px-4 bg-[#7BE0AD] cursor-pointer'>Login</li>
          <li className='border-none rounded py-2 px-4 bg-[#7BE0AD] cursor-pointer'>SignIn</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar