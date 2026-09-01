import React from "react";
import { FaHandsHelping, FaHeart, FaHome } from "react-icons/fa";

const About = () => {
  const services = [
    {
      title: "Monthly family visits",
      description: "We meet families regularly to understand changing needs and keep support connected to everyday life.",
      icon: FaHome,
    },
    {
      title: "Psycho-social support",
      description: "We offer care and encouragement for vulnerable children, elderly people, and the families supporting them.",
      icon: FaHeart,
    },
    {
      title: "Tailored parenting packages",
      description: "We provide essential parenting packages shaped around the needs of children and their caregivers.",
      icon: FaHandsHelping,
    },
  ];

  return (
    <section id="about" className="page-section bg-lave-mist">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-kicker">What we do</p>
          <h2 className="section-title">Practical support, close to home</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every month, LAVE visits families, listens carefully, and provides support shaped around the needs of children, elderly people, and caregivers.
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
      </div>
    </section>
  );
};

export default About;
