// src/components/PhotoGallery.jsx

import React from 'react';
// Make sure to import the Carousel component with the correct case

import img3 from '../assets/img3.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';

const PhotoGallery = () => {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">

      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex flex-wrap w-full">
          <div className="w-full p-2 md:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img8}
            />
          </div>
          <div className="w-full p-2 md:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img3}
            />
          </div>
          <div className="w-full p-2 md:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img9}
            />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <div className="w-full p-2 md:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img7}
            />
          </div>
          <div className="w-full p-2 md:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img5}
            />
          </div>
          <div className="w-full p-2 md:w-1/2 lg:w-1/3">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center"
              src={img6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
