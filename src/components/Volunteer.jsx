import React from "react";
import { FaArrowRight, FaHandsHelping, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { siteContent } from "../data/siteContent";

const Volunteer = () => {
  const subject = "Volunteer inquiry for LAVE Uganda";

  return (
    <section id="volunteer" className="page-section bg-white">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-kicker">Volunteer With Us</p>
          <h2 className="section-title">Share Your Heart: Join the LAVE Family</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Whether you live down the road in Luwero or across the ocean on another continent, there is a warm seat waiting for you at our table. We don't look at volunteers as extra hands—we welcome you as family.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* On the ground in Luwero */}
          <div className="content-card border-l-4 border-lave-blue bg-lave-sky/40">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="h-6 w-6 text-lave-blue" aria-hidden="true" />
              <h3 className="text-xl font-bold text-lave-ink">On the Ground in Luwero</h3>
            </div>
            <p className="mt-3 leading-7 text-slate-600">
              Accompany our care workers down village paths to conduct health checks, mentor youth in vocational trades (tailoring, carpentry, farming), or lead children's reading and art circles.
            </p>
          </div>

          {/* Virtual volunteering */}
          <div className="content-card border-l-4 border-lave-leaf bg-lave-mist">
            <div className="flex items-center gap-3">
              <FaGlobe className="h-6 w-6 text-lave-leaf" aria-hidden="true" />
              <h3 className="text-xl font-bold text-lave-ink">Virtual Volunteering (Global)</h3>
            </div>
            <p className="mt-3 leading-7 text-slate-600">
              Share your skills from anywhere in the world! Help us write field stories, design educational materials, support web development, or lead awareness circles in your local community.
            </p>
          </div>
        </div>

        <div className="mt-10 content-card flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-lave-leaf bg-lave-mist">
          <div className="flex items-start gap-4">
            <FaHandsHelping className="content-icon text-lave-leaf shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-xl font-bold text-lave-ink">Ready to Start a Conversation?</h3>
              <p className="mt-1 leading-7 text-slate-600">
                Email us with a brief note about yourself and how you would love to contribute. We can't wait to meet you!
              </p>
            </div>
          </div>
          <a
            href={`mailto:${siteContent.supportEmail}?subject=${encodeURIComponent(subject)}`}
            className="shrink-0 inline-flex items-center gap-3 rounded-md bg-lave-blue px-6 py-3 text-base font-bold text-white transition-colors hover:bg-sky-700"
          >
            Volunteer with LAVE <FaArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;