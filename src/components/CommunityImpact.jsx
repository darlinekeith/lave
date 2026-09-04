import React from "react";
import communityImage from "../assets/img8.webp";

const CommunityImpact = () => {
  return (
    <>
      <section id="where-we-work" className="page-section bg-white">
        <div className="page-container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker">Where we work</p>
            <h2 className="section-title">Rooted in Butuntumula Village, Luwero District</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Our sanctuary is Butuntumula village, sub-county, Luwero District, Central Uganda. We are not an overarching international agency; we are your neighbors. Registered as CBO Reg. No: <strong className="font-semibold text-lave-ink">DNMC/1144</strong>, we work shoulder-to-shoulder with local village elders, health workers, and caregivers to ensure every dollar directly transforms a real home on our soil.
            </p>
          </div>
          <img
            src={communityImage}
            alt="LAVE community members together in Butuntumula village"
            className="content-image"
            width="600"
            height="450"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section id="impact" className="page-section bg-lave-ink text-white">
        <div className="page-container grid items-center gap-8 md:grid-cols-[1fr_auto_auto]">
          <div className="max-w-xl">
            <p className="section-kicker-dark">Our impact</p>
            <h2 className="section-title-dark">Every Visit Counts. Every Smile Matters.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              We may be small, but our commitment is boundless. Because we know every family by name, every act of support creates lasting, quiet ripples of transformation.
            </p>
          </div>
          <div className="border-l border-sky-200/40 pl-6">
            <p className="text-5xl font-bold text-sky-200">20+</p>
            <p className="mt-2 max-w-[11rem] text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">Families Supported</p>
          </div>
          <div className="border-l border-sky-200/40 pl-6">
            <p className="text-5xl font-bold text-sky-200">100+</p>
            <p className="mt-2 max-w-[11rem] text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">Lives Transformed</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityImpact;