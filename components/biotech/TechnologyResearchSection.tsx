"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Dna, Activity, RotateCcw, Zap, Sparkles, Check, Play } from "lucide-react";

export default function TechnologyResearchSection() {
  const [activeTab, setActiveTab] = useState<"crispr" | "folding" | "delivery">("crispr");
  
  // Interactive Base Sequence Simulator State
  const initialSequence = ["A", "T", "G", "C", "C", "G", "A", "T", "T", "A", "C", "G"];
  const [sequence, setSequence] = useState<string[]>(initialSequence);
  const [mutatedIndex, setMutatedIndex] = useState<number | null>(null);

  const handleBaseChange = (index: number) => {
    const bases = ["A", "T", "C", "G"];
    const current = sequence[index];
    const nextBase = bases[(bases.indexOf(current) + 1) % bases.length];
    
    const newSeq = [...sequence];
    newSeq[index] = nextBase;
    setSequence(newSeq);
    setMutatedIndex(index);

    setTimeout(() => setMutatedIndex(null), 1000);
  };

  const handleResetSeq = () => {
    setSequence(initialSequence);
    setMutatedIndex(null);
  };

  // Compute live affinity score based on sequence hydrogen bonds (GC = 3 bonds, AT = 2 bonds)
  const gcCount = sequence.filter((b) => b === "G" || b === "C").length;
  const stabilityScore = Math.round((gcCount / sequence.length) * 100);

  return (
    <section id="technology" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bio-dots-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
              <Cpu className="w-3.5 h-3.5" />
              <span>SYNTHIX PLATFORM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Proprietary <span className="text-gradient-bio">Research Engines</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed">
            Our multi-modal technological stack bridges structural biology, deep neural networks, and microfluidic synthesis.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-slate-800/80 pb-4">
          <button
            onClick={() => setActiveTab("crispr")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-mono text-xs sm:text-sm transition-all duration-300 ${
              activeTab === "crispr"
                ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/25 scale-105"
                : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800"
            }`}
          >
            <Dna className="w-4 h-4" />
            <span>01. CrisprAI Base Editor</span>
          </button>

          <button
            onClick={() => setActiveTab("folding")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-mono text-xs sm:text-sm transition-all duration-300 ${
              activeTab === "folding"
                ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/25 scale-105"
                : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800"
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>02. Quantum Proteome Folding</span>
          </button>

          <button
            onClick={() => setActiveTab("delivery")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-mono text-xs sm:text-sm transition-all duration-300 ${
              activeTab === "delivery"
                ? "bg-purple-500 text-slate-950 font-bold shadow-lg shadow-purple-500/25 scale-105"
                : "bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-800"
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>03. LNP Delivery Matrix</span>
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Info Box */}
          <div className="lg:col-span-6 space-y-6">
            {activeTab === "crispr" && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-bold text-white mb-3">CrisprAI Precision Base Editing</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Leveraging transformer-based gRNA optimization algorithms to ensure single-nucleotide conversion accuracy without collateral cleavage.
                </p>
                <ul className="space-y-3 font-mono text-xs text-slate-300">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Targeting Cytidine & Adenine deamination with 99.8% precision</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>In-silico off-target prediction across 3.2 billion base pairs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Real-time enzymatic binding telemetry feedback</span>
                  </li>
                </ul>
              </motion.div>
            )}

            {activeTab === "folding" && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-bold text-white mb-3">Quantum Proteome Folding Engine</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Simulating molecular dynamics at microsecond time scales using hybrid quantum-classical neural solvers.
                </p>
                <ul className="space-y-3 font-mono text-xs text-slate-300">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>All-atom forcefield molecular dynamics in minutes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Active site docking prediction for all 20 standard amino acids</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Solvation free energy calculation confidence: &gt; 98.7%</span>
                  </li>
                </ul>
              </motion.div>
            )}

            {activeTab === "delivery" && (
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h3 className="text-2xl font-bold text-white mb-3">Targeted LNP Delivery Vehicles</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Ionizable lipid nanoparticles engineered for selective extrahepatic organ targeting and endosomal escape.
                </p>
                <ul className="space-y-3 font-mono text-xs text-slate-300">
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Cell surface receptor matching algorithm</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>High payload stability: mRNA, gRNA, and ribonucleoproteins</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Minimal immunogenicity and ultra-low systemic toxicity</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>

          {/* Interactive Live Gene Sequence Editor Simulator (Right 6 Columns) */}
          <div className="lg:col-span-6">
            <div className="bio-glass p-6 sm:p-8 rounded-3xl border border-emerald-500/30">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-200 font-bold uppercase tracking-wider">
                    Interactive Base Pair Editor
                  </span>
                </div>
                <button
                  onClick={handleResetSeq}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-emerald-400 transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              </div>

              <p className="text-xs text-slate-400 mb-6">
                Click any base pair node below to cycle its nucleotide (A ↔ T ↔ C ↔ G) and recalculate sequence stability index:
              </p>

              {/* Interactive Nucleotide Nodes Grid */}
              <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 mb-8">
                {sequence.map((base, idx) => {
                  const isMutated = mutatedIndex === idx;
                  let colorClass = "bg-slate-900 text-slate-300 border-slate-700";
                  if (base === "A") colorClass = "bg-emerald-950/80 text-emerald-300 border-emerald-500/40";
                  if (base === "T") colorClass = "bg-cyan-950/80 text-cyan-300 border-cyan-500/40";
                  if (base === "C") colorClass = "bg-purple-950/80 text-purple-300 border-purple-500/40";
                  if (base === "G") colorClass = "bg-amber-950/80 text-amber-300 border-amber-500/40";

                  return (
                    <button
                      key={idx}
                      onClick={() => handleBaseChange(idx)}
                      className={`h-12 rounded-xl border flex flex-col items-center justify-center font-mono font-bold text-sm transition-all duration-300 hover:scale-110 active:scale-95 ${colorClass} ${
                        isMutated ? "ring-2 ring-emerald-400 scale-125 z-10" : ""
                      }`}
                    >
                      <span>{base}</span>
                      <span className="text-[9px] font-normal opacity-60">#{idx + 1}</span>
                    </button>
                  );
                })}
              </div>

              {/* Live Telemetry Display */}
              <div className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">GC-Content Stability Index:</span>
                  <span className="text-emerald-400 font-bold">{stabilityScore}%</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-full transition-all duration-500"
                    style={{ width: `${stabilityScore}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span>Thermodynamic Melting Temp: {(64.9 + 41 * (gcCount / sequence.length)).toFixed(1)}°C</span>
                  <span>Off-Target Risk: MINIMAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
