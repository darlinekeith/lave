import React from "react";
import { FaHandsHelping, FaHeart, FaHome, FaTools } from "react-icons/fa";

const About = () => {
  const services = [
    {
      title: "Support for Orphans & Children",
      description: "In rural Uganda, a child's future begins with a neat uniform, a new notebook, and a warm meal. We provide school fees, emotional counseling, and practical vocational training so children can walk into the future with pride.",
      icon: FaHeart,
    },
    {
      title: "Home Health Care for Elders",
      description: "Our grandmothers and grandfathers deserve to age in dignity. Our community care workers make bedside visits—checking vitals, cleaning wounds, delivering fresh foodstuffs, and sharing warm human companionship.",
      icon: FaHome,
    },
    {
      title: "Family & Community Empowerment",
      description: "True healing embraces the whole household. We partner with heroic grandmothers, widowed mothers, and young caregivers—offering monthly care packages, agricultural starter kits, and child protection workshops.",
      icon: FaHandsHelping,
    },
  ];

  const trades = [
    "Tailoring & Garment Design",
    "Carpentry & Joinery",
    "Poultry & Piggery Farming",
    "Hairdressing & Beauty Therapy",
    "Bakery & Culinary Arts",
  ];

  return (
    <section id="about" className="page-section bg-lave-mist">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-kicker">What we do</p>
          <h2 className="section-title">Simple Acts of Care, Lifelong Ripples of Hope</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            We don't wait for people to come to an office. We walk directly to their doorsteps down red-dirt paths, pull up a straw mat on their verandas, and listen deeply. Every month, LAVE shapes care around the real needs of children, elders, and caregivers.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article key={service.title} className="content-card">
                <Icon className="content-icon text-lave-blue" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-lave-ink">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>

        {/* Vocational Trades Feature */}
        <div className="mt-12 rounded-xl bg-white p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3">
            <FaTools className="h-6 w-6 text-lave-blue" aria-hidden="true" />
            <h3 className="text-xl font-bold text-lave-ink">Practical Vocational Skills Trades for Youth Self-Reliance</h3>
          </div>
          <p className="mt-3 text-slate-600 leading-7">
            To ensure out-of-school youth and older vulnerable children build sustainable livelihoods, we offer practical apprenticeships in hands-on trades:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trades.map((trade) => (
              <div key={trade} className="flex items-center gap-2 rounded-lg bg-lave-sky px-4 py-3 text-sm font-semibold text-lave-ink">
                <span className="h-2 w-2 rounded-full bg-lave-blue"></span>
                {trade}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
