"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Activity, Sliders, TrendingUp, Sparkles, Award, ShieldCheck } from "lucide-react";

export default function ImpactStatsSection() {
  const [moleculeCount, setMoleculeCount] = useState<number>(500);

  // Dynamic calculations based on slider
  const predictedLeads = Math.round(moleculeCount * 0.024);
  const timeSavedMonths = Math.round((moleculeCount / 50) * 1.8);
  const costReduction = Math.round(35 + (moleculeCount / 1000) * 45);

  const stats = [
    { label: "Target Specificity Rate", value: "99.8%", desc: "Sub-nanomolar affinity precision" },
    { label: "Molecules Screened", value: "14.2M+", desc: "Across 24 therapeutic classes" },
    { label: "Phase II Clinical Speedup", value: "4.2x", desc: "Digital twin patient stratification" },
    { label: "Off-Target Toxicity", value: "< 0.001%", desc: "Verified via single-cell RNA-seq" },
  ];

  return (
    <section id="impact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bio-grid-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>MEASURABLE CLINICAL IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Transforming Discovery <span className="text-gradient-cyan">By The Numbers</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Our platform systematically eliminates key bottlenecks in early-stage therapeutic pipelines, drastically lowering trial risks and acceleration costs.
          </p>
        </div>

        {/* 4 Big Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bio-glass p-8 rounded-3xl text-center border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <span className="block text-4xl sm:text-5xl font-black text-gradient-bio mb-2 group-hover:scale-105 transition-transform">
                {stat.value}
              </span>
              <span className="block text-sm font-bold text-white mb-1">{stat.label}</span>
              <span className="block text-xs font-mono text-slate-400">{stat.desc}</span>
            </motion.div>
          ))}
        </div>

        {/* Interactive Impact Simulator Sandbox */}
        <div className="bio-glass p-8 sm:p-10 rounded-3xl border border-emerald-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Interactive Trial Acceleration Simulator</h3>
              </div>
              <p className="text-xs text-slate-400">
                Adjust the compound screening volume slider to view projected lead candidates and clinical time saved.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-mono text-emerald-400">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>SYNTHIX ALGORITHM ACTIVE</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Control (Left 6 Columns) */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-3 font-mono text-xs">
                  <span className="text-slate-300">Screening Library Scale:</span>
                  <span className="text-emerald-400 font-bold text-sm">{moleculeCount.toLocaleString()} k Compounds</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="1000"
                  step="25"
                  value={moleculeCount}
                  onChange={(e) => setMoleculeCount(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2">
                  <span>50k (Pilot Assay)</span>
                  <span>500k (Standard Batch)</span>
                  <span>1,000k (Full Matrix)</span>
                </div>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center justify-between">
                  <span>Estimated Wet-Lab Savings:</span>
                  <span className="text-white font-bold font-mono">${(moleculeCount * 3.4).toFixed(0)}k USD</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>In-silico Binding Confidence:</span>
                  <span className="text-emerald-400 font-bold font-mono">99.4%</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Metrics (Right 6 Columns) */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-4 font-mono">
              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center">
                <span className="text-slate-400 text-[10px] uppercase block mb-1">PROJECTED LEADS</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">{predictedLeads}</span>
                <span className="text-[10px] text-slate-500 block mt-1">High Affinity</span>
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center">
                <span className="text-slate-400 text-[10px] uppercase block mb-1">TIME SAVED</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400 block">{timeSavedMonths} mo</span>
                <span className="text-[10px] text-slate-500 block mt-1">Phase I-II Bypass</span>
              </div>

              <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center">
                <span className="text-slate-400 text-[10px] uppercase block mb-1">COST REDUCTION</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-purple-400 block">{costReduction}%</span>
                <span className="text-[10px] text-slate-500 block mt-1">Capital Saved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
