import { heroui } from '@heroui/theme';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/components/(button|form|input|ripple|spinner).js',
  ],
  theme: {
    extend: {
      screens: {
        'sm-custom': '550px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        bgMenu: '#1E262B',
        bgMenu2: '#1B2024',
        hoverMenu: '#F5FF5B',
        primary: {
          DEFAULT: '#E3ED59', // Cor principal
          50: '#E6F7FF',
          100: '#BAE6FF',
          200: '#7FD4FF',
          300: '#46BEFF',
          400: '#00A3FF',
          500: '#006FEE', // Reforçando o DEFAULT
          600: '#005ECC',
          700: '#004BA3',
          800: '#003973',
          900: '#00284D',
        },
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'],
        kelson: ['Kelson Medium', 'sans-serif'],
      },
    },
  },
  plugins: [heroui()],
} satisfies Config;
