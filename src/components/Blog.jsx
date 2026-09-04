import React from "react";
import { FaUserTie, FaPhoneAlt, FaTasks, FaBullseye, FaEye } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";
import supportImg from "../assets/pexels-shelagh-murphy-2883380.jpg";

const Blog = () => {
  return (
    <section id="who-we-are" className="relative overflow-hidden bg-lave-ink py-16 md:py-20">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover opacity-20"
          src={supportImg}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-lave-ink/90"></div>
      </div>

      <div className="page-container relative z-10 px-5 text-white sm:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker-dark">Who We Are</p>
          <h2 className="section-title-dark">A Family Born from Love and Deep Devotion</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            LAVE began not with a corporate budget, but with a deeply compassionate heart. Growing up in Luwero District, founder <strong>Dennis Lwanga</strong> witnessed a silent crisis: orphaned children left without schooling or parental care, hero grandmothers raising five grandchildren on a single meal a day, and aging elders suffering alone in leaky huts. 
          </p>
          <p className="mt-4 text-slate-300 leading-7">
            Dennis believed with all his heart that no human being is disposable. LAVE was founded to say to every struggling child and elder: <em>"You are not forgotten. You are loved, and together we will find life again."</em>
          </p>
          <p className="mt-4 text-xs font-mono text-sky-200 uppercase tracking-widest">
            Registered CBO in Luwero District, Uganda — Reg. No: DNMC/1144
          </p>
        </div>

        {/* Vision & Mission Highlight */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm border border-white/15">
            <div className="flex items-center gap-3">
              <FaEye className="h-6 w-6 text-sky-300" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white">Our Vision</h3>
            </div>
            <p className="mt-3 text-slate-200 leading-7">
              To mitigate the effects of human vulnerability for holistic, sustainable rural development.
            </p>
          </div>
          <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm border border-white/15">
            <div className="flex items-center gap-3">
              <FaBullseye className="h-6 w-6 text-sky-300" aria-hidden="true" />
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="mt-3 text-slate-200 leading-7">
              A healthy and secure society for all, regardless of circumstances.
            </p>
          </div>
        </div>

        {/* Leadership Team Cards */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Our Leadership Team</h3>
          <div className="grid gap-px overflow-hidden border border-white/20 bg-white/20 md:grid-cols-3">
            <article className="content-card text-lave-ink">
              <FaUserTie className="content-icon text-lave-blue" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold">Dennis Lwanga</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-lave-blue mt-1">Founder</p>
              <p className="mt-3 leading-7 text-slate-600">
                Driven by a lifelong calling to turn rural sorrow into hope, Dennis leads our community outreach with quiet strength and empathy.
              </p>
              <a href="tel:+18576150516" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lave-blue hover:text-sky-700">
                Contact Founder <HiArrowNarrowRight aria-hidden="true" />
              </a>
            </article>
            <article className="content-card text-lave-ink">
              <FaPhoneAlt className="content-icon text-lave-blue" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold">Mitanda Darline Lwanga</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-lave-blue mt-1">Chairperson</p>
              <p className="mt-3 leading-7 text-slate-600">
                Guiding our governance, vision, and community partnerships with unwavering grace and deep devotion.
              </p>
              <a href="tel:+256773443986" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lave-blue hover:text-sky-700">
                Contact Chairperson <HiArrowNarrowRight aria-hidden="true" />
              </a>
            </article>
            <article className="content-card text-lave-ink">
              <FaTasks className="content-icon text-lave-blue" aria-hidden="true" />
              <h3 className="mt-5 text-xl font-bold">Sebwami Ismael</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-lave-blue mt-1">Program Coordinator</p>
              <p className="mt-3 leading-7 text-slate-600">
                Managing ground operations, home health visits, and program delivery with care and efficiency across Luwero.
              </p>
              <a href="tel:+256777108294" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lave-blue hover:text-sky-700">
                Contact Coordinator <HiArrowNarrowRight aria-hidden="true" />
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
