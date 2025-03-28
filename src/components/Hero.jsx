import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import bgImg from "../assets/child-ga48769257_1280.jpg";
import About from "./About";
import Blog from "./Blog";
import AllInOne from "./AllInOne";
import Donations from "./Donations";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div name="home" className="w-full relative">
      {/* SEO Optimization */}
      <Helmet>
        <title>LAVE Uganda - Support for the Vulnerable & Elderly</title>
        <meta
          name="description"
          content="LAVE Uganda provides healthcare and support for vulnerable and elderly individuals. Join us in making a difference."
        />
        <meta name="keywords" content="LAVE Uganda, elderly care, vulnerable support, community healthcare, donations" />
        <meta name="author" content="LAVE Uganda" />
        <meta property="og:title" content="LAVE Uganda - Support for the Vulnerable & Elderly" />
        <meta
          property="og:description"
          content="Join LAVE Uganda in supporting the vulnerable and elderly with healthcare and community-driven initiatives."
        />
        <meta property="og:image" content="https://www.laveug.org/assets/child-ga48769257_1280.jpg" />
        <meta property="og:url" content="https://www.laveug.org" />
      </Helmet>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-screen object-cover"
          src={bgImg}
          alt="A child receiving care and support"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content - Centered */}
      <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <div className="max-w-4xl mx-auto space-y-6 text-white">
          <p className="text-indigo-300 text-xl font-semibold">
            Life Again for the Vulnerable and Elderly
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            The Power of Good Healthcare <br /> & Community
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Together, we can help those losing hope while battling fatal diseases.
          </p>

          <Link to="/photoGallery">
            <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-md">
              Get Involved
            </button>
          </Link>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="relative bg-zinc-100">
        <About />
        <Blog />
        <AllInOne />
        <Donations />
        <Footer />
      </div>
    </div>
  );
};

export default Hero;