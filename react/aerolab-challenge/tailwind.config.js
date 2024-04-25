const twColors = {
  colors: {
    primary: {
      DEFAULT: 'var(--primary)',
      foreground: 'var(--primary-foreground)',
    },
    neutral: {
      DEFAULT: 'var(--neutral)',
      foreground: 'var(--neutral-foreground)',
    },
  },
};

const twGridTemplateAreas = {
  gridTemplateAreas: {
    layout: ['header header header', 'nav main main'],
  },
  gridTemplateColumns: {
    layout: '20% 80%',
  },
  gridTemplateRows: {
    layout: '100px 100%',
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { ...twColors, ...twGridTemplateAreas },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
