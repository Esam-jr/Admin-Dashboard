/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        "surface-primary": "hsl(var(--surface-primary))",
        "surface-secondary": "hsl(var(--surface-secondary))",
        "border-primary": "hsl(var(--border-primary))",
        "border-secondary": "hsl(var(--border-secondary))",
        "text-primary": "hsl(var(--text-primary))",
        "text-secondary": "hsl(var(--text-secondary))",
        "accent-primary": "hsl(var(--accent-primary))",
        "accent-secondary": "hsl(var(--accent-secondary))",
        "accent-danger": "hsl(var(--accent-danger))",
        "accent-warning": "hsl(var(--accent-warning))",
        "accent-purple": "hsl(var(--accent-purple))",
        "accent-pink": "hsl(var(--accent-pink))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
