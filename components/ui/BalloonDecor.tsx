"use client";

import { useId } from "react";
import { motion } from "framer-motion";

// ── Metallic gold palette — 4 subtle variants for visual depth ────────────────
const GRAD = [
  { h: "#FFFDE0", l: "#F5D560", m: "#D4A030", d: "#7A5010" }, // classic gold
  { h: "#FFF8E8", l: "#F0C850", m: "#C89020", d: "#6E4808" }, // warm gold
  { h: "#FFFCE8", l: "#F8E080", m: "#DDB040", d: "#8A6218" }, // champagne
  { h: "#FFF5D8", l: "#ECC040", m: "#BE8818", d: "#624008" }, // deep gold
];

type BD = {
  id: string;
  cx: number; cy: number; r: number;
  gi?: number; op?: number; dl?: number; dur?: number;
};

// ── Gradient <defs> block ─────────────────────────────────────────────────────
// Each balloon gets two gradients:
//   m{id} — metallic body: focal point top-left → bright gold → deep shadow
//   s{id} — specular shine: soft white bloom at top-left
function Defs({ items }: { items: BD[] }) {
  return (
    <defs>
      {items.flatMap(({ id, gi = 0 }) => {
        const g = GRAD[gi % 4];
        return [
          <radialGradient
            key={`m${id}`} id={`m${id}`}
            gradientUnits="objectBoundingBox"
            cx="0.30" cy="0.25" r="0.76" fx="0.25" fy="0.20"
          >
            <stop offset="0%"   stopColor={g.h} />
            <stop offset="16%"  stopColor={g.l} />
            <stop offset="56%"  stopColor={g.m} />
            <stop offset="100%" stopColor={g.d} />
          </radialGradient>,
          <radialGradient
            key={`s${id}`} id={`s${id}`}
            gradientUnits="objectBoundingBox"
            cx="0.35" cy="0.28" r="0.34"
          >
            <stop offset="0%"   stopColor="white" stopOpacity="0.68" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>,
        ];
      })}
    </defs>
  );
}

// ── Single 3D metallic balloon ────────────────────────────────────────────────
function Bal({
  id, cx, cy, r,
  op = 0.90, dl = 0, dur = 5,
}: { id: string; cx: number; cy: number; r: number; op?: number; dl?: number; dur?: number }) {
  return (
    <motion.g
      animate={{ y: [0, -5, 0], rotate: [-0.5, 0.5, -0.5] }}
      transition={{ duration: dur, delay: dl, repeat: Infinity, ease: "easeInOut" }}
      style={{ originX: cx, originY: cy }}
    >
      {/* Metallic body */}
      <circle cx={cx} cy={cy} r={r} fill={`url(#m${id})`} opacity={op} />
      {/* Specular highlight overlay */}
      <circle cx={cx} cy={cy} r={r} fill={`url(#s${id})`} opacity={op} />
      {/* Knot */}
      <path
        d={`M${cx - 2.5} ${cy + r} Q${cx} ${cy + r + 5} ${cx + 2.5} ${cy + r}`}
        fill="#7A5010" opacity={op * 0.85}
      />
      {/* String */}
      <path
        d={`M${cx} ${cy + r + 5} C${cx + 5} ${cy + r + 14},${cx - 3} ${cy + r + 22},${cx + 1} ${cy + r + 28}`}
        stroke="#9A6818" strokeWidth="0.85" fill="none" opacity={op * 0.22}
      />
    </motion.g>
  );
}

