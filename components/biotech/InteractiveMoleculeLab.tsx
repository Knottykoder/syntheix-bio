"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Dna, Play, CheckCircle2, RotateCcw, Cpu, ShieldCheck, Activity } from "lucide-react";

export default function InteractiveMoleculeLab() {
  const [targetCategory, setTargetCategory] = useState<"oncology" | "neuro" | "cardio" | "rare">("oncology");
  const [selectedLigands, setSelectedLigands] = useState<string[]>(["L-Alanine", "Glycine"]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [synthesizedResult, setSynthesizedResult] = useState<any | null>(null);

  const ligandOptions = [
    "L-Alanine",
    "Glycine",
    "L-Cysteine",
    "L-Leucine",
    "L-Tryptophan",
    "L-Proline",
  ];

  const toggleLigand = (ligand: string) => {
    if (selectedLigands.includes(ligand)) {
      if (selectedLigands.length > 1) {
        setSelectedLigands(selectedLigands.filter((l) => l !== ligand));
      }
    } else {
      if (selectedLigands.length < 4) {
        setSelectedLigands([...selectedLigands, ligand]);
      }
    }
  };

  const handleSynthesize = () => {
    setIsSynthesizing(true);
    setSynthesizedResult(null);

    setTimeout(() => {
      setIsSynthesizing(false);
      setSynthesizedResult({
        codeName: `STX-${targetCategory.toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`,
        affinityKd: (0.05 + Math.random() * 0.25).toFixed(3) + " nM",
        dockingScore: -(8.5 + Math.random() * 3.2).toFixed(2) + " kcal/mol",
        stabilityHalfLife: Math.floor(36 + Math.random() * 48) + " hours",
        toxicityRisk: "Negligible (<0.01%)",
        status: "SYNTHESIS OPTIMAL",
      });
    }, 1800);
  };

  return (
    <section id="sandbox" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/80">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE EXPERIMENTAL SANDBOX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Virtual Bio-Lab <span className="text-gradient-cyan">Synthesizer</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Test drive our generative molecular builder. Select a disease target profile and peptide ligands to compute custom therapeutic binding stability in real time.
          </p>
        </div>

        {/* Sandbox Board Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel (Left 6 Columns) */}
          <div className="lg:col-span-6 bio-glass p-8 rounded-3xl border border-purple-500/30 space-y-8">
            {/* Step 1: Select Target */}
            <div>
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                01. Select Disease Target Domain
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: "oncology", label: "Oncology (EGFR/KRAS)", color: "emerald" },
                  { id: "neuro", label: "Neurodegeneration (Tau)", color: "cyan" },
                  { id: "cardio", label: "Cardiovascular (PCSK9)", color: "purple" },
                  { id: "rare", label: "Rare Genetic (DMD)", color: "amber" },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTargetCategory(t.id as any)}
                    className={`p-3 rounded-2xl border text-left text-xs font-mono transition-all ${
                      targetCategory === t.id
                        ? "bg-purple-950/80 border-purple-400 text-white font-bold shadow-lg shadow-purple-500/20"
                        : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Ligand Components */}
            <div>
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                02. Select Amino Acid Scaffolds (Max 4)
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {ligandOptions.map((ligand) => {
                  const isSelected = selectedLigands.includes(ligand);
                  return (
                    <button
                      key={ligand}
                      onClick={() => toggleLigand(ligand)}
                      className={`p-2.5 rounded-xl border text-center text-xs font-mono transition-all ${
                        isSelected
                          ? "bg-emerald-950/80 border-emerald-400 text-emerald-300 font-bold"
                          : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      {ligand}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Trigger Button */}
            <button
              onClick={handleSynthesize}
              disabled={isSynthesizing}
              className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-500 via-emerald-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-slate-950 font-bold text-sm py-4 rounded-2xl shadow-xl shadow-purple-500/25 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
            >
              {isSynthesizing ? (
                <>
                  <Activity className="w-4 h-4 animate-spin" />
                  <span>Computing Molecular Dynamics...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Synthesize Molecule Candidate</span>
                </>
              )}
            </button>
          </div>

          {/* Results Display Panel (Right 6 Columns) */}
          <div className="lg:col-span-6">
            <div className="bio-glass p-8 rounded-3xl border border-emerald-500/30 min-h-[420px] flex flex-col justify-between relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
                  SYNTHESIS DIAGNOSTIC RESULT
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                  REAL-TIME SIMULATION
                </span>
              </div>

              {/* Loading State */}
              {isSynthesizing && (
                <div className="my-auto text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full border-4 border-purple-500/20 border-t-purple-400 animate-spin" />
                  <p className="text-xs font-mono text-purple-300 animate-pulse">
                    Running All-Atom Forcefield Solvation Calculations...
                  </p>
                </div>
              )}

              {/* Initial Empty State */}
              {!isSynthesizing && !synthesizedResult && (
                <div className="my-auto text-center space-y-4 py-8">
                  <Dna className="w-16 h-16 mx-auto text-slate-700 animate-bounce" />
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Select your disease target domain and amino acid scaffolds, then click "Synthesize Molecule Candidate".
                  </p>
                </div>
              )}

              {/* Success Result State */}
              {!isSynthesizing && synthesizedResult && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">CANDIDATE ID</span>
                      <h4 className="text-2xl font-bold text-emerald-400 font-mono">
                        {synthesizedResult.codeName}
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono border border-emerald-500/30">
                      {synthesizedResult.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-slate-950/90 p-4 rounded-2xl border border-slate-800 font-mono text-xs">
                    <div>
                      <span className="text-slate-500 block">BINDING AFFINITY (Kd)</span>
                      <span className="text-emerald-400 font-bold text-sm">{synthesizedResult.affinityKd}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">DOCKING FREE ENERGY</span>
                      <span className="text-cyan-400 font-bold text-sm">{synthesizedResult.dockingScore}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">SERUM HALF-LIFE</span>
                      <span className="text-purple-400 font-bold text-sm">{synthesizedResult.stabilityHalfLife}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">OFF-TARGET TOXICITY</span>
                      <span className="text-emerald-300 font-bold text-sm">{synthesizedResult.toxicityRisk}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-950 border border-emerald-500/20 flex items-center gap-3 text-xs text-slate-300">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>
                      Synthesized candidate conforms to FDA Phase I safety parameters and demonstrates high stability.
                    </span>
                  </div>
                </motion.div>
              )}

              <div className="pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex justify-between">
                <span>Active Target: {targetCategory.toUpperCase()}</span>
                <span>Scaffolds: {selectedLigands.length} Selected</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
