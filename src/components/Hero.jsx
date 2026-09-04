import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import bgImg from "../assets/child-ga48769257_1280.jpg";
import About from "./About";
import Blog from "./Blog";
import AllInOne from "./AllInOne";
import Donations from "./Donations";
import Footer from "./Footer";
import CommunityImpact from "./CommunityImpact";
import Volunteer from "./Volunteer";

const Hero = () => {
  return (
    <main id="home" className="w-full relative">
      {/* SEO Optimization */}
      <Helmet>
        <title>LAVE Uganda | Bringing Life, Love & Dignity to Rural Communities</title>
        <meta
          name="description"
          content="Life Again for the Vulnerable and Elderly (LAVE) is a registered CBO in Luwero District, Uganda, restoring hope for orphans, vulnerable children, and aging grandmothers."
        />
        <meta name="keywords" content="LAVE Uganda, laveug, lave, elderly care, vulnerable children, Luwero, community healthcare, donations" />
        <meta name="author" content="LAVE Uganda" />
        <meta property="og:title" content="LAVE Uganda - Bringing Life, Love & Dignity to Rural Communities" />
        <meta
          property="og:description"
          content="Join LAVE Uganda in supporting vulnerable children and elderly grandmothers in Luwero District with home healthcare and community care."
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
            Life Again for the Vulnerable and Elderly (LAVE Uganda)
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Bringing Life, Dignity & Hope <br /> Back to Rural Uganda
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            In the quiet villages of Luwero District, we walk door-to-door so no child feels forgotten and no elder sits in shadow.
          </p>

          <Link
            to="/photoGallery"
            className="mt-8 inline-flex rounded-md bg-lave-blue px-6 py-3 text-base font-bold text-white transition-colors hover:bg-sky-700"
          >
            Explore Our Community
          </Link>
        </div>
      </div>

      {/* Additional Sections */}
        <div className="relative bg-lave-mist">
        <About />
          <CommunityImpact />
        <Blog />
        <AllInOne />
        <Donations />
        <Volunteer />
        <Footer />
      </div>
    </main>
  );
};

export default Hero;