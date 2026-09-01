import React from "react";
import { FaArrowRight, FaHandsHelping } from "react-icons/fa";
import { siteContent } from "../data/siteContent";

const Volunteer = () => {
  const subject = "Volunteer inquiry for LAVE Uganda";

  return (
    <section id="volunteer" className="page-section bg-white">
      <div className="page-container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="max-w-2xl">
          <p className="section-kicker">Volunteer with us</p>
          <h2 className="section-title">Bring your time and care to the community</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            LAVE welcomes people who want to contribute their skills, energy, and compassion to support vulnerable children, elderly people, and families.
          </p>
        </div>
        <div className="content-card border-l-4 border-lave-leaf bg-lave-mist">
          <FaHandsHelping className="content-icon text-lave-leaf" aria-hidden="true" />
          <h3 className="mt-5 text-xl font-bold text-lave-ink">Start a conversation</h3>
          <p className="mt-3 leading-7 text-slate-600">Email LAVE to share how you would like to get involved.</p>
          <a
            href={`mailto:${siteContent.supportEmail}?subject=${encodeURIComponent(subject)}`}
            className="mt-6 inline-flex items-center gap-3 rounded-md bg-lave-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700"
          >
            Volunteer with LAVE <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;