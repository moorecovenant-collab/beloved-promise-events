"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => setRingPosition({ x: e.clientX, y: e.clientY }), 80);
    };

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    document.addEventListener("mousemove", handleMove);

    const interactives = document.querySelectorAll("a, button, [data-cursor]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverIn);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      document.removeEventListener("mousemove", handleMove);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: position.x - 4, y: position.y - 4, scale: isHovering ? 0 : 1 }}
        transition={{ type: "tween", duration: 0.05 }}
        style={{ position: "fixed", pointerEvents: "none", zIndex: 99999 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: ringPosition.x - 18,
          y: ringPosition.y - 18,
          scale: isHovering ? 1.6 : 1,
        }}
        transition={{ type: "tween", duration: 0.12 }}
        style={{ position: "fixed", pointerEvents: "none", zIndex: 99998 }}
      />
    </>
  );
}
