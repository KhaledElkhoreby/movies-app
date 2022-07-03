/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '1rem',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#be123c',

          secondary: '#ffa991',

          accent: '#eaa1dc',

          neutral: '#1D1E2A',

          'base-100': '#21284A',

          info: '#8297ED',

          success: '#21977D',

          warning: '#FBD760',

          error: '#F26E7B',
        },
      },
    ],
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
  ],
  variants: {
    scrollbar: ['rounded', 'dark'],
  },
};
