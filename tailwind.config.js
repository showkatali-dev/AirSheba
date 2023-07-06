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
          neutral: "#000000",
          "base-100": "#FFFFFF",
        }
      },
      {
        dark: {
          primary: "#059dff",
          secondary: "#ea580c",
          neutral: "#FFFFFF",
          "base-100": "#0B0016",
        }
      },
    ]
  }
}

