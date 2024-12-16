import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        black: {
          bg: '#0A0A0A',
          elevated: '#181818',
          border: '#2D2D2D'
        },
        white: {
          primary: '#F3F5F7'
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
