/** @type {import('tailwindcss').Config} */

const templateAreaPluginConfig = {
  gridTemplateAreas: {
    layout: ['aside main main'],
  },
  gridTemplateColumns: {
    layout: '20% 80%',
  },
  gridTemplateRows: {
    layout: `auto`,
  },
};

const colorsConfig = {
  colors: {
    primary: {
      DEFAULT: 'hsl(var(--primary))',
      foreground: 'hsl(var(--primary-foreground))',
    },
    secondary: {
      DEFAULT: 'hsl(var(--secondary))',
      foreground: 'hsl(var(--secondary-foreground))',
    },
    neutral: {
      DEFAULT: 'hsl(var(--neutral))',
      foreground: 'hsl(var(--neutral-foreground))',
    },
  },
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      ...templateAreaPluginConfig,
      ...colorsConfig,
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
