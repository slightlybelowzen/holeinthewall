import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        black: {
          primary: 'rgb(29, 29, 31)'
        },
        white: {
          primary: 'rgb(255, 255, 255)',
          beige: 'rgba(250, 247, 244, 1)',
          secondary: 'rgb(245, 245, 247)'
        }
      },
      fontFamily: {
        sans: ['system-ui', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        base: ['1.05rem', '1.4']
      }
    }
  },

  plugins: []
} satisfies Config;
