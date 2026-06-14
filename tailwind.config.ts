import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white:  "#FAFAF8",
        black:  "#111010",
        amber:  "#E8A020",
        "amber-light": "#FEF3DC",
        taupe:  "#EDEAE4",
        mid:    "#6B6B6B",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
        tighter:  "-0.025em",
        tight:    "-0.02em",
        wide:     "0.02em",
        wider:    "0.05em",
        widest:   "0.12em",
        "ultra":  "0.14em",
      },
      borderWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};

export default config;
