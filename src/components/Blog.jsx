import React from "react";
import { FaUserTie, FaPhoneAlt, FaTasks } from "react-icons/fa";
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
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">Who we are</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A community organization built on care</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">
            LAVE Uganda is an independent, non-political, non-denominational, 
            community-based, gender-sensitive nonprofit. Our mission is to improve 
            the lives of vulnerable children and the elderly in Luwero District, Uganda.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden border border-white/20 bg-white/20 md:grid-cols-3">
          <article className="bg-white p-7 text-lave-ink">
            <FaUserTie className="h-8 w-8 text-lave-blue" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold">Founder</h3>
            <p className="mt-3 leading-7 text-slate-600">The founder of LAVE Uganda is Dennis Lwanga.</p>
            <a href="tel:+18576150516" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lave-blue hover:text-sky-700">
              Contact <HiArrowNarrowRight aria-hidden="true" />
            </a>
          </article>
          <article className="bg-white p-7 text-lave-ink">
            <FaPhoneAlt className="h-8 w-8 text-lave-blue" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold">Chairperson</h3>
            <p className="mt-3 leading-7 text-slate-600">Our chairperson is Mitanda Darline Lwanga.</p>
            <a href="tel:+256773443986" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lave-blue hover:text-sky-700">
              Contact <HiArrowNarrowRight aria-hidden="true" />
            </a>
          </article>
          <article className="bg-white p-7 text-lave-ink">
            <FaTasks className="h-8 w-8 text-lave-blue" aria-hidden="true" />
            <h3 className="mt-5 text-xl font-bold">Program coordinator</h3>
            <p className="mt-3 leading-7 text-slate-600">Sebwami Ismael oversees program development.</p>
            <a href="tel:+256777108294" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-lave-blue hover:text-sky-700">
              Contact <HiArrowNarrowRight aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Blog;
