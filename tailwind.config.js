/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '2rem',
    },
  },
  daisyui: {
    themes: ['dark'],
  },
  safelist: [
    {
      pattern: /./,
    },
  ],

  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
    require('tailwindcss-textshadow'),
    require('flowbite/plugin'),
  ],
  variants: {
    scrollbar: ['rounded', 'dark'],
  },
};
