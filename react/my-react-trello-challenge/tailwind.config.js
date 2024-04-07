const twColors = {
  colors: {
    primary: {
      DEFAULT: 'var(--primary)',
      foreground: 'var(--primary)',
    },
    neutral: {
      DEFAULT: 'var(--neutral)',
      foreground: 'var(--neutral)',
    },
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { ...twColors },
  },
  plugins: [],
};
