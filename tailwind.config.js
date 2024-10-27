/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        sp: '0 3px 12px 0 rgba(0, 0, 0, 0.2)',
      }
    },
    colors:{
      primary: '#007bff',
    },

    backgroundImage: {
      'backG-pattern': "url('./src/assets/background.png')",
    },
    
    backgroundColor: {
      white: '#ffffff',
      primaryBlue: '#1A3A63',
      secondaryBlue: '#0095E9',
      danger: '#e3342f',
      primaryGreen: '#72C3CA',
      primaryGrey: '#91ADC1',
    },
    fontFamily: {
      sans: ['Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      poppins: ['Poppins'],
    },
    //this is animation
    animation: {
      fade: 'yellowFade 3s ease-in-out;',
      wiggle: 'wiggle 1s ease-in-out infinite',
    },
    keyframes: {
      yellowFade: {
        '0%': { backgroundColor: 'yellow' },
        '100%': { backgroundColor: 'transparent' },
      },
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      },
    },
  },
  plugins: [
  ],
};