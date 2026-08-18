"use client";

import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, Sparkles, Activity, ShieldCheck } from "lucide-react";

interface CanvasMoleculeProps {
  interactiveControls?: boolean;
  colorScheme?: "emerald" | "cyan" | "violet";
  height?: string;
}

export default function CanvasMoleculeVisualizer({
  interactiveControls = true,
  colorScheme = "emerald",
  height = "h-[460px] sm:h-[520px]",
}: CanvasMoleculeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [activePreset, setActivePreset] = useState<"emerald" | "cyan" | "violet">(colorScheme);
  const [renderMode, setRenderMode] = useState<"capsid" | "protein" | "epigenetics">("capsid");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, isHovering: false });
  const rotationAngle = useRef(0);

  // Color mappings based on preset
  const colorPalettes = {
    emerald: {
      primary: "rgb(0, 245, 160)",
      secondary: "rgb(0, 180, 216)",
      accent: "rgb(168, 85, 247)",
      glow: "rgba(0, 245, 160, 0.4)",
      line: "rgba(0, 245, 160, 0.25)",
    },
    cyan: {
      primary: "rgb(0, 180, 216)",
      secondary: "rgb(0, 245, 160)",
      accent: "rgb(236, 72, 153)",
      glow: "rgba(0, 180, 216, 0.4)",
      line: "rgba(0, 180, 216, 0.25)",
    },
    violet: {
      primary: "rgb(168, 85, 247)",
      secondary: "rgb(0, 245, 160)",
      accent: "rgb(244, 63, 94)",
      glow: "rgba(168, 85, 247, 0.4)",
      line: "rgba(168, 85, 247, 0.25)",
    },
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let heightPx = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      heightPx = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // --- GENERATE 3D GEOMETRIC MESH NODES ---
    // 1. Capsid Vector Nodes (Icosahedral / Spherical Nanobot Mesh)
    const capsidNodes: { x: number; y: number; z: number }[] = [];
    const phi = (1 + Math.sqrt(5)) / 2; // Golden ratio
    const rawIcosahedron = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1]
    ];
    // Scale and normalize icosahedron to form nanobot vector capsid
    rawIcosahedron.forEach(([x, y, z]) => {
      const len = Math.hypot(x, y, z);
      capsidNodes.push({ x: (x / len) * 140, y: (y / len) * 140, z: (z / len) * 140 });
    });
    // Add sub-divisional capsid nodes
    for (let i = 0; i < 28; i++) {
      const theta = (i / 28) * Math.PI * 2;
      const phiAngle = Math.acos((i % 7) / 3.5 - 1);
      capsidNodes.push({
        x: Math.sin(phiAngle) * Math.cos(theta) * 140,
        y: Math.sin(phiAngle) * Math.sin(theta) * 140,
        z: Math.cos(phiAngle) * 140
      });
    }

    // 2. Protein Folding Lattice Nodes (Peptide Chain Nodes)
    const proteinNodes: { x: number; y: number; z: number; type: number }[] = [];
    for (let i = 0; i < 36; i++) {
      const t = (i / 36) * Math.PI * 4;
      proteinNodes.push({
        x: Math.sin(t) * (80 + Math.sin(i) * 20),
        y: (i - 18) * 10,
        z: Math.cos(t) * (80 + Math.cos(i) * 20),
        type: i % 3
      });
    }

    // 3. Epigenetic Genomic Matrix Nodes (3D Bio-Lattice)
    const epigeneticsNodes: { x: number; y: number; z: number }[] = [];
    for (let x = -2; x <= 2; x++) {
      for (let y = -2; y <= 2; y++) {
        for (let z = -2; z <= 2; z++) {
          if (Math.hypot(x, y, z) <= 2.2) {
            epigeneticsNodes.push({ x: x * 60, y: y * 60, z: z * 60 });
          }
        }
      }
    }

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, heightPx);

      if (isRotating) {
        rotationAngle.current += 0.008;
      }

      // Mouse rotation displacement
      const rotY = rotationAngle.current + (mousePos.isHovering ? mousePos.x * 0.4 : 0);
      const rotX = mousePos.isHovering ? mousePos.y * 0.3 : 0.2;

      const centerX = width / 2;
      const centerY = heightPx / 2;
      const palette = colorPalettes[activePreset];

      // --- RENDER 1: NANOBOT VIRAL VECTOR CAPSID ---
      if (renderMode === "capsid") {
        // Project 3D nodes to 2D screen
        const projected = capsidNodes.map((n) => {
          // Rotate Y
          let x1 = n.x * Math.cos(rotY) - n.z * Math.sin(rotY);
          let z1 = n.x * Math.sin(rotY) + n.z * Math.cos(rotY);
          // Rotate X
          let y2 = n.y * Math.cos(rotX) - z1 * Math.sin(rotX);
          let z2 = n.y * Math.sin(rotX) + z1 * Math.cos(rotX);

          const scale = 320 / (320 + z2);
          return {
            x: centerX + x1 * scale,
            y: centerY + y2 * scale,
            z: z2,
            scale,
          };
        });

        // Sort by Z for proper depth rendering
        projected.sort((a, b) => b.z - a.z);

        // Draw Capisd Connection Edges
        for (let i = 0; i < projected.length; i++) {
          for (let j = i + 1; j < projected.length; j++) {
            const dx = projected[i].x - projected[j].x;
            const dy = projected[i].y - projected[j].y;
            const dist = Math.hypot(dx, dy);

            if (dist < 95) {
              const alpha = Math.max(0, (1 - dist / 95) * 0.35);
              ctx.beginPath();
              ctx.moveTo(projected[i].x, projected[i].y);
              ctx.lineTo(projected[j].x, projected[j].y);
              ctx.strokeStyle = palette.line;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        // Draw Capsid Vertex Nodes
        projected.forEach((p) => {
          const radius = Math.max(2, 4.5 * p.scale);
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = palette.primary;
          ctx.shadowColor = palette.primary;
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        });

        // Render Internal Genomic Core Strand
        ctx.beginPath();
        ctx.arc(centerX, centerY, 35, 0, Math.PI * 2);
        ctx.fillStyle = palette.glow;
        ctx.shadowColor = palette.secondary;
        ctx.shadowBlur = 25;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // --- RENDER 2: SUBCELLULAR PROTEIN FOLDING LATTICE ---
      else if (renderMode === "protein") {
        const projected = proteinNodes.map((n) => {
          let x1 = n.x * Math.cos(rotY) - n.z * Math.sin(rotY);
          let z1 = n.x * Math.sin(rotY) + n.z * Math.cos(rotY);
          let y2 = n.y * Math.cos(rotX) - z1 * Math.sin(rotX);
          let z2 = n.y * Math.sin(rotX) + z1 * Math.cos(rotX);
          const scale = 320 / (320 + z2);
          return { x: centerX + x1 * scale, y: centerY + y2 * scale, z: z2, scale, type: n.type };
        });

        // Draw Backbone Chain Line
        ctx.beginPath();
        projected.forEach((p, i) => {
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.strokeStyle = palette.primary;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw Peptide Bond Cross-Links
        for (let i = 0; i < projected.length - 4; i += 2) {
          ctx.beginPath();
          ctx.moveTo(projected[i].x, projected[i].y);
          ctx.lineTo(projected[i + 4].x, projected[i + 4].y);
          ctx.strokeStyle = palette.line;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Draw Amino Acid Spheres
        projected.forEach((p) => {
          const radius = Math.max(3, 6 * p.scale);
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = p.type === 0 ? palette.primary : p.type === 1 ? palette.secondary : palette.accent;
          ctx.shadowColor = palette.primary;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // --- RENDER 3: EPIGENETIC GENOMIC MATRIX ---
      else if (renderMode === "epigenetics") {
        const projected = epigeneticsNodes.map((n) => {
          let x1 = n.x * Math.cos(rotY) - n.z * Math.sin(rotY);
          let z1 = n.x * Math.sin(rotY) + n.z * Math.cos(rotY);
          let y2 = n.y * Math.cos(rotX) - z1 * Math.sin(rotX);
          let z2 = n.y * Math.sin(rotX) + z1 * Math.cos(rotX);
          const scale = 320 / (320 + z2);
          return { x: centerX + x1 * scale, y: centerY + y2 * scale, z: z2, scale };
        });

        // Connect Matrix Grid
        for (let i = 0; i < projected.length; i++) {
          for (let j = i + 1; j < projected.length; j++) {
            const dx = projected[i].x - projected[j].x;
            const dy = projected[i].y - projected[j].y;
            const dist = Math.hypot(dx, dy);

            if (dist < 70) {
              ctx.beginPath();
              ctx.moveTo(projected[i].x, projected[i].y);
              ctx.lineTo(projected[j].x, projected[j].y);
              ctx.strokeStyle = palette.line;
              ctx.lineWidth = 1;
              ctx.stroke();
            }
          }
        }

        projected.forEach((p) => {
          const radius = Math.max(2, 4.5 * p.scale);
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = palette.secondary;
          ctx.fill();
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isRotating, activePreset, renderMode, mousePos]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
      isHovering: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovering: false }));
  };

  return (
    <div
      className={`relative w-full ${height} bg-[#030712]/95 backdrop-blur-2xl bio-glass rounded-3xl overflow-hidden flex flex-col items-center justify-center border border-emerald-500/30 group shadow-2xl transition-all duration-500`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/20 via-transparent to-cyan-950/20 pointer-events-none" />
      <div className="absolute top-4 left-4 flex items-center gap-2 text-xs text-emerald-400/90 font-mono z-10 bg-slate-950/80 px-3.5 py-1.5 rounded-full border border-emerald-500/30 backdrop-blur-md">
        <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
        <span className="uppercase tracking-wider font-bold">
          {renderMode === "capsid"
            ? "AAV NANOBOT VECTOR :: 60 FPS"
            : renderMode === "protein"
            ? "PROTEIN FOLDING LATTICE :: 60 FPS"
            : "EPIGENETIC MATRIX :: 60 FPS"}
        </span>
      </div>

      {/* Main HTML5 Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair z-0" />

      {/* Content-Aligned Biotech Controls Overlay */}
      {interactiveControls && (
        <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 bg-slate-950/85 p-3 rounded-2xl border border-slate-800/80 backdrop-blur-xl transition-all duration-300 group-hover:border-emerald-500/30">
          {/* Preset Colors */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">Theme:</span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setActivePreset("emerald")}
                title="Emerald Bioluminescence"
                className={`w-6 h-6 rounded-full bg-emerald-400 transition-all ${
                  activePreset === "emerald" ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-slate-950 scale-110" : "opacity-60 hover:opacity-100"
                }`}
              />
              <button
                onClick={() => setActivePreset("cyan")}
                title="Oceanic Cyan"
                className={`w-6 h-6 rounded-full bg-cyan-400 transition-all ${
                  activePreset === "cyan" ? "ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950 scale-110" : "opacity-60 hover:opacity-100"
                }`}
              />
              <button
                onClick={() => setActivePreset("violet")}
                title="Electric Violet"
                className={`w-6 h-6 rounded-full bg-purple-500 transition-all ${
                  activePreset === "violet" ? "ring-2 ring-purple-400 ring-offset-2 ring-offset-slate-950 scale-110" : "opacity-60 hover:opacity-100"
                }`}
              />
            </div>
          </div>

          {/* Content-Aligned Biotech Structure Mode Switcher */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setRenderMode("capsid")}
              className={`px-3 py-1 rounded-lg transition-colors ${
                renderMode === "capsid" ? "bg-emerald-500/25 text-emerald-300 font-bold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Capsid Vector
            </button>
            <button
              onClick={() => setRenderMode("protein")}
              className={`px-3 py-1 rounded-lg transition-colors ${
                renderMode === "protein" ? "bg-emerald-500/25 text-emerald-300 font-bold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Protein Fold
            </button>
            <button
              onClick={() => setRenderMode("epigenetics")}
              className={`px-3 py-1 rounded-lg transition-colors ${
                renderMode === "epigenetics" ? "bg-emerald-500/25 text-emerald-300 font-bold" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Epigenetics
            </button>
          </div>

          {/* Play/Pause Rotation Toggle */}
          <button
            onClick={() => setIsRotating((prev) => !prev)}
            className="flex items-center gap-1.5 text-xs text-slate-300 font-mono hover:text-emerald-400 bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800 hover:border-emerald-500/40 transition-all"
          >
            {isRotating ? (
              <>
                <Pause className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>Spin</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
