/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
          muted: "var(--text-muted)",
          white: "var(--text-white)"
        },
        background: {
          black: "var(--bg-black)",
          dark: {
            1: "var(--bg-dark-1)",
            2: "var(--bg-dark-2)",
            3: "var(--bg-dark-3)"
          },
          white: "var(--bg-white)",
          'white-transparent': "var(--bg-white-transparent)"
        },
        border: {
          white: "var(--border-white)"
        },
        link: {
          text: "var(--link-text)",
          border: "var(--link-border)",
          background: "var(--link-bg)"
        },
        button: {
          text: {
            primary: "var(--button-text-primary)",
            secondary: "var(--button-text-secondary)",
            white: "var(--button-text-white)"
          },
          background: "var(--button-bg)",
          border: "var(--button-border)"
        },
        'icon-button': {
          background: "var(--icon-button-bg)",
          border: "var(--icon-button-border)"
        },
        expandable: {
          text: "var(--expandable-text)",
          'header-bg': "var(--expand-header-bg)",
          'item-text': "var(--expand-item-text)"
        }
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'base': 'var(--font-size-base)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
        '7xl': 'var(--font-size-7xl)',
        '8xl': 'var(--font-size-8xl)',
        '9xl': 'var(--font-size-9xl)',
        '10xl': 'var(--font-size-10xl)',
        'hero': 'var(--font-size-hero)'
      },
      fontWeight: {
        'light': 'var(--font-weight-light)',
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'semibold': 'var(--font-weight-semibold)',
        'bold': 'var(--font-weight-bold)'
      },
      lineHeight: {
        'tight': 'var(--line-height-tight)',
        'snug': 'var(--line-height-snug)',
        'normal': 'var(--line-height-normal)',
        'relaxed': 'var(--line-height-relaxed)',
        'loose': 'var(--line-height-loose)',
        'xl': 'var(--line-height-xl)'
      },
      spacing: {
        '1': 'var(--spacing-1)',
        '2': 'var(--spacing-2)',
        '3': 'var(--spacing-3)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '7': 'var(--spacing-7)',
        '8': 'var(--spacing-8)',
        '9': 'var(--spacing-9)',
        '10': 'var(--spacing-10)',
        '12': 'var(--spacing-12)',
        '14': 'var(--spacing-14)',
        '16': 'var(--spacing-16)',
        '18': 'var(--spacing-18)',
        '20': 'var(--spacing-20)',
        '24': 'var(--spacing-24)',
        '28': 'var(--spacing-28)',
        '32': 'var(--spacing-32)',
        '40': 'var(--spacing-40)',
        '44': 'var(--spacing-44)',
        '48': 'var(--spacing-48)'
      },
      borderRadius: {
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)'
      },
      borderWidth: {
        'thin': 'var(--border-width-thin)',
        'medium': 'var(--border-width-medium)'
      },
      fontFamily: {
        'aspira': ['Aspira', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'loyal': ['Loyal', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'zt': ['ZT', 'sans-serif']
      }
    }
  },
  plugins: []
}
