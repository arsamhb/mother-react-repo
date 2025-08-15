import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1CB0F6',
          'primary-content': '#FFFFFF',
          secondary: '#58CC02',
          'secondary-content': '#FFFFFF',
          accent: '#1CB0F6',
          'accent-content': '#777777',
          neutral: '#F5F6FA',
          'neutral-content': '#67748E',
          'base-100': '#FFFFFF',
          'base-200': '#F5F6FA',
          'base-300': '#D5D5D5',
          'base-content': '#202224',

          // info: '#00a3ff',
          // 'info-content': '#000a16',
          // success: '#50bb00',
          // 'success-content': '#020d00',
          // warning: '#f6bb00',
          // 'warning-content': '#150d00',
          // error: '#e15154',
          // 'error-content': '#120202',
          // EXTENDING TOKEN EXAMPLE
          // '--gold': '#FFB219',
        },
      },
    ],
  },
  theme: {
    extend: {
      spacing: {
        sm: '0.5rem',
        md: '1rem',
        lg: '2rem',
        'standard-phone': '1rem',
        'standard-tablet': '3rem',
        'standard-laptop': '7rem',
      },
      borderRadius: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
      },
      borderWidth: {
        sm: '1px',
        md: '3px',
        lg: '5px',
      },
      screens: {
        phone: '480px',
        tablet: '768px',
        smLaptop: '960px',
        laptop: '1024px',
        desktop: '1280px',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        heading: ['2rem', { lineHeight: '2.5rem' }],
      },
      colors: {
        'info-light': 'var(--info-light)',
        'info-light-op-50': 'var(--info-light-op-50)',
        gold: 'var(--gold)',
        'muted-content': 'var(--muted-content)',
        'subtle-content': 'var(--subtle-content)',
        'primary-ex-light': 'var(--primary-ex-light)',
      },
      container: {},
    },
  },
  plugins: [daisyui],
} satisfies Config;