// ── ARCH ──────────────────────────────────────────────────────────────────────
export function BalloonArch({ className = "" }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  const raw = [
    // Outer ring — main arch curve
    { cx: 22,  cy: 268, r: 28, gi: 0, op: 0.90, dl: 0.0,  dur: 5.0 },
    { cx: 62,  cy: 248, r: 26, gi: 1, op: 0.88, dl: 0.3,  dur: 4.8 },
    { cx: 56,  cy: 212, r: 24, gi: 2, op: 0.86, dl: 0.6,  dur: 5.2 },
    { cx: 90,  cy: 180, r: 26, gi: 3, op: 0.88, dl: 0.4,  dur: 4.6 },
    { cx: 86,  cy: 144, r: 24, gi: 0, op: 0.86, dl: 0.8,  dur: 5.4 },
    { cx: 120, cy: 112, r: 24, gi: 1, op: 0.86, dl: 0.2,  dur: 4.8 },
    { cx: 115, cy: 78,  r: 22, gi: 2, op: 0.84, dl: 1.0,  dur: 5.0 },
    { cx: 148, cy: 54,  r: 22, gi: 3, op: 0.84, dl: 0.5,  dur: 4.6 },
    { cx: 182, cy: 38,  r: 24, gi: 0, op: 0.86, dl: 0.9,  dur: 5.2 },
    { cx: 218, cy: 26,  r: 22, gi: 1, op: 0.84, dl: 0.1,  dur: 4.8 },
    { cx: 258, cy: 20,  r: 26, gi: 2, op: 0.88, dl: 0.6,  dur: 5.0 },
    { cx: 298, cy: 26,  r: 22, gi: 3, op: 0.84, dl: 0.3,  dur: 4.8 },
    { cx: 334, cy: 38,  r: 24, gi: 0, op: 0.86, dl: 0.7,  dur: 5.4 },
    { cx: 368, cy: 54,  r: 22, gi: 1, op: 0.84, dl: 1.1,  dur: 4.6 },
    { cx: 402, cy: 78,  r: 22, gi: 2, op: 0.84, dl: 0.4,  dur: 5.0 },
    { cx: 396, cy: 112, r: 24, gi: 3, op: 0.86, dl: 0.8,  dur: 4.8 },
    { cx: 430, cy: 144, r: 24, gi: 0, op: 0.86, dl: 0.2,  dur: 5.2 },
    { cx: 426, cy: 180, r: 26, gi: 1, op: 0.88, dl: 0.6,  dur: 4.6 },
    { cx: 460, cy: 212, r: 24, gi: 2, op: 0.86, dl: 1.0,  dur: 5.0 },
    { cx: 454, cy: 248, r: 26, gi: 3, op: 0.88, dl: 0.5,  dur: 4.8 },
    { cx: 494, cy: 268, r: 28, gi: 0, op: 0.90, dl: 0.0,  dur: 5.2 },
    // Inner ring — fills gaps on the inside of the arch
    { cx: 40,  cy: 242, r: 20, gi: 1, op: 0.82, dl: 0.4,  dur: 4.8 },
    { cx: 72,  cy: 195, r: 20, gi: 2, op: 0.82, dl: 0.7,  dur: 5.0 },
    { cx: 104, cy: 148, r: 20, gi: 3, op: 0.82, dl: 0.2,  dur: 4.6 },
    { cx: 133, cy: 96,  r: 18, gi: 0, op: 0.80, dl: 0.9,  dur: 5.2 },
    { cx: 165, cy: 62,  r: 18, gi: 1, op: 0.80, dl: 0.5,  dur: 4.8 },
    { cx: 200, cy: 42,  r: 20, gi: 2, op: 0.82, dl: 0.1,  dur: 5.0 },
    { cx: 236, cy: 32,  r: 18, gi: 3, op: 0.80, dl: 0.8,  dur: 4.6 },
    { cx: 278, cy: 30,  r: 20, gi: 0, op: 0.82, dl: 0.3,  dur: 5.2 },
    { cx: 318, cy: 32,  r: 18, gi: 1, op: 0.80, dl: 0.6,  dur: 4.8 },
    { cx: 354, cy: 42,  r: 20, gi: 2, op: 0.82, dl: 0.0,  dur: 5.0 },
    { cx: 390, cy: 62,  r: 18, gi: 3, op: 0.80, dl: 0.7,  dur: 4.6 },
    { cx: 422, cy: 96,  r: 18, gi: 0, op: 0.80, dl: 1.2,  dur: 5.2 },
    { cx: 442, cy: 148, r: 20, gi: 1, op: 0.82, dl: 0.4,  dur: 4.8 },
    { cx: 444, cy: 195, r: 20, gi: 2, op: 0.82, dl: 0.9,  dur: 5.0 },
    { cx: 476, cy: 242, r: 20, gi: 3, op: 0.82, dl: 0.2,  dur: 4.6 },
    // Base fill extras
    { cx: 30,  cy: 276, r: 20, gi: 2, op: 0.84, dl: 0.8,  dur: 5.0 },
    { cx: 486, cy: 276, r: 20, gi: 1, op: 0.84, dl: 0.5,  dur: 4.8 },
  ];

  const bs: BD[] = raw.map((d, i) => ({ ...d, id: `${uid}${i}` }));

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 516 292"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <Defs items={bs} />
        {bs.map(b => (
          <Bal key={b.id} id={b.id} cx={b.cx} cy={b.cy} r={b.r}
            op={b.op} dl={b.dl} dur={b.dur} />
        ))}
      </svg>
    </div>
  );
}

