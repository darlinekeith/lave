import React from "react";
import communityImage from "../assets/img8.webp";

const CommunityImpact = () => {
  return (
    <>
      <section id="where-we-work" className="page-section bg-white">
        <div className="page-container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="section-kicker">Where we work</p>
            <h2 className="section-title">Rooted in Luwero District</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              LAVE is a community-based organization working alongside vulnerable children, elderly people, and families in Luwero District, Uganda.
            </p>
          </div>
          <img
            src={communityImage}
            alt="LAVE community members together"
            className="aspect-[4/3] w-full object-cover"
            width="600"
            height="450"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section id="impact" className="page-section bg-lave-ink text-white">
        <div className="page-container grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">Our impact</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Care that reaches families where they are</h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Through regular visits and tailored support, LAVE has supported more than 20 families.
            </p>
          </div>
          <div className="border-l border-sky-200/40 pl-6">
            <p className="text-5xl font-bold text-sky-200">20+</p>
            <p className="mt-2 max-w-[11rem] text-sm font-semibold uppercase tracking-[0.12em] text-slate-200">Families supported</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommunityImpact;