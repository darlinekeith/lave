import React, { useEffect, useRef, useState } from "react";
import { FaHandHoldingHeart, FaRegHeart, FaUsers } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { siteContent } from "../data/siteContent";

const Donations = () => {
  const [pendingAction, setPendingAction] = useState(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  const supportOptions = [
    {
      title: "Sponsor a family",
      description: "Help LAVE continue regular visits and tailored support for vulnerable families.",
      icon: FaHandHoldingHeart,
      action: "sponsor",
    },
    {
      title: "Make a donation",
      description: "Your gift helps LAVE respond to the needs of children, elderly people, and caregivers.",
      icon: FaRegHeart,
      action: "donate",
    },
    {
      title: "Volunteer with us",
      description: "Get in touch to learn about practical ways to support LAVE's community work.",
      icon: FaUsers,
      action: "volunteer",
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
      const subject = "Volunteer inquiry for LAVE Uganda";
      window.location.href = `mailto:${siteContent.supportEmail}?subject=${encodeURIComponent(subject)}`;
      return;
    }

    if (siteContent.goFundMeLinks[action]) {
      window.open(siteContent.goFundMeLinks[action], "_blank", "noopener,noreferrer");
      return;
    }

    setPendingAction(action);
  };

  return (
    <section id="donations" className="page-section bg-lave-sky">
      <div className="page-container">
        <div className="max-w-3xl">
          <p className="section-kicker">How you can help</p>
          <h2 className="section-title">There is a role for everyone</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Partner with LAVE to help strengthen care and opportunity for vulnerable people in our community.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {supportOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article key={option.action} className="flex min-h-72 flex-col border border-sky-200 bg-white p-7">
                <Icon className="h-8 w-8 text-lave-blue" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold text-lave-ink">{option.title}</h3>
                <p className="mt-3 flex-grow leading-7 text-slate-600">{option.description}</p>
              <button
                type="button"
                onClick={() => handleSupportAction(option.action)}
                className="mt-8 inline-flex justify-center rounded-md bg-lave-blue px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700"
              >
                {option.action === "volunteer" ? "Contact LAVE" : option.title}
              </button>
              </article>
            );
          })}
        </div>
      </div>

      {pendingAction && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-5" role="presentation">
          <div className="w-full max-w-md rounded-md bg-white p-7 shadow-2xl" role="dialog" aria-modal="true" aria-labelledby="giving-dialog-title">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="section-kicker">Giving with LAVE</p>
                <h2 id="giving-dialog-title" className="mt-3 text-2xl font-bold text-lave-ink">Online giving is being prepared</h2>
              </div>
              <button ref={closeButtonRef} type="button" onClick={() => setPendingAction(null)} className="-mr-2 -mt-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100" aria-label="Close giving dialog">
                <HiX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-5 leading-7 text-slate-600">
              The LAVE {pendingAction === "sponsor" ? "sponsorship" : "donation"} link will be available here soon. Please contact LAVE to discuss support in the meantime.
            </p>
            <a href={`mailto:${siteContent.supportEmail}?subject=${encodeURIComponent("Support inquiry for LAVE Uganda")}`} className="mt-7 inline-flex rounded-md bg-lave-blue px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700">
              Email LAVE
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Donations;
