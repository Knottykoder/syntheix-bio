"use client";

import React, { useState } from "react";
import { Dna, ShieldCheck, MapPin, Mail, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function BiotechFooter() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 4000);
    setNewsletterEmail("");
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <Link href="/biotech" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                <Dna className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
            <span className="font-bold text-base tracking-wider text-white">
              SYNTHIX<span className="text-emerald-400">.BIO</span>
            </span>
          </Link>
          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Pioneering generative proteomics, synthetic base editing, and lipid nanoparticle targeted vectors for next-generation cellular therapeutics.
          </p>

          {/* Compliance Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-emerald-400">
              FDA IND ALIGNED
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-cyan-400">
              ISO 13485 CERTIFIED
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-purple-400">
              GCP / GLP VALIDATED
            </span>
          </div>
        </div>

        {/* Navigation Column */}
        <div className="space-y-3">
          <span className="text-white font-bold text-xs uppercase tracking-wider block mb-2">Platform</span>
          <ul className="space-y-2">
            <li><a href="#innovation" className="hover:text-emerald-400 transition-colors">Generative Proteomics</a></li>
            <li><a href="#technology" className="hover:text-emerald-400 transition-colors">CrisprAI Base Editor</a></li>
            <li><a href="#capabilities" className="hover:text-emerald-400 transition-colors">Cell Screening Assays</a></li>
            <li><a href="#impact" className="hover:text-emerald-400 transition-colors">Impact Telemetry</a></li>
            <li><a href="#sandbox" className="hover:text-emerald-400 transition-colors">Virtual Bio-Lab</a></li>
          </ul>
        </div>

        {/* Global Hubs Column */}
        <div className="space-y-3">
          <span className="text-white font-bold text-xs uppercase tracking-wider block mb-2">Global Hubs</span>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-emerald-400" /> Cambridge, MA (HQ)</li>
            <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> Basel, Switzerland</li>
            <li className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-purple-400" /> Tokyo, Japan</li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-3">
          <span className="text-white font-bold text-xs uppercase tracking-wider block mb-2">Biotech Briefing</span>
          <p className="text-[11px] text-slate-400">
            Subscribe for monthly peer-reviewed clinical research updates.
          </p>
          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                placeholder="researcher@lab.org"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 bg-emerald-500 text-slate-950 rounded-lg hover:bg-emerald-400 transition-colors flex items-center justify-center"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
            {subscribed && (
              <span className="text-[10px] text-emerald-400 block">Subscribed to clinical newsletter!</span>
            )}
          </form>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          © {new Date().getFullYear()} SYNTHIX BIO Inc. All rights reserved. Precision Genomics Matrix.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Return to Main Developer Portfolio
          </Link>
        </div>
      </div>
    </footer>
  );
}
