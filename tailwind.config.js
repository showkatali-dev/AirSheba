/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "conic": "conic-gradient(var(--tw-gradient-stops))",
        "radial": "radial-gradient(var(--tw-gradient-stops))",
        "linear": "linear-gradient(var(--tw-gradient-stops))"
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#059dff",
          secondary: "#ea580c",
          accent: "#6549d5",
          neutral: "#000000",
          "base-100": "#FFFFFF",
          "base-200": "#EAF7FB",
          "base-300": "#F5F8FA"
        }
      },
      {
        dark: {
          primary: "#059dff",
          secondary: "#ea580c",
          accent: "#6549d5",
          neutral: "#FFFFFF",
          "base-100": "#0B0016",
          "base-200": "#0F0F11",
          "base-300": "#000000"
        }
      },
    ]
  }
}

