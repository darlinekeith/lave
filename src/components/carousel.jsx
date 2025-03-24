// src/components/Carousel.jsx

import React, { useState } from 'react';
import img2 from '../assets/img2.png';
import img1 from '../assets/img1.png';
import img4 from '../assets/img4.png';

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const maxSlides = 1; // Show only one image per click

  const handlePrevClick = () => {
    setSlide(Math.max(slide - 1, 0));
  };

  const handleNextClick = () => {
    setSlide(Math.min(slide + 1, maxSlides - 1));
  };

  return (
    <div className="relative">
      <div className="carousel relative overflow-hidden bg-gray-300">
        <div
          className="carousel-inner flex transition-transform"
          style={{ transform: `translateX(-${slide * 100}%)`, transition: 'transform 0.5s ease' }}
        >
          {/* Add your images here */}
          <div className="carousel-item w-full md:w-1/3">
            <img src={img1} alt="Slide 1 - Description" className="w-full md:rounded-lg md:object-cover md:object-center" />
          </div>
          <div className="carousel-item w-full md:w-1/3">
            <img src={img2} alt="Slide 2 - Description" className="w-full md:rounded-lg md:object-cover md:object-center" />
          </div>
          <div className="carousel-item w-full md:w-1/3">
            <img src={img4} alt="Slide 3 - Description" className="w-full md:rounded-lg md:object-cover md:object-center" />
          </div>
          {/* Repeat as many times as needed */}
        </div>
      </div>

      <button
        onClick={handlePrevClick}
        className="absolute inset-y-0 left-0 z-10 p-4 opacity-50 hover:opacity-100 focus:outline-none hidden md:block"
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        className="absolute inset-y-0 right-0 z-10 p-4 opacity-50 hover:opacity-100 focus:outline-none hidden md:block"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
