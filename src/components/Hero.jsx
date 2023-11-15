import React from 'react';
import { Link } from 'react-router-dom';

import  bgImg from '../assets/child-ga48769257_1280.jpg';
import About from './About';
import Blog from './Blog';
import AllInOne from './AllInOne';
import Donations from './Donations';
import Footer from './Footer';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between md:'>

        <div className='grid md:grid-cols-2  max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-20'>
                <p className='text-2xl'>Life Again for the Vulnerable and Elderly</p>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>The power of good healthcare and community</h1>
                <p className='text-2xl '>Together we can help those losing hope while battling fatal diseases</p>
                <Link  className='py-4 px-8 sm:w-[60%] my-4 ' to="/PhotoGallery">
                <button className='py-4 px-8 sm:w-[60%] my-4 '>Get Involved</button>
                </Link>

            </div>
            <div className='flex'>
                <img className='w-full object-contain md:w-[100%] lg:w-[100%]' src={bgImg} alt="/" />
            </div>
           
        </div>

        <About />
        <Blog />
        <AllInOne />
        <Donations />
        <Footer />
    </div>
  )
}

export default Hero