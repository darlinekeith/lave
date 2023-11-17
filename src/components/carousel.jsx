// src/components/carousel.jsx

import React, { useState } from 'react';

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const maxSlides = 3; // Set the total number of slides here

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
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {/* Add your images here */}
          <div className="carousel-item">
            <img src="image1.jpg" alt="Slide 1 - Description" />
          </div>
          <div className="carousel-item">
            <img src="image2.jpg" alt="Slide 2 - Description" />
          </div>
          <div className="carousel-item">
            <img src="image3.jpg" alt="Slide 3 - Description" />
          </div>
          {/* Repeat as many times as needed */}
        </div>
      </div>

      <button
        onClick={handlePrevClick}
        className="absolute inset-y-0 left-0 z-10 p-4 opacity-50 hover:opacity-100 focus:outline-none"
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        className="absolute inset-y-0 right-0 z-10 p-4 opacity-50 hover:opacity-100 focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
