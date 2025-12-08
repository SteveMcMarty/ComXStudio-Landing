/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Palette de couleurs ComXStudio.ai
        primary: '#3b82f6',
        darkest: '#0f172a',
        dark: '#1e293b',
        medium: '#334155',
        light: '#9ca3af',
        white: '#ffffff',
        danger: '#ef4444',
        warning: '#f59e0b',
      },
      fontFamily: {
        comic: ['Bangers', 'system-ui', 'cursive'],
      },
      boxShadow: {
        comic: '4px 4px 0px 0px #000000',
      },
    },
  },
  plugins: [],
};
