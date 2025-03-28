import React from "react";
import { Helmet } from "react-helmet-async";
import { FaHandsHelping, FaClock, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section name="about" className="w-full py-24 bg-gradient-to-r from-white via-gray-100 to-white">
      {/* SEO Optimization */}
      <Helmet>
        <title>How We Work - LAVE Uganda</title>
        <meta name="description" content="Discover how LAVE Uganda supports children and elderly beneficiaries through home visits, psycho-social support, and tailored parenting packages." />
        <meta property="og:title" content="How We Work - LAVE Uganda" />
        <meta property="og:description" content="Learn how LAVE Uganda provides monthly home visits, psycho-social support, and tailored caregiving packages for vulnerable families." />
        <meta property="og:image" content="https://www.laveug.org/assets/about-banner.png" />
      </Helmet>

      <div className="max-w-6xl mx-auto px-6">
        {/* Text Content */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">How We Work</h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Every month, we visit families to provide <strong>psycho-social support</strong>, assess their needs, and deliver essential parenting packages tailored to both children and caregivers.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/** Stat Card 1 */}
          <div className="bg-white border py-10 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-6xl text-indigo-600" />
            </div>
            <p className="text-5xl font-bold text-indigo-600 mb-2">100%</p>
            <p className="text-gray-700 font-medium">Impact Delivery</p>
          </div>

          {/** Stat Card 2 */}
          <div className="bg-white border py-10 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <FaClock className="text-6xl text-indigo-600" />
            </div>
            <p className="text-5xl font-bold text-indigo-600 mb-2">24/7</p>
            <p className="text-gray-700 font-medium">Commitment</p>
          </div>

          {/** Stat Card 3 */}
          <div className="bg-white border py-10 px-6 rounded-2xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-6xl text-indigo-600" />
            </div>
            <p className="text-5xl font-bold text-indigo-600 mb-2">20+</p>
            <p className="text-gray-700 font-medium">Families Supported</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
