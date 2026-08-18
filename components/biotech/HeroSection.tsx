"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Dna, ShieldCheck, Cpu, Zap, Activity } from "lucide-react";
import CanvasMoleculeVisualizer from "./CanvasMoleculeVisualizer";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden bio-grid-bg">
      {/* Background bioluminescent glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          {/* Bioluminescent Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md mb-6 shadow-lg shadow-emerald-500/10">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-mono text-emerald-300 tracking-wide">
              SYNTHIX V4.2 ENGINE RELEASED
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Engineering the Next Century of{" "}
            <span className="text-gradient-bio">Cellular Medicine</span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
            Pioneering AI-driven generative proteomics, nanobot therapeutic vectors, and precision epigenetic synthesis to cure previously intractable genetic conditions.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#technology"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-400 via-emerald-500 to-cyan-500 hover:from-emerald-300 hover:to-cyan-400 text-slate-950 font-bold text-sm px-7 py-4 rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Research Engine</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#sandbox"
              className="flex items-center justify-center gap-2.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm px-7 py-4 rounded-2xl border border-slate-700 hover:border-emerald-500/40 transition-all duration-300 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Try Virtual Bio-Lab</span>
            </a>
          </div>

          {/* Live Telemetry Mini Ticker */}
          <div className="w-full grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80 font-mono">
            <div>
              <span className="block text-xl font-bold text-emerald-400">14.2M+</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Screened Compounds</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-cyan-400">99.8%</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Target Precision</span>
            </div>
            <div>
              <span className="block text-xl font-bold text-purple-400">4.2x</span>
              <span className="text-[11px] text-slate-400 uppercase tracking-wider">Trial Speedup</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Canvas Molecule Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 relative"
        >
          {/* Ambient Glow behind canvas */}
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-70 pointer-events-none" />

          {/* Canvas Component */}
          <CanvasMoleculeVisualizer height="h-[460px] sm:h-[520px]" colorScheme="emerald" />

          {/* Floating Micro-Badges */}
          <div className="absolute -top-4 -right-2 hidden sm:flex items-center gap-2 bg-slate-950/90 border border-emerald-500/30 px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-xl text-xs font-mono text-emerald-300">
            <Cpu className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Quantum Fold Neural Net: 100%</span>
          </div>

          <div className="absolute -bottom-4 -left-2 hidden sm:flex items-center gap-2 bg-slate-950/90 border border-cyan-500/30 px-3.5 py-2 rounded-2xl shadow-xl backdrop-blur-xl text-xs font-mono text-cyan-300">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>FDA Phase II Validation</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
