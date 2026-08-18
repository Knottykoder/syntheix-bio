"use client";

import React, { useEffect, useRef, useState } from "react";

interface BiotechScrollOrbitalCanvasProps {
  className?: string;
}

export default function BiotechScrollOrbitalCanvas({
  className = "fixed inset-0 pointer-events-none z-0",
}: BiotechScrollOrbitalCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate 3D Subcellular DNA Double Helix Nodes
    const dnaNodes: { strand: number; t: number }[] = [];
    const numNodesPerStrand = 40;
    for (let i = 0; i < numNodesPerStrand; i++) {
      const t = (i / numNodesPerStrand) * Math.PI * 4;
      dnaNodes.push({ strand: 0, t });
      dnaNodes.push({ strand: 1, t: t + Math.PI }); // 180 deg offset strand
    }

    let time = 0;
    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.012;

      // Calculate Viewport Scroll Progress (0 to 1)
      const scrollY = window.scrollY || 0;
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const scrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      // --- SCROLL PARALLAX PHYSICS ---
      // 1. Dynamic Y Position: Floats downward along viewport depth
      const targetY = height * (0.35 + scrollProgress * 0.45);
      // 2. Dynamic Scale: Scales dynamically with scroll depth
      const currentScale = 1 - Math.sin(scrollProgress * Math.PI) * 0.38;
      // 3. Dynamic Rotations: Rotation speed scales with scroll progress
      const rotAngleY = time * 0.9 + scrollProgress * Math.PI * 2 + mousePos.x * 0.15;
      const rotAngleX = 0.3 + mousePos.y * 0.1;

      // Center position: floats from left headline space (0.32) down to right/center
      const centerX = width * (0.32 + scrollProgress * 0.38);
      const helixRadius = Math.min(width, height) * 0.18 * currentScale;
      const helixHeight = Math.min(width, height) * 0.45 * currentScale;

      // Render Ambient Glow Core
      const coreGradient = ctx.createRadialGradient(centerX, targetY, 0, centerX, targetY, helixRadius * 1.5);
      coreGradient.addColorStop(0, "rgba(0, 245, 160, 0.25)");
      coreGradient.addColorStop(0.5, "rgba(0, 180, 216, 0.1)");
      coreGradient.addColorStop(1, "rgba(3, 7, 18, 0)");

      ctx.beginPath();
      ctx.arc(centerX, targetY, helixRadius * 1.5, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();

      // Project 3D DNA Helix Base Pair Nodes to 2D
      const projectedNodes: { x: number; y: number; z: number; strand: number; idx: number }[] = [];

      for (let i = 0; i < dnaNodes.length; i++) {
        const node = dnaNodes[i];
        const angle = node.t + rotAngleY;
        const rawX = Math.cos(angle) * helixRadius;
        const rawY = ((i / 2) - numNodesPerStrand / 2) * (helixHeight / numNodesPerStrand);
        const rawZ = Math.sin(angle) * helixRadius;

        // Rotate X
        const rotY = rawY * Math.cos(rotAngleX) - rawZ * Math.sin(rotAngleX);
        const rotZ = rawY * Math.sin(rotAngleX) + rawZ * Math.cos(rotAngleX);

        const projX = centerX + rawX + mousePos.x * 4;
        const projY = targetY + rotY + mousePos.y * 4;

        projectedNodes.push({ x: projX, y: projY, z: rotZ, strand: node.strand, idx: Math.floor(i / 2) });
      }

      // Draw Hydrogen Bond Base Pair Cross-Links
      for (let i = 0; i < numNodesPerStrand; i++) {
        const n1 = projectedNodes.find((n) => n.idx === i && n.strand === 0);
        const n2 = projectedNodes.find((n) => n.idx === i && n.strand === 1);

        if (n1 && n2) {
          const avgZ = (n1.z + n2.z) / 2;
          const alpha = 0.15 + (avgZ / helixRadius + 1) * 0.25;

          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = `rgba(0, 245, 160, ${alpha})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      // Draw Bioluminescent Nucleotide Node Spheres
      projectedNodes.forEach((node) => {
        const depthAlpha = 0.25 + (node.z / helixRadius + 1) * 0.45;
        const nodeRadius = 2.5 + (node.z / helixRadius + 1) * 1.5;

        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1.5, nodeRadius), 0, Math.PI * 2);
        ctx.fillStyle = node.strand === 0 ? `rgba(0, 245, 160, ${depthAlpha})` : `rgba(0, 180, 216, ${depthAlpha})`;

        if (node.idx % 5 === 0) {
          ctx.shadowColor = node.strand === 0 ? "#00F5A0" : "#00B4D8";
          ctx.shadowBlur = 10;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render Concentric Outer Peptide Force Rings
      [1.3, 1.8].forEach((ringMult, ringIdx) => {
        const r = helixRadius * ringMult;
        ctx.beginPath();
        ctx.ellipse(centerX, targetY, r, r * 0.35, rotAngleY * 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = ringIdx === 0 ? "rgba(0, 245, 160, 0.12)" : "rgba(0, 180, 216, 0.08)";
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [mousePos]);

  return (
    <div className={className} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
