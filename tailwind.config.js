/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': "#252C3A",
        'secondary': "#5A5A5A",
        'accent': "#FAB702",
        'bg-1': "#F8F8F8",
        'bg-2': '#EBEBEB',
        'bg-3': '#E7E7E7',
        'bg-4': '#F5F5F5'
      }
    },
  },
  plugins: [],
};
