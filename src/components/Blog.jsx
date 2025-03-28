import React from "react";
import { Helmet } from "react-helmet-async";
import { FaUserTie, FaPhoneAlt, FaTasks } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import supportImg from "../assets/pexels-shelagh-murphy-2883380.jpg";

const Blog = () => {
  return (
    <div name="nature" className="w-full relative mt-24">
      {/* SEO Optimization */}
      <Helmet>
        <title>About LAVE Uganda - Our Mission & Leadership</title>
        <meta
          name="description"
          content="LAVE Uganda is a nonprofit organization dedicated to supporting vulnerable children and elderly individuals in Luwero District, Uganda."
        />
        <meta
          name="keywords"
          content="LAVE Uganda, nonprofit, charity, Uganda, vulnerable children, elderly support"
        />
        <meta property="og:title" content="About LAVE Uganda - Our Mission & Leadership" />
        <meta
          property="og:description"
          content="Learn about LAVE Uganda, our mission, and the leaders driving positive change in the community."
        />
        <meta property="og:image" content="https://www.laveug.org/assets/blog-banner.png" />
        <meta property="og:url" content="https://www.laveug.org/about" />
      </Helmet>

      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover lazyload"
          src={supportImg}
          alt="Community Support"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto text-white z-10">
        <div className="px-6 py-12 text-center">
          <h2 className="text-3xl uppercase text-indigo-300 font-semibold">Our Foundation</h2>
          <h3 className="text-5xl font-bold py-4">Nature and Definition</h3>
          <p className="py-4 text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            LAVE Uganda is an independent, non-political, non-denominational, 
            community-based, gender-sensitive nonprofit. Our mission is to improve 
            the lives of vulnerable children and the elderly in Luwero District, Uganda.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-20">
          {/* Founder Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <div className="p-8">
              <FaUserTie className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="font-bold text-2xl mb-4">Founder</h3>
              <p className="text-gray-600 text-lg">The founder of LAVE Uganda is Dennis Lwanga.</p>
            </div>
            <div className="bg-indigo-50 px-8 py-4 flex items-center justify-between text-indigo-600 font-medium">
              <a href="tel:+18576150516" className="hover:underline">
                Contact: +1 (857) 615-0516
              </a>
              <HiArrowNarrowRight className="w-5" />
            </div>
          </div>

          {/* Chairperson Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <div className="p-8">
              <FaPhoneAlt className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="font-bold text-2xl mb-4">Chairperson</h3>
              <p className="text-gray-600 text-lg">Our chairperson is Mitanda Darline Lwanga.</p>
            </div>
            <div className="bg-indigo-50 px-8 py-4 flex items-center justify-between text-indigo-600 font-medium">
              <a href="tel:+256773443986" className="hover:underline">
                Contact: +256 773 443 986
              </a>
              <HiArrowNarrowRight className="w-5" />
            </div>
          </div>

          {/* Program Coordinator Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
            <div className="p-8">
              <FaTasks className="text-indigo-600 text-5xl mb-4 mx-auto" />
              <h3 className="font-bold text-2xl mb-4">Program Coordinator</h3>
              <p className="text-gray-600 text-lg">Sebwami Ismael oversees program development.</p>
            </div>
            <div className="bg-indigo-50 px-8 py-4 flex items-center justify-between text-indigo-600 font-medium">
              <a href="tel:+256777108294" className="hover:underline">
                Contact: +256 777 108 294
              </a>
              <HiArrowNarrowRight className="w-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
