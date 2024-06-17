/** @type {import('tailwindcss').Config} */

const palette = {
  primary: {
    DEFAULT: 'var(--primary)',
    foreground: 'var(--secondary)',
  },
  secondary: {
    DEFAULT: 'var(--secondary)',
    foreground: 'var(--primary)',
  },
};

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    colors: palette,
    extend: {},
  },
  plugins: [],
};
