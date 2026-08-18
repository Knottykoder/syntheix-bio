"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dna, Menu, X, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface BiotechNavbarProps {
  onOpenSandbox?: () => void;
}

export default function BiotechNavbar({ onOpenSandbox }: BiotechNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Innovation", href: "#innovation" },
    { name: "Technology", href: "#technology" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Impact Metrics", href: "#impact" },
    { name: "Lab Sandbox", href: "#sandbox" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-emerald-500/15 py-3 shadow-2xl shadow-black/60"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Dna className="w-5 h-5 text-emerald-400 group-hover:rotate-45 transition-transform duration-500" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-wider text-white group-hover:text-emerald-400 transition-colors">
                SYNTHIX<span className="text-emerald-400">.BIO</span>
              </span>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase -mt-1">
              Genomics & Therapeutics
            </span>
          </div>
        </Link>

        {/* Live System Status Badge (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-mono text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>AI Matrix: ACTIVE</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#sandbox"
            onClick={onOpenSandbox}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-semibold text-xs px-4 py-2.5 rounded-full shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 fill-slate-950" />
            <span>Launch Sandbox</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-2xl overflow-hidden px-4 py-6"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1.5 rounded-full text-xs font-mono text-emerald-300 w-fit mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>AI Matrix: ACTIVE</span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-200 hover:text-emerald-400 py-1 transition-colors border-b border-slate-900"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-3">
                <a
                  href="#sandbox"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenSandbox) onOpenSandbox();
                  }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-semibold text-sm py-3 rounded-xl shadow-lg shadow-emerald-500/20"
                >
                  <Sparkles className="w-4 h-4 fill-slate-950" />
                  <span>Launch Lab Sandbox</span>
                </a>
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center text-xs font-mono text-slate-400 hover:text-white py-2"
                >
                  ← Return to Main Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
