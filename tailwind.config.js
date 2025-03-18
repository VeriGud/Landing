/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        oxocarbon: {
          base00: '#161616', // Background
          base01: '#262626', // Lighter Background
          base02: '#393939', // Selection Background
          base03: '#525252', // Comments, Invisibles
          base04: '#dde1e6', // Dark Foreground
          base05: '#f2f4f8', // Default Foreground
          base06: '#ffffff', // Light Foreground
          base07: '#08bdba', // Light Background
          base08: '#3ddbd9', // Variables
          base09: '#78a9ff', // Constants
          base0A: '#ee5396', // Types
          base0B: '#33b1ff', // Strings
          base0C: '#ff7eb6', // Support
          base0D: '#42be65', // Functions
          base0E: '#be95ff', // Keywords
          base0F: '#82cfff', // Deprecated
        },
      },
    },
  },
  plugins: [],
};