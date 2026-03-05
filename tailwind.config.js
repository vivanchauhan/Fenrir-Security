/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#0CC8A8",
          dark:    "#0aa08a",
        },
        severity: {
          critical: "#ef4444",
          high:     "#f97316",
          medium:   "#eab308",
          low:      "#22c55e",
        },
        dark: {
          bg:     "#0a0f1e",
          card:   "#0f172a",
          border: "rgba(255,255,255,0.06)",
          text:   "#94a3b8",
          head:   "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "Courier New", "monospace"],
      },
      keyframes: {
        slideUp: {
          from: { transform: "translateY(20px)", opacity: "0" },
          to:   { transform: "translateY(0)",    opacity: "1" },
        },
      },
      animation: {
        slideUp: "slideUp 0.3s ease",
      },
    },
  },
  plugins: [],
};
