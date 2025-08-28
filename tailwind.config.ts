/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B21A8',
          light: '#9333EA',
          dark: '#4C1D95',
        },
        background: '#FFFFFF',
        onBackground: '#1F2937',
      },
      spacing: {
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
      },
      width: {
        500: '500px',
      },
      height: {
        500: '500px',
      },
      maxWidth: {
        500: '500px',
      },
      maxHeight: {
        500: '500px',
      },
    },
  },
  plugins: [],
};
