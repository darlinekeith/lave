import React, { useState } from 'react';

import {
    FaFacebook,
    FaInstagram,
  FaArrowUp,
  FaEnvelope
} from 'react-icons/fa';
import { siteContent } from "../data/siteContent";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalizedEmail = email.trim();

    if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) {
      setMessage("Enter a valid email address.");
      return;
    }

    setMessage("Thanks. Newsletter signups will be connected soon.");
    setEmail("");
  };

  return (
    <footer className="bg-lave-ink px-5 py-14 text-white sm:px-8">
      <div className="page-container grid gap-12 border-b border-white/20 pb-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">Stay connected</p>
          <h2 className="mt-3 text-2xl font-bold">Join the LAVE newsletter</h2>
          <p className="mt-3 max-w-md leading-7 text-slate-200">Receive occasional updates about LAVE and its community work.</p>
          <form onSubmit={handleSubmit} className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row" noValidate>
            <label className="sr-only" htmlFor="newsletter-email">Email address</label>
            <input id="newsletter-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" className="min-w-0 flex-1 rounded-md border border-white/20 bg-white px-4 py-3 text-lave-ink placeholder:text-slate-500" />
            <button type="submit" className="rounded-md bg-lave-blue px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700">Subscribe</button>
          </form>
          {message && <p className="mt-3 text-sm text-sky-100" role="status">{message}</p>}
        </div>
        <div className="md:justify-self-end">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-sky-200">Contact</p>
          <a href={`mailto:${siteContent.supportEmail}`} className="mt-4 inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-sky-200">
            <FaEnvelope aria-hidden="true" />
            Email LAVE
          </a>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="LAVE on Facebook" className="text-2xl text-white hover:text-sky-200"><FaFacebook aria-hidden="true" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="LAVE on Instagram" className="text-2xl text-white hover:text-sky-200"><FaInstagram aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div className="page-container flex flex-col gap-5 pt-7 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} LAVE Uganda. All rights reserved.</p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex w-fit items-center gap-2 font-semibold text-white hover:text-sky-200">
          Back to top <FaArrowUp aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;