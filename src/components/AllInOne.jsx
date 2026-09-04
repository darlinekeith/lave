import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const values = [
  { 
    title: "Love (Unbound & Generous)", 
    description: "Our love has no boundaries. Empathy and love build a healthy, resilient community. We provide care not just for the person in front of us, but extend our arms to embrace their entire family." 
  },
  { 
    title: "Respect (Honor & Dignity)", 
    description: "We deeply admire the resilience of those we help. We treat every child and grandmother as an honored equal, promoting values-based leadership within families." 
  },
  { 
    title: "Concern for Others", 
    description: "We actively step into other people's shoes. Understanding how our neighbors experience hardship helps us make thoughtful, gentle, and effective decisions." 
  },
  { 
    title: "Child-Centered Focus", 
    description: "Children are the heart of our community. In a region where disease and conflict take parents too soon, we prioritize child protection, education, and joy." 
  },
  { 
    title: "Integrity in Unseen Acts", 
    description: "We uphold the highest ethical standards. We do what is right simply because it is right, honoring the trust placed in us by our beneficiaries and supporters." 
  },
  { 
    title: "Accountability & Openness", 
    description: "We celebrate our successes and humbly learn from our mistakes through open, two-way communication with our community and partners." 
  },
  { 
    title: "Professionalism & Trust", 
    description: "We maintain high standards of safety, healthcare monitoring, and care to instill lasting confidence among beneficiaries and partner organizations." 
  },
  { 
    title: "Healthcare for Everyone", 
    description: "We advocate passionately for quality healthcare services for all, believing that wellness and medical attention should never depend on financial status." 
  }
];

const AllInOne = () => {
  return (
    <section id="values" className="page-section bg-white">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-kicker">Our core values</p>
          <h2 className="section-title">The Pillars of Our House</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our values are not written on cold office walls; they are living principles that direct how we talk to a child, comfort an elder, and honor every shilling entrusted to us.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <article
              key={index}
              className="content-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center">
                  <div className="bg-lave-sky p-2 rounded-md">
                    <CheckIcon className="h-5 w-5 text-lave-leaf" aria-hidden="true" />
                  </div>
                  <h3 className="ml-3 text-lg font-bold text-lave-ink">{value.title}</h3>
                </div>
                <p className="mt-4 leading-7 text-slate-600">{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
