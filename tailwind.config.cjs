/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '50%': { filter: "brightness(1.4)", ["text-shadow"]: "0 0 10px rgba(255,255,255,0.3), 0 0 100px rgba(255,255,255,0.6), 0 0 1000px rgba(255,255,255,0.9)" },
        },
        enterLeft: {
          '0%': {opacity:0, left:"-20px"},
          '100%': { opacity: 100, left: 0 }
        },
        enterRight: {
          '0%': {opacity:0, right:"-20px"},
          '100%': { opacity: 100, right: 0 }
        },
        enterBottom: {
          '0%': {opacity:0, bottom:"-20px"},
          '100%': { opacity: 100, bottom: 0 }
        },
        leaveTop: {
          '0%': {opacity:100, top: 0},
          '100%': { opacity: 0, top: "-20px" }
        }
      },
      animation: {
        glow: "enterLeft 0.5s ease forwards, glow 2s ease 1s forwards",
        glowContinuous: "glow 6s ease 0s infinite",
        enterLeft: "enterLeft 1s ease forwards",
        enterRight: "enterRight 1s ease 0.5s forwards",
        enterBottom: "enterBottom 1s ease 1s forwards",
        leaveTop: "leaveTop 1s ease 3s forwards",
      }
    },
  },

  darkMode: "class",

  plugins: [],
}
