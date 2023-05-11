import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-4xl font-bold text-[#00df9a]'>DATALINK</h1>
      <ul className='hidden md:flex cursor-pointer'>
        <li className='p-4 text-2xl'>Home</li>
        <li className='p-4 text-2xl'>Company</li>
        <li className='p-4 text-2xl'>Resources</li>
        <li className='p-4 text-2xl'>About</li>
        <li className='p-4 text-2xl'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#060017] ease-in-out duration-500 cursor-pointer' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>DATALINK</h1>
        <li className='p-4 text-2xl border-b border-gray-600'>Home</li>
        <li className='p-4 text-2xl border-b border-gray-600'>Company</li>
        <li className='p-4 text-2xl border-b border-gray-600'>Resources</li>
        <li className='p-4 text-2xl border-b border-gray-600'>About</li>
        <li className='p-4 text-2xl'>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar