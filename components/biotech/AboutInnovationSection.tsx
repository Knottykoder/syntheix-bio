"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dna, ShieldAlert, Cpu, Sparkles, Binary, CheckCircle2, ChevronRight } from "lucide-react";

export default function AboutInnovationSection() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      title: "Generative Proteomics Matrix",
      subtitle: "De novo protein design powered by deep transformer networks",
      icon: Cpu,
      accentColor: "emerald",
      badge: "AI Folding Model V4",
      description:
        "Our deep learning matrix predicts 3D protein tertiary structures with sub-angstrom precision in seconds. We bypass years of lab trial-and-error by generating novel therapeutic enzymes mapped directly to disease targets.",
      metrics: [
        { label: "Predictive Accuracy", value: "99.4%" },
        { label: "Synthesis Speed", value: "100x" },
        { label: "Target Affinity", value: "< 0.2 nM" },
      ],
    },
    {
      id: 1,
      title: "Targeted Epigenetic Rewriting",
      subtitle: "Off-target-free CRISPR base editing without double-strand breaks",
      icon: Dna,
      accentColor: "cyan",
      badge: "Zero DSB Breaks",
      description:
        "By fusing engineered catalytic cytidine deaminases with ultra-specific guide RNAs, our platforms modify single nucleotide polymorphism (SNP) mutations without cutting the DNA backbone or triggering p53 stress responses.",
      metrics: [
        { label: "Off-Target Rate", value: "< 0.001%" },
        { label: "Base Conversion", value: "94.8%" },
        { label: "Cellular Viability", value: "98.2%" },
      ],
    },
    {
      id: 2,
      title: "Nanobio Vector Delivery",
      subtitle: "Organ-selective lipid nanoparticle vectors engineered for systemic delivery",
      icon: Binary,
      accentColor: "purple",
      badge: "Tissue Specific",
      description:
        "Overcoming the ultimate bio-barrier: targeted systemic payload delivery. Our bio-compatible LNPs dynamically bind cell-surface receptor signatures for targeted cardiac, neural, and oncological cell penetration.",
      metrics: [
        { label: "Liver Clearance", value: "90% Bypass" },
        { label: "Tissue Specificity", value: "88.6%" },
        { label: "Immune Evasion", value: "Optimal" },
      ],
    },
  ];

  return (
    <section id="innovation" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/60">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR SCIENTIFIC BREAKTHROUGH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Rewriting the Blueprint of <span className="text-gradient-cyan">Modern Medicine</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Traditional drug discovery relies on screen-and-test serendipity. SYNTHIX merges computational biology, AI transformer models, and synthetic chemistry to engineer atomic-level cellular solutions.
          </motion.p>
        </div>

        {/* Interactive 3-Pillar Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Card Selectors List (Left 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeCard === idx;
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setActiveCard(idx)}
                  className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-slate-900/90 border-emerald-500/50 shadow-xl shadow-emerald-500/10 translate-x-2"
                      : "bg-slate-950/40 border-slate-800/80 hover:bg-slate-900/40 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl ${
                        isActive
                          ? "bg-gradient-to-tr from-emerald-500 to-cyan-500 text-slate-950"
                          : "bg-slate-900 text-emerald-400 border border-slate-800"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="font-bold text-lg text-white">{pillar.title}</h3>
                        <ChevronRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isActive ? "text-emerald-400 rotate-90" : "text-slate-600"
                          }`}
                        />
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-2">{pillar.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Detail Showcase Panel (Right 7 Columns) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bio-glass p-8 rounded-3xl border border-emerald-500/30 h-full flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Dna className="w-48 h-48 text-emerald-400" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono border border-emerald-500/30">
                    {pillars[activeCard].badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500">SYSTEM STAGE 0{activeCard + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{pillars[activeCard].title}</h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-8">
                  {pillars[activeCard].description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">
                  PERFORMANCE TELEMETRY
                </h4>
                <div className="grid grid-cols-3 gap-4 bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  {pillars[activeCard].metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <span className="block text-xl sm:text-2xl font-bold text-emerald-400">
                        {m.value}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 mt-1 block">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
