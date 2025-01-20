/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
      extend: {
        animation: {
          'fade-in': 'fadeIn 0.5s ease-out forwards',
          'slide-left': 'slideLeft 0.5s ease-out forwards',
          'slide-right': 'slideRight 0.5s ease-out forwards',
          'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
          'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideLeft: {
            '0%': { 
              transform: 'translateX(-100%)',
              opacity: '0',
            },
            '100%': { 
              transform: 'translateX(0)',
              opacity: '1',
            },
          },
          slideRight: {
            '0%': { 
              transform: 'translateX(100%)',
              opacity: '0',
            },
            '100%': { 
              transform: 'translateX(0)',
              opacity: '1',
            },
          },
          fadeInUp: {
            '0%': { 
              transform: 'translateY(20px)',
              opacity: '0',
            },
            '100%': { 
              transform: 'translateY(0)',
              opacity: '1',
            },
          },
          pulseRing: {
            '0%': { transform: 'scale(1.1)', opacity: 1 },
            '50%': { transform: 'scale(1.2)', opacity: 0.5 },
            '100%': { transform: 'scale(1.1)', opacity: 1 },
          },
        },
      },
    },
    plugins: [],
  };