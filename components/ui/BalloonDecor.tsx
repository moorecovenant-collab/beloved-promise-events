"use client";

import { motion } from "framer-motion";

interface BalloonProps {
  cx: number;
  cy: number;
  r: number;
  color: string;
  opacity?: number;
  delay?: number;
  duration?: number;
}

function Balloon({ cx, cy, r, color, opacity = 0.75, delay = 0, duration = 5 }: BalloonProps) {
  const rx = r * 0.85;
  const ry = r;
  return (
    <motion.g
      animate={{ y: [0, -6, 0], rotate: [-1, 1, -1] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      style={{ originX: cx, originY: cy }}
    >
      {/* Balloon body */}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={color} opacity={opacity} />
      {/* Highlight */}
      <ellipse
        cx={cx - rx * 0.3}
        cy={cy - ry * 0.3}
        rx={rx * 0.28}
        ry={ry * 0.22}
        fill="white"
        opacity={opacity * 0.35}
      />
      {/* Knot */}
      <path
        d={`M${cx - 3} ${cy + ry} Q${cx} ${cy + ry + 5} ${cx + 3} ${cy + ry}`}
        fill={color}
        opacity={opacity * 0.9}
        strokeWidth="0"
      />
      {/* String */}
      <path
        d={`M${cx} ${cy + ry + 5} Q${cx + 4} ${cy + ry + 14} ${cx - 2} ${cy + ry + 22}`}
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity={opacity * 0.4}
      />
    </motion.g>
  );
}

// ── ARCH: swoops across top of a section ──────────────────────────────────────
export function BalloonArch({ className = "" }: { className?: string }) {
  const gold = "#C9A878";
  const champagne = "#E8D5B0";
  const deepGold = "#B8924A";
  const roseGold = "#D4A882";

  // Organic cluster arch - balloons along a curve from left to right
  const balloons = [
    // Left cluster (bottom of arch)
    { cx: 30,  cy: 210, r: 28, color: deepGold,  opacity: 0.55, delay: 0 },
    { cx: 72,  cy: 185, r: 36, color: gold,       opacity: 0.65, delay: 0.4 },
    { cx: 55,  cy: 155, r: 22, color: champagne,  opacity: 0.50, delay: 0.8 },
    { cx: 105, cy: 160, r: 30, color: roseGold,   opacity: 0.60, delay: 0.2 },
    { cx: 88,  cy: 130, r: 18, color: gold,       opacity: 0.45, delay: 1.0 },
    { cx: 130, cy: 140, r: 26, color: deepGold,   opacity: 0.55, delay: 0.6 },
    { cx: 115, cy: 110, r: 14, color: champagne,  opacity: 0.40, delay: 1.4 },

    // Mid arch (top of curve)
    { cx: 170, cy: 115, r: 32, color: gold,       opacity: 0.62, delay: 0.3 },
    { cx: 200, cy: 90,  r: 20, color: roseGold,   opacity: 0.50, delay: 0.7 },
    { cx: 230, cy: 100, r: 28, color: champagne,  opacity: 0.55, delay: 1.1 },
    { cx: 215, cy: 70,  r: 16, color: deepGold,   opacity: 0.42, delay: 0.9 },
    { cx: 255, cy: 80,  r: 22, color: gold,       opacity: 0.58, delay: 0.5 },

    // Right cluster (bottom of arch)
    { cx: 290, cy: 100, r: 34, color: roseGold,   opacity: 0.60, delay: 0.2 },
    { cx: 330, cy: 120, r: 26, color: gold,       opacity: 0.55, delay: 0.8 },
    { cx: 315, cy: 148, r: 18, color: champagne,  opacity: 0.45, delay: 1.2 },
    { cx: 360, cy: 140, r: 30, color: deepGold,   opacity: 0.58, delay: 0.4 },
    { cx: 345, cy: 170, r: 22, color: gold,       opacity: 0.50, delay: 1.0 },
    { cx: 390, cy: 165, r: 36, color: roseGold,   opacity: 0.62, delay: 0.6 },
    { cx: 378, cy: 195, r: 16, color: champagne,  opacity: 0.40, delay: 1.6 },
  ];

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 420 240"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {balloons.map((b, i) => (
          <Balloon key={i} {...b} duration={4.5 + (i % 4) * 0.5} />
        ))}
      </svg>
    </div>
  );
}

