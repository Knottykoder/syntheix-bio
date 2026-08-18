"use client";

import React from "react";
import BiotechNavbar from "@/components/biotech/BiotechNavbar";
import HeroSection from "@/components/biotech/HeroSection";
import AboutInnovationSection from "@/components/biotech/AboutInnovationSection";
import TechnologyResearchSection from "@/components/biotech/TechnologyResearchSection";
import CapabilitiesSection from "@/components/biotech/CapabilitiesSection";
import ImpactStatsSection from "@/components/biotech/ImpactStatsSection";
import FinalCTASection from "@/components/biotech/FinalCTASection";
import BiotechFooter from "@/components/biotech/BiotechFooter";
import BiotechScrollOrbitalCanvas from "@/components/biotech/BiotechScrollOrbitalCanvas";
import InteractiveMoleculeLab from "@/components/biotech/InteractiveMoleculeLab";
import "@/app/biotech/biotech.css";
import Link from "next/link";
import { ArrowUp, ArrowLeft } from "lucide-react";

export default function BiotechPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="biotech-root min-h-screen bg-[#030712] text-slate-100 relative overflow-x-hidden selection:bg-[#00F5A0] selection:text-[#030712]">
      {/* Scroll-Driven 3D Interactive Celestial Sphere & Orbital Ring Canvas (Parallax Anchor Layer) */}
      <BiotechScrollOrbitalCanvas />

      {/* Sticky Top Navigation Header */}
      <BiotechNavbar />

      {/* Main Sections Suite */}
      <main className="relative z-10">
        <HeroSection />
        <AboutInnovationSection />
        <TechnologyResearchSection />

        {/* Interactive Molecule Lab Showcase */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <InteractiveMoleculeLab />
        </section>

        <CapabilitiesSection />
        <ImpactStatsSection />
        <FinalCTASection />
      </main>

      {/* Footer */}
      <BiotechFooter />

      {/* Floating Action Controls */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <Link
          href="/bionext"
          title="Switch to BioNext"
          className="p-3 rounded-full bg-[#030712]/90 border border-[#00F5A0]/30 text-slate-300 hover:text-[#00F5A0] hover:border-[#00F5A0] shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <button
          onClick={scrollToTop}
          title="Scroll to Top"
          className="p-3 rounded-full bg-[#030712]/90 border border-[#00F5A0]/30 text-slate-300 hover:text-[#00F5A0] hover:border-[#00F5A0] shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
