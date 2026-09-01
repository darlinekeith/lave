import React from "react";
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
    <section id="values" className="page-section bg-white">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-kicker">Our values</p>
          <h2 className="section-title">What guides our work</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our community partners guide us, and our values drive us.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <article
              key={index}
              className="border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center">
                <div className="bg-lave-sky p-2">
                  <CheckIcon className="h-5 w-5 text-lave-leaf" aria-hidden="true" />
                </div>
                <h3 className="ml-3 text-lg font-bold text-lave-ink">{value.title}</h3>
              </div>
              <p className="mt-4 leading-7 text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
