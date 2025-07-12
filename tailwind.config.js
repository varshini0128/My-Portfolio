/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'scroll-loop': 'scrollLoop 20s linear infinite', // adjust speed here
      },
      keyframes: {
        scrollLoop: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }, // scroll half length since we're duplicating content
        },
      },
    },
  },
  plugins: [],
};
