/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // tailwind.config.js
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        shake: "shake 0.5s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-3px)" },
          "75%": { transform: "translateX(3px)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
