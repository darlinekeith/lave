import React from 'react';
import { Link } from 'react-router-dom';

import bgImg from '../assets/child-ga48769257_1280.jpg';
import About from './About';
import Blog from './Blog';
import AllInOne from './AllInOne';
import Donations from './Donations';
import Footer from './Footer';

const Hero = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-zinc-100 flex flex-col">
      {/* Hero Content */}
      <div className="relative w-full flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-10 lg:px-16 py-12 md:py-24 max-w-[1440px] mx-auto">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-indigo-600 text-xl font-semibold">
            Life Again for the Vulnerable and Elderly
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
            The Power of Good Healthcare <br /> & Community
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            Together, we can help those losing hope while battling fatal diseases.
          </p>

          <Link to="/photoGallery">
            <button className="mt-4 bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-md">
              Get Involved
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
            src={bgImg}
            alt="Child and caregiver"
          />
        </div>
      </div>

      {/* Additional Sections */}
      <About />
      <Blog />
      <AllInOne />
      <Donations />
      <Footer />
    </div>
  );
};

export default Hero;
