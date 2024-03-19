/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations' 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
			sans: ['Gotham SSm A, sans-serif'],
      protest: ["Protest Revolution", 'sans-serif'],
      rubik: ["Rubik", 'sans-serif'],
      baumans: ["Baumans", 'system-ui']
		},
    extend: {
      animation:{
        'spin-slow': 'spin 6s linear infinite',
        'spin-delay': 'spin 6s linear infinite -3s'
      },
      colors:{
        'orange': {
          '50': '#fff7ed',
          '100': '#ffedd5',
          '200': '#fed7aa',
          '300': '#fdba74',
          '400': '#fb923c',
          '500': '#f97316',
          '600': '#ea580c',
          '700': '#c2410c',
          '800': '#9a3412',
          '900': '#7c2d12',
          '950': '#431407',
        },
        'blue': {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1d4ed8',
          '800': '#1e40af',
          '900': '#1e3a8a',
          '950': '#172554',
        },
        'buetec': '#1d3a69'
      },
    },
  },
  plugins: [
    animations,
  ],
}
