import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FAF5EE",
        cream: "#F5EDE0",
        blush: "#F0DCE0",
        "blush-deep": "#E8C4C8",
        rose: "#BE7B8E",
        "rose-light": "#D4A0AF",
        wine: "#6B1F3A",
        plum: "#2A0A1F",
        gold: "#C9A878",
        "gold-light": "#E8D5B0",
        "gold-dim": "#9E7F50",
        "warm-gray": "#7A6E66",
        "text-primary": "#1E0A18",
        "text-secondary": "#5A4A52",
        "text-muted": "#8A7E86",
        border: "#E0D0D4",
        "border-dark": "#3A1A28",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.0", letterSpacing: "-0.01em" }],
        "display-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "0" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "0" }],
        "script-2xl": ["clamp(3rem, 7vw, 6rem)", { lineHeight: "1.15" }],
        "script-xl": ["clamp(2.5rem, 5vw, 4.5rem)", { lineHeight: "1.2" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 10rem)",
      },
      animation: {
        grain: "grain 8s steps(10) infinite",
        "fade-up": "fadeUp 0.8s ease forwards",
        "petal-float": "petalFloat 6s ease-in-out infinite",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -3%)" },
          "20%": { transform: "translate(3%, 2%)" },
          "30%": { transform: "translate(-1%, 4%)" },
          "40%": { transform: "translate(2%, -1%)" },
          "50%": { transform: "translate(-3%, 3%)" },
          "60%": { transform: "translate(1%, -2%)" },
          "70%": { transform: "translate(-2%, 1%)" },
          "80%": { transform: "translate(3%, -3%)" },
          "90%": { transform: "translate(-1%, 2%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        petalFloat: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(5deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-warm": "linear-gradient(135deg, #FAF5EE 0%, #F5EDE0 100%)",
        "gradient-plum": "linear-gradient(135deg, #2A0A1F 0%, #6B1F3A 100%)",
        "vignette-light": "radial-gradient(ellipse at center, transparent 50%, rgba(42,10,31,0.12) 100%)",
      },
      transitionTimingFunction: {
        cinematic: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        dramatic: "cubic-bezier(0.16, 1, 0.3, 1)",
        elegant: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      boxShadow: {
        luxury: "0 4px 40px rgba(42, 10, 31, 0.08)",
        "luxury-hover": "0 8px 60px rgba(42, 10, 31, 0.14)",
        "gold-glow": "0 0 40px rgba(201, 168, 120, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
