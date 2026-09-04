import React, { useEffect, useRef, useState } from "react";
import { FaHandHoldingHeart, FaRegHeart, FaUsers, FaUserGraduate } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { siteContent } from "../data/siteContent";

const Donations = () => {
  const [pendingAction, setPendingAction] = useState(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const supportOptions = [
    {
      title: "Sponsor a Child's Future",
      description: "Walk alongside a vulnerable child in Luwero. Your sponsorship covers school fees, books, uniforms, daily nutrition, and practical vocational training.",
      icon: FaUserGraduate,
      action: "sponsor_child",
      cta: "Sponsor a Child",
    },
    {
      title: "Support an Aging Elder",
      description: "Ensure a grandmother or grandfather spends their golden years wrapped in dignity. Provides home healthcare visits, wound care, hygiene items, and warm meals.",
      icon: FaHandHoldingHeart,
      action: "support_elder",
      cta: "Support an Elder",
    },
    {
      title: "Direct Family Donation",
      description: "Fuels our doorstep monthly visits. Provides soap, maize flour, blankets, solar lamps, and medical check-up kits directly to our 20+ partner households.",
      icon: FaRegHeart,
      action: "donate",
      cta: "Make a Donation",
    },
    {
      title: "Volunteer Your Heart",
      description: "Whether locally in Luwero or virtually from anywhere in the world, offer your skills, time, and encouragement to support our community family.",
      icon: FaUsers,
      action: "volunteer",
      cta: "Learn About Volunteering",
    },
  ];

  useEffect(() => {
    if (!pendingAction) {
      return undefined;
    }

    previousFocusRef.current = document.activeElement;
    closeButtonRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setPendingAction(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [pendingAction]);

  const handleSupportAction = (action) => {
    if (action === "volunteer") {
      window.location.hash = "volunteer";
      return;
    }

    if (siteContent.goFundMeLinks && siteContent.goFundMeLinks[action]) {
      window.open(siteContent.goFundMeLinks[action], "_blank", "noopener,noreferrer");
      return;
    }

    setPendingAction(action);
  };

  return (
    <section id="donations" className="page-section bg-lave-sky">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-kicker">How You Can Help</p>
          <h2 className="section-title">Walk With Us: You Are Family Here</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            LAVE is not funded by massive corporate grants. We exist because kind, big-hearted people like you decide that a child in Luwero deserves a uniform, or an elderly grandmother deserves a warm meal. Every dollar goes straight from your heart to a real family's table.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article key={option.action} className="content-card flex min-h-[320px] flex-col justify-between border-sky-200">
                <div>
                  <Icon className="content-icon text-lave-blue" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-bold text-lave-ink">{option.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{option.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleSupportAction(option.action)}
                  className="mt-8 inline-flex justify-center rounded-md bg-lave-blue px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700"
                >
                  {option.cta}
                </button>
              </article>
            );
          })}
        </div>

        {/* Giving Impact Tiers */}
        <div className="mt-12 rounded-xl bg-white p-8 border border-sky-200 shadow-sm">
          <h3 className="text-xl font-bold text-lave-ink">How Your Support Brings Life Again</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-lave-mist p-5">
              <p className="text-lg font-bold text-lave-ink">Monthly Family Food & Hygiene Kit</p>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">Provides essential maize flour, beans, soap, and household sanitation items for a struggling family.</p>
            </div>
            <div className="rounded-lg bg-lave-mist p-5">
              <p className="text-lg font-bold text-lave-ink">Elderly Healthcare & Home Care</p>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">Covers home health visits, wound dressings, vitals monitoring, and pain relief for aging elders.</p>
            </div>
            <div className="rounded-lg bg-lave-mist p-5">
              <p className="text-lg font-bold text-lave-ink">Bicycles & School Transport for Youth</p>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">Equips youth and students with bicycles so they don't have to walk long miles to school or vocational training.</p>
            </div>
          </div>
        </div>
      </div>

      {pendingAction && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-5" role="presentation">
          <div className="w-full max-w-md rounded-md bg-white p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="giving-dialog-title">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="section-kicker">Giving with LAVE</p>
                <h2 id="giving-dialog-title" className="mt-3 text-2xl font-bold text-lave-ink">Online Giving Is Being Prepared</h2>
              </div>
              <button ref={closeButtonRef} type="button" onClick={() => setPendingAction(null)} className="-mr-2 -mt-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100" aria-label="Close giving dialog">
                <HiX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-5 leading-7 text-slate-600">
              Our direct online donation link is being updated. In the meantime, please send us an email to arrange support directly for a family, child, or elder in Luwero.
            </p>
            <a href={`mailto:${siteContent.supportEmail}?subject=${encodeURIComponent("Support inquiry for LAVE Uganda")}`} className="mt-7 inline-flex rounded-md bg-lave-blue px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700">
              Email LAVE Uganda
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donations;
