import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        black: {
          bg: '#0a0a0a',
          elevated: '#181818',
          border: '#2d2d2d'
        },
        white: {
          primary: '#f3f5f7',
          charcoal: '#cccccc',
          secondary: '#777777',
          hover: 'rgba(255, 255, 255, .025)'
        }
      },
      fontFamily: {
        sans: ['system-ui', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        base: ['.9375rem', '1.4']
      }
    }
  },

  plugins: []
} satisfies Config;