// ── CLUSTER: corner or floating cluster of balloons ───────────────────────────
export function BalloonCluster({
  className = "",
  variant = "right",
}: {
  className?: string;
  variant?: "left" | "right" | "center";
}) {
  const gold = "#C9A878";
  const champagne = "#E8D5B0";
  const deepGold = "#B8924A";
  const roseGold = "#D4A882";

  const leftBalloons = [
    { cx: 40,  cy: 110, r: 32, color: gold,      opacity: 0.55, delay: 0 },
    { cx: 75,  cy: 85,  r: 24, color: champagne, opacity: 0.48, delay: 0.5 },
    { cx: 20,  cy: 78,  r: 20, color: deepGold,  opacity: 0.45, delay: 0.9 },
    { cx: 60,  cy: 56,  r: 16, color: roseGold,  opacity: 0.40, delay: 1.3 },
    { cx: 95,  cy: 115, r: 20, color: gold,      opacity: 0.42, delay: 0.7 },
    { cx: 45,  cy: 45,  r: 12, color: champagne, opacity: 0.35, delay: 1.7 },
  ];

  const rightBalloons = [
    { cx: 80,  cy: 110, r: 34, color: gold,      opacity: 0.58, delay: 0.2 },
    { cx: 45,  cy: 82,  r: 24, color: roseGold,  opacity: 0.50, delay: 0.6 },
    { cx: 108, cy: 80,  r: 22, color: champagne, opacity: 0.46, delay: 1.0 },
    { cx: 68,  cy: 52,  r: 18, color: deepGold,  opacity: 0.42, delay: 0.4 },
    { cx: 28,  cy: 115, r: 18, color: gold,      opacity: 0.38, delay: 1.4 },
    { cx: 98,  cy: 50,  r: 12, color: roseGold,  opacity: 0.32, delay: 1.8 },
  ];

  const centerBalloons = [
    { cx: 60,  cy: 100, r: 30, color: gold,      opacity: 0.55, delay: 0 },
    { cx: 30,  cy: 78,  r: 22, color: champagne, opacity: 0.48, delay: 0.4 },
    { cx: 90,  cy: 75,  r: 20, color: roseGold,  opacity: 0.45, delay: 0.8 },
    { cx: 60,  cy: 50,  r: 16, color: deepGold,  opacity: 0.40, delay: 1.2 },
    { cx: 18,  cy: 108, r: 16, color: gold,      opacity: 0.38, delay: 0.6 },
    { cx: 102, cy: 105, r: 14, color: champagne, opacity: 0.34, delay: 1.6 },
  ];

  const balloons = variant === "left" ? leftBalloons : variant === "center" ? centerBalloons : rightBalloons;

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 130 140"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {balloons.map((b, i) => (
          <Balloon key={i} {...b} duration={4 + (i % 3) * 0.6} />
        ))}
      </svg>
    </div>
  );
}

// ── GARLAND: horizontal string of balloons for banners ────────────────────────
export function BalloonGarland({ className = "" }: { className?: string }) {
  const gold = "#C9A878";
  const champagne = "#E8D5B0";
  const deepGold = "#B8924A";
  const roseGold = "#D4A882";

  const balloons = [
    { cx: 30,  cy: 55, r: 24, color: gold,      opacity: 0.50, delay: 0 },
    { cx: 68,  cy: 38, r: 18, color: champagne, opacity: 0.44, delay: 0.3 },
    { cx: 100, cy: 50, r: 28, color: roseGold,  opacity: 0.52, delay: 0.6 },
    { cx: 138, cy: 34, r: 20, color: deepGold,  opacity: 0.46, delay: 0.9 },
    { cx: 170, cy: 50, r: 26, color: gold,      opacity: 0.50, delay: 0.2 },
    { cx: 205, cy: 36, r: 16, color: champagne, opacity: 0.42, delay: 1.2 },
    { cx: 234, cy: 52, r: 24, color: roseGold,  opacity: 0.48, delay: 0.5 },
    { cx: 268, cy: 38, r: 20, color: deepGold,  opacity: 0.44, delay: 0.8 },
    { cx: 298, cy: 54, r: 28, color: gold,      opacity: 0.52, delay: 0.1 },
    { cx: 335, cy: 36, r: 18, color: champagne, opacity: 0.42, delay: 1.1 },
    { cx: 362, cy: 52, r: 24, color: roseGold,  opacity: 0.48, delay: 0.4 },
    { cx: 396, cy: 38, r: 20, color: deepGold,  opacity: 0.44, delay: 0.7 },
    { cx: 425, cy: 56, r: 26, color: gold,      opacity: 0.50, delay: 1.0 },
  ];

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 460 90"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        {/* Garland string */}
        <path
          d="M30 55 Q49 65 68 55 Q84 45 100 55 Q119 65 138 55 Q154 45 170 55 Q187 65 205 55 Q219 45 234 55 Q251 65 268 55 Q283 45 298 55 Q316 65 335 55 Q348 45 362 55 Q379 65 396 55 Q410 45 425 55"
          stroke={champagne}
          strokeWidth="1"
          fill="none"
          opacity="0.25"
        />
        {balloons.map((b, i) => (
          <Balloon key={i} {...b} duration={4.2 + (i % 4) * 0.4} />
        ))}
      </svg>
    </div>
  );
}
