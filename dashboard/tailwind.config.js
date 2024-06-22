/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-100': '#1c1c1c',
        'black-80': '#1C1C1CCC',
        'black-40': '#1C1C1C66',
        'black-20': '#1C1C1C33',
        'black-10': '#1C1C1C1A',
        'black-5': '#1C1C1C0D',
        'white-80': '#FFFFFFCC',
        'white-40': '#FFFFFF66',
        'white-20': '#FFFFFF33',
        'white-10': '#FFFFFF1A',
        'white-5': '#FFFFFF1A',
        'bg-body': '#e1e1ff1a',
      },
    },
  },
  plugins: [],
}

