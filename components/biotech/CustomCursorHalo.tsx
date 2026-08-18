"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursorHalo() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: -100,
    y: -100,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate cursor halo on desktop pointers
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{
          width: 320,
          height: 320,
          background: "radial-gradient(circle, rgba(0, 245, 160, 0.4) 0%, rgba(0, 180, 216, 0.15) 50%, transparent 70%)",
        }}
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 250,
          mass: 0.5,
        }}
      />
    </motion.div>
  );
}
