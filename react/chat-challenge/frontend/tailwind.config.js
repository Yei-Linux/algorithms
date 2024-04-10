const twColors = {
  colors: {
    primary: {
      DEFAULT: 'var(--primary)',
      foreground: 'var(--primary-foreground)',
    },
    secondary: {
      DEFAULT: 'var(--secondary)',
      foreground: 'var(--secondary-foreground)',
    },
    neutral: {
      DEFAULT: 'var(--neutral)',
      foreground: 'var(--neutral-foreground)',
    },
  },
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { ...twColors },
  },
  plugins: [],
};
