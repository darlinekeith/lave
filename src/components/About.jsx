import React from 'react';
import { FaHandsHelping, FaClock, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div name="about" className="w-full py-24 bg-gradient-to-r from-white via-zinc-100 to-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Text Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">How We Work</h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            We conduct monthly home visits to children and elderly beneficiaries. 
            During these visits, we provide psycho-social support, continuous needs assessments, and offer parenting packages tailored to children and caregivers.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white border py-10 px-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-6xl text-indigo-600" />
            </div>
            <p className="text-5xl font-bold text-indigo-600 mb-2">100%</p>
            <p className="text-gray-700 font-medium">Impact Delivery</p>
          </div>
          <div className="bg-white border py-10 px-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <div className="flex justify-center mb-4">
              <FaClock className="text-6xl text-indigo-600" />
            </div>
            <p className="text-5xl font-bold text-indigo-600 mb-2">24/7</p>
            <p className="text-gray-700 font-medium">Commitment</p>
          </div>
          <div className="bg-white border py-10 px-6 rounded-2xl shadow-lg hover:scale-105 transition-transform">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-6xl text-indigo-600" />
            </div>
            <p className="text-5xl font-bold text-indigo-600 mb-2">20+</p>
            <p className="text-gray-700 font-medium">Families Supported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
