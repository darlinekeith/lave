import React from 'react';
import { FaUserTie, FaPhoneAlt, FaTasks } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import suppoetImg from '../assets/pexels-shelagh-murphy-2883380.jpg';

const Blog = () => {
  return (
    <div name="nature" className="w-full relative mt-24">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={suppoetImg}
          alt="/"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto text-white z-10">
        <div className="px-6 py-12 text-center">
          <h2 className="text-3xl uppercase text-indigo-300 font-semibold">Our Foundation</h2>
          <h3 className="text-5xl font-bold py-4">Nature and Definition</h3>
          <p className="py-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            The organization is an independent, non-political, non-denominational, 
            community-based, gender-sensitive nonprofit. Its mission is to improve 
            the lives of vulnerable children and the elderly in Luwero District, Uganda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-20">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <div className="p-8">
              <FaUserTie className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="font-bold text-2xl mb-4">Founder</h3>
              <p className="text-gray-600 text-lg">The founder of this organization is Dennis Lwanga.</p>
            </div>
            <div className="bg-indigo-50 px-8 py-4 flex items-center justify-between text-indigo-600 font-medium">
              <span>Contact: +18576150516</span>
              <HiArrowNarrowRight className="w-5" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <div className="p-8">
              <FaPhoneAlt className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="font-bold text-2xl mb-4">Chairperson</h3>
              <p className="text-gray-600 text-lg">Our chairperson of this organization is Mr. Mitanda Darline Lwanga.</p>
            </div>
            <div className="bg-indigo-50 px-8 py-4 flex items-center justify-between text-indigo-600 font-medium">
              <span>Contact: +256773443986</span>
              <HiArrowNarrowRight className="w-5" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <div className="p-8">
              <FaTasks className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="font-bold text-2xl mb-4">Program's Coordinator</h3>
              <p className="text-gray-600 text-lg">Sebwami Ismael is responsible for program creation.</p>
            </div>
            <div className="bg-indigo-50 px-8 py-4 flex items-center justify-between text-indigo-600 font-medium">
              <span>Contact: +256777108294</span>
              <HiArrowNarrowRight className="w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