// ── CLUSTER ───────────────────────────────────────────────────────────────────
export function BalloonCluster({
  className = "",
  variant = "right",
}: {
  className?: string;
  variant?: "left" | "right" | "center";
}) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  const variants: Record<string, Array<Omit<BD, "id">>> = {
    right: [
      { cx: 78,  cy: 108, r: 32, gi: 0, op: 0.88, dl: 0.0, dur: 5.0 },
      { cx: 44,  cy: 82,  r: 24, gi: 1, op: 0.84, dl: 0.5, dur: 4.8 },
      { cx: 108, cy: 78,  r: 22, gi: 2, op: 0.82, dl: 1.0, dur: 5.2 },
      { cx: 66,  cy: 52,  r: 18, gi: 3, op: 0.80, dl: 0.3, dur: 4.6 },
      { cx: 28,  cy: 112, r: 18, gi: 0, op: 0.78, dl: 0.8, dur: 5.0 },
      { cx: 96,  cy: 50,  r: 14, gi: 1, op: 0.76, dl: 1.3, dur: 4.8 },
    ],
    left: [
      { cx: 42,  cy: 108, r: 32, gi: 2, op: 0.88, dl: 0.2, dur: 5.2 },
      { cx: 76,  cy: 82,  r: 24, gi: 3, op: 0.84, dl: 0.6, dur: 4.8 },
      { cx: 16,  cy: 80,  r: 22, gi: 0, op: 0.82, dl: 0.0, dur: 5.0 },
      { cx: 56,  cy: 52,  r: 18, gi: 1, op: 0.80, dl: 1.0, dur: 4.6 },
      { cx: 92,  cy: 112, r: 18, gi: 2, op: 0.78, dl: 0.5, dur: 5.2 },
      { cx: 26,  cy: 48,  r: 14, gi: 3, op: 0.76, dl: 1.4, dur: 4.8 },
    ],
    center: [
      { cx: 60,  cy: 100, r: 30, gi: 1, op: 0.88, dl: 0.1, dur: 5.0 },
      { cx: 30,  cy: 76,  r: 22, gi: 2, op: 0.84, dl: 0.5, dur: 4.8 },
      { cx: 90,  cy: 74,  r: 20, gi: 3, op: 0.82, dl: 0.9, dur: 5.2 },
      { cx: 58,  cy: 48,  r: 18, gi: 0, op: 0.80, dl: 0.3, dur: 4.6 },
      { cx: 18,  cy: 106, r: 16, gi: 1, op: 0.78, dl: 0.7, dur: 5.0 },
      { cx: 102, cy: 104, r: 14, gi: 2, op: 0.76, dl: 1.2, dur: 4.8 },
    ],
  };

  const raw = variants[variant];
  const bs: BD[] = raw.map((d, i) => ({ ...d, id: `${uid}${i}` }));

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 130 140"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <Defs items={bs} />
        {bs.map(b => (
          <Bal key={b.id} id={b.id} cx={b.cx} cy={b.cy} r={b.r}
            op={b.op} dl={b.dl} dur={b.dur} />
        ))}
      </svg>
    </div>
  );
}

// ── GARLAND ───────────────────────────────────────────────────────────────────
export function BalloonGarland({ className = "" }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");

  const raw = [
    { cx: 28,  cy: 54, r: 22, gi: 0, op: 0.85, dl: 0.0, dur: 5.0 },
    { cx: 66,  cy: 38, r: 18, gi: 1, op: 0.80, dl: 0.3, dur: 4.8 },
    { cx: 98,  cy: 52, r: 26, gi: 2, op: 0.88, dl: 0.6, dur: 5.2 },
    { cx: 136, cy: 34, r: 20, gi: 3, op: 0.82, dl: 0.9, dur: 4.6 },
    { cx: 168, cy: 50, r: 24, gi: 0, op: 0.86, dl: 0.2, dur: 5.0 },
    { cx: 204, cy: 36, r: 16, gi: 1, op: 0.78, dl: 1.2, dur: 4.8 },
    { cx: 232, cy: 52, r: 24, gi: 2, op: 0.86, dl: 0.5, dur: 5.2 },
    { cx: 266, cy: 36, r: 20, gi: 3, op: 0.82, dl: 0.8, dur: 4.6 },
    { cx: 296, cy: 54, r: 26, gi: 0, op: 0.88, dl: 0.1, dur: 5.0 },
    { cx: 332, cy: 36, r: 18, gi: 1, op: 0.80, dl: 1.1, dur: 4.8 },
    { cx: 360, cy: 52, r: 22, gi: 2, op: 0.84, dl: 0.4, dur: 5.2 },
    { cx: 394, cy: 36, r: 20, gi: 3, op: 0.82, dl: 0.7, dur: 4.6 },
    { cx: 422, cy: 54, r: 24, gi: 0, op: 0.86, dl: 1.0, dur: 5.0 },
  ];

  const bs: BD[] = raw.map((d, i) => ({ ...d, id: `${uid}${i}` }));

  return (
    <div className={`pointer-events-none select-none ${className}`}>
      <svg
        viewBox="0 0 458 88"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <Defs items={bs} />
        {/* Garland string */}
        <path
          d="M28 54 Q47 64 66 54 Q82 44 98 54 Q117 64 136 54 Q152 44 168 54 Q186 64 204 54 Q218 44 232 54 Q249 64 266 54 Q281 44 296 54 Q314 64 332 54 Q346 44 360 54 Q377 64 394 54 Q408 44 422 54"
          stroke="#D4A030" strokeWidth="1" fill="none" opacity="0.30"
        />
        {bs.map(b => (
          <Bal key={b.id} id={b.id} cx={b.cx} cy={b.cy} r={b.r}
            op={b.op} dl={b.dl} dur={b.dur} />
        ))}
      </svg>
    </div>
  );
}
