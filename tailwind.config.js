
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // Green-500
          dark: '#059669',    // Green-600
        },
        secondary: {
          DEFAULT: '#3B82F6', // Blue-500
          dark: '#2563EB',    // Blue-600
        },
      },
      backgroundImage: {
        'gradient-r-green-blue': 'linear-gradient(to right, #10B981, #3B82F6)',
        'gradient-r-blue-lightblue': 'linear-gradient(to right, #3B82F6, #60A5FA)',
      },
      boxShadow: {
        'xl-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};