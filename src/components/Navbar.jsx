import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-8'>
      <div className='font-bold text-4xl'>My Blog</div>
      <div>
        <ul className='flex gap-12'>
          <li className='hover:text-[#E0B0D5] cursor-pointer'>Home</li>
          <li className='hover:text-[#E0B0D5] cursor-pointer'>About</li>
          <li className='hover:text-[#E0B0D5] cursor-pointer'>Blog</li>
          <li className='hover:text-[#E0B0D5] cursor-pointer'>Contact</li>
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