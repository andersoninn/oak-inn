import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        bgMenu: '#242424',
        hoverMenu: '#f5ff5b',
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],

        kelson: ['Kelson Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
