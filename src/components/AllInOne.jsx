import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckIcon } from "@heroicons/react/outline";

const values = [
  { title: "Love", description: "Our love is unbound. Empathy and love build a healthy community. We provide care not just for the needy but also for their families who are affected by hardship." },
  { title: "Respect", description: "We deeply admire those we help, promoting Values-Based Leadership within families and communities to inspire awareness of core human values." },
  { title: "Concern for Others", description: "We embrace empathy—understanding how others experience the world. This helps us make better decisions that impact those around us." },
  { title: "Child-Centered", description: "Many Ugandan children lose parents due to conflict or disease. We focus on ensuring their well-being, even in households with minimal income." },
  { title: "Integrity", description: "We uphold high ethical standards, staying fair, objective, and transparent in all our decisions and actions—doing the right thing, even when unseen." },
  { title: "Accountability", description: "We celebrate success and learn from mistakes through open, two-way communication—building trust, confidence, and legitimacy in our work." },
  { title: "Professionalism", description: "We maintain professionalism to instill confidence among beneficiaries and organizations that collaborate with us to provide services." },
  { title: "Healthcare", description: "We advocate for quality healthcare services for all, including the vulnerable, regardless of financial status." }
];

const AllInOne = () => {
  return (
    <section name="values" className="w-full my-24">
      {/* SEO Optimization */}
      <Helmet>
        <title>Our Values - LAVE Uganda</title>
        <meta name="description" content="Discover the core values that guide LAVE Uganda in its mission to support vulnerable communities with love, respect, integrity, and accountability." />
        <meta property="og:title" content="Our Values - LAVE Uganda" />
        <meta property="og:description" content="Learn about LAVE Uganda’s guiding principles and how they shape our impact in the community." />
        <meta property="og:image" content="https://www.laveug.org/assets/values-banner.png" />
      </Helmet>

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Our Values</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our community partners guide us, and our values drive us.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg ml-3 text-gray-900">{value.title}</h3>
              </div>
              <p className="text-gray-600 flex-grow">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
