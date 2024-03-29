import React, {useState } from 'react';

import { Link } from 'react-scroll'


import {MenuIcon, XIcon} from '@heroicons/react/outline'

import logos from '../assets/LAVE Logo-02.png'

const Navbar = () => {
  const [nav,  setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  return (
    <nav className='h-[80px] w-full z-20 top-0 left-0 bg-zinc-200 fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
      <div className='flex items-center'>
        <img className='flex object-contain h-80 w-44' src={logos} alt='/'/> 
        <ul  className='hidden md:flex'>
        <li><Link to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
        <li><Link to="nature" smooth={true} offset={-50} duration={500}>Nature</Link></li>
        <li><Link to="values" smooth={true} offset={-100} duration={500}>Values</Link></li>
        <li><Link to="donations" smooth={true} offset={-50} duration={500}>Donations</Link></li>
        </ul>
      </div>
   { /*   <div className='hidden md:flex pr-4'>
        <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
        <button className='px-8 py-3'>Sign Up</button>
  </div> */ }
      <div className='md:hidden' onClick={handleClick}>
        {!nav ? <MenuIcon className='w-5' /> :  <XIcon className='w-5' />}
      
      </div>
      </div>

    <ul className={!nav ?  'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="home" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="nature" smooth={true} offset={-50} duration={500}>Nature</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="values" smooth={true} offset={-100} duration={500}>Values</Link></li>
        <li className='border-b-2 border-zinc-300 w-full'><Link onClick={handleClose} to="donations" smooth={true} offset={-50} duration={500}>Donations</Link></li>
       { /* <div className='flex flex-col my-4 '>
          <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
          <button className='px-8 py-3'>Sign Up</button>
</div> */ }
    </ul>

    </nav>
  )
}

export default Navbar