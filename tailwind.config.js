/** @type {import('tailwindcss').Config} */
module.exports = {
    
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          move: {
            '0%': { transform: 'translateY(-15px)' },
            '100%': { transform: 'translateY(0)' },
          },
        },
        animation: {
          move: 'move 3s infinite ease alternate',
        },
      },
    },
    plugins: [],
  }
  