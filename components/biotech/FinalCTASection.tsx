"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Sparkles, Mail, User, Building, MessageSquare, X } from "lucide-react";

export default function FinalCTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "Genomics",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bio-grid-bg overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/15 to-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="bio-glass p-8 sm:p-12 lg:p-16 rounded-3xl border border-emerald-500/30 relative shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START YOUR CLINICAL TRIAL ACCELERATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                Ready to Engineer <span className="text-gradient-bio">The Future?</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Partner with SYNTHIX BIO to integrate our generative proteomics platform and custom LNP vectors into your therapeutic pipeline.
              </p>

              <div className="space-y-4 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24-Hour Confidential NDA & Protocol Assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct Integration with FDA IND Regulatory Guidelines</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Dedicated Bio-Computational Specialist Onboarding</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">FULL NAME</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Dr. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">WORK EMAIL</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="sarah.jenkins@genomics.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">ORGANIZATION / INSTITUTION</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="Stanford Bio-X Institute"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-slate-950/90 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-emerald-400 transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">RESEARCH FOCUS</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-slate-950/90 border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors font-mono"
                  >
                    <option value="Genomics">Generative Proteomics & Base Editing</option>
                    <option value="Screening">High-Throughput Cell Screening</option>
                    <option value="LNP">Targeted LNP Vector Delivery</option>
                    <option value="Clinical">Phase I-III Digital Twin Trials</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 text-slate-950 font-bold text-xs py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 font-mono uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <span>Encrypting & Sending Protocol Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Schedule Protocol Consultation</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Instant Modal Confirmation */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-md w-full p-8 shadow-2xl text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Consultation Transmitted!</h3>
              <p className="text-slate-300 text-xs leading-relaxed font-mono">
                Thank you, <strong className="text-emerald-400">{formData.name}</strong>. Our senior bio-computational director will contact <span className="text-cyan-400">{formData.email}</span> within 24 hours with your customized protocol briefing.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full py-3 bg-emerald-500 text-slate-950 font-bold text-xs rounded-xl font-mono"
              >
                Close Briefing
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
