/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B21A8',
          light: '#9333EA',
          dark: '#4C1D95',
          foreground: "#FFF"
        },
        error : "#F44336",
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
        16: '16px',
        20: '20px',
        24: '24px',
        48: '48px',
        64: '64px',
      },
      maxWidth: {
        500: '500px',
      },
    },
  },
  plugins: [],
};
