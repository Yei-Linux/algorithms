/** @type {import('tailwindcss').Config} */
const palette = {
  primary: {
    DEFAULT: 'var(--primary)',
    foreground: 'var(--neutral)',
  },
  secondary: {
    DEFAULT: 'var(--secondary)',
  },
};

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    colors: palette,
  },
  plugins: [],
};
