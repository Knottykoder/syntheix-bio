"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  X,
  Layers,
  FlaskConical,
  Dna,
  Clock,
  ShieldCheck,
  Zap,
  ArrowUpRight,
} from "lucide-react";

interface Capability {
  id: string;
  title: string;
  category: string;
  icon: any;
  shortDesc: string;
  fullDesc: string;
  turnaround: string;
  throughput: string;
  specs: string[];
}

export default function CapabilitiesSection() {
  const [selectedCapability, setSelectedCapability] = useState<Capability | null>(null);

  const capabilities: Capability[] = [
    {
      id: "screening",
      title: "High-Throughput Cell Screening",
      category: "ASSAY & TESTING",
      icon: FlaskConical,
      shortDesc: "Automated robotic phenotypic and target-based assay profiling across millions of compounds daily.",
      fullDesc:
        "Our fully automated acoustic liquid handling matrix screens 500,000+ compounds per 24-hour cycle. Integrated high-content fluorescence imaging captures subcellular morphology changes with zero human intervention.",
      turnaround: "48-72 Hours",
      throughput: "500k Compounds / Day",
      specs: [
        "Acoustic dispensing down to 2.5 nL volumes",
        "Single-cell spatial transcriptomics readout",
        "Automated live-cell incubation & time-lapse kinetics",
        "Instant machine-learning toxicological filtering",
      ],
    },
    {
      id: "synthesis",
      title: "Custom Gene & Peptide Synthesis",
      category: "GENOMIC FABRICATION",
      icon: Dna,
      shortDesc: "Ultra-long sequence DNA synthesis with error rates below 1 in 100,000 base pairs.",
      fullDesc:
        "High-density enzymatic synthesis chip technology allows scalable fabrication of complex synthetic operons, metabolic pathways, and de novo designed protein scaffolds.",
      turnaround: "5 Business Days",
      throughput: "10 Mb DNA / Batch",
      specs: [
        "Enzymatic step synthesis for high-GC regions",
        "Next-generation sequencing verification on 100% of lots",
        "Custom codon optimization algorithms included",
        "GMP-grade vector cloning & sequence verification",
      ],
    },
    {
      id: "clinical",
      title: "Accelerated Clinical Trial Design",
      category: "REGULATORY & PHASE I-III",
      icon: Clock,
      shortDesc: "In-silico patient cohort stratification reducing Phase II clinical trial duration by up to 60%.",
      fullDesc:
        "By simulating patient response profiles using digital twin biomarker models, SYNTHIX identifies optimal responder subgroups before enrolling the first human patient.",
      turnaround: "Real-time Telemetry",
      throughput: "50k Cohort Digital Twins",
      specs: [
        "Synthetic control arm construction",
        "Predictive adverse event modeling (FDA IND aligned)",
        "Adaptive trial design protocol optimization",
        "Continuous multi-center telemetry ingestion",
      ],
    },
    {
      id: "biomarker",
      title: "Bio-Digital Diagnostic Kits",
      category: "DIAGNOSTICS & HARDWARE",
      icon: Zap,
      shortDesc: "Point-of-care microfluidic chips detecting picomolar concentrations of circulating tumor DNA.",
      fullDesc:
        "Handheld CRISPR-Cas13 biosensor cartridges designed for rapid, sub-30 minute identification of liquid biopsy biomarkers in clinical care settings.",
      turnaround: "< 25 Minutes",
      throughput: "Picomolar Sensitivity",
      specs: [
        "Zero-power capillary microfluidics",
        "Bluetooth connectivity to clinical EMR systems",
        "Multi-plexing up to 64 targets simultaneously",
        "Ambient temperature stability for global deployment",
      ],
    },
    {
      id: "vaulting",
      title: "Compliant Bio-Vaulting",
      category: "STORAGE & LOGISTICS",
      icon: ShieldCheck,
      shortDesc: "Cryogenic automated storage facility with redundant LN2 backup systems and ISO-7 cleanrooms.",
      fullDesc:
        "State-of-the-art robotic biorepository engineered to preserve cell lines, stem cells, patient tissues, and viral vectors at -196°C with 99.999% uptime guarantees.",
      turnaround: "On-demand Access",
      throughput: "2.5M Vials Capacity",
      specs: [
        "Automated barcode sample picking under 15 seconds",
        "ISO Class 7 cleanroom sample preparation",
        "24/7 continuous temperature & vacuum telemetry",
        "21 CFR Part 11 compliant audit trail tracking",
      ],
    },
    {
      id: "proteomics",
      title: "De Novo Proteomics Engineering",
      category: "STRUCTURAL BIOLOGY",
      icon: Layers,
      shortDesc: "Custom antibody-drug conjugates and bispecific binder optimization with sub-nanomolar affinity.",
      fullDesc:
        "Generative neural networks formulate bespoke protein binders engineered to neutralize viral epitopes, cancer markers, and autoimmune targets with minimal host immunogenicity.",
      turnaround: "2 Weeks",
      throughput: "1,000 Designs / Cycle",
      specs: [
        "Thermostability optimization up to 85°C",
        "Fc-region engineering for extended serum half-life",
        "Automated SPR & BLI binding kinetics validation",
        "High-yield CHO cell expression vector generation",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-slate-950/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-STACK BIOTECH CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            End-to-End <span className="text-gradient-bio">Therapeutic Solutions</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            From initial target discovery to Phase III trial acceleration, our platform empowers pharmaceutical leaders, research institutes, and clinical teams worldwide.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => setSelectedCapability(cap)}
                className="bio-glass p-7 rounded-3xl cursor-pointer group hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                      {cap.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mb-6">
                    {cap.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                  <span>Turnaround: <strong className="text-emerald-400">{cap.turnaround}</strong></span>
                  <div className="flex items-center gap-1 text-emerald-400 group-hover:translate-x-1 transition-transform">
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expanded Modal Popup */}
      <AnimatePresence>
        {selectedCapability && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative overflow-hidden text-slate-100"
            >
              <button
                onClick={() => setSelectedCapability(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase mb-2 block">
                {selectedCapability.category}
              </span>

              <h3 className="text-2xl font-bold text-white mb-4">{selectedCapability.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {selectedCapability.fullDesc}
              </p>

              <div className="grid grid-cols-2 gap-4 bg-slate-950 p-4 rounded-2xl border border-slate-800 mb-6 font-mono text-xs">
                <div>
                  <span className="text-slate-500 block">STANDARD TURNAROUND</span>
                  <span className="text-emerald-400 font-bold text-sm">{selectedCapability.turnaround}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">MAX THROUGHPUT</span>
                  <span className="text-cyan-400 font-bold text-sm">{selectedCapability.throughput}</span>
                </div>
              </div>

              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                TECHNICAL PROTOCOL SPECIFICATIONS
              </h4>
              <ul className="space-y-2 font-mono text-xs text-slate-300 mb-8">
                {selectedCapability.specs.map((spec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCapability(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white"
                >
                  Close
                </button>
                <a
                  href="#cta"
                  onClick={() => setSelectedCapability(null)}
                  className="px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 hover:from-emerald-400 hover:to-cyan-400 transition-all shadow-lg shadow-emerald-500/20"
                >
                  Request Protocol Consultation
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
