import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces — dark-first, low-contrast steps rather than pure black/white.
        surface: {
          primary: "#08090D",
          secondary: "#0F1117",
          card: "#12151C",
        },
        border: {
          DEFAULT: "#1C2029",
          strong: "#262B36",
        },
        ink: {
          primary: "#EDEEF2",
          secondary: "#98A1B3",
          muted: "#5B6273",
        },
        // Signal — used sparingly: one warm accent for action/emphasis,
        // one cool accent reserved for data-specific markers only.
        signal: {
          DEFAULT: "#F2B84B",
          soft: "#F2B84B1A",
        },
        data: {
          DEFAULT: "#4FD1C5",
          soft: "#4FD1C51A",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        content: "72rem",
        prose: "38rem",
      },
    },
  },
  plugins: [],
};

export default config;
