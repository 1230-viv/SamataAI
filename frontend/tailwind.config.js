/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#06030f",
        ink: "#0a0620",
        iris: "#7F77DD",
        lavender: "#AFA9EC",
        ruby: "#D4537E",
        amber: "#EF9F27",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        display: ["Unbounded", "sans-serif"],
      },
      boxShadow: {
        glow: "0 18px 70px rgba(83, 74, 183, 0.35)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 12% 12%, rgba(127,119,221,0.18), transparent 42%), radial-gradient(circle at 88% 78%, rgba(212,83,126,0.14), transparent 45%)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(7px)" },
        },
      },
      animation: {
        floaty: "floaty 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
