/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        navy: '#001F3F',
        'navy-dark': '#001A35',
        'navy-light': '#334466',
        electric: '#007BFF',
        'electric-dark': '#0056B3',
        'electric-light': '#3399FF',

        // Split-Complementary Accent Colors
        orange: '#FF851B',
        coral: '#FF4136',

        // Neutrals
        bg: '#F5F5F5',
        'text-dark': '#333333',
        'text-secondary': '#666666',
        white: '#FFFFFF',

        // Overlay
        overlay: 'rgba(0,31,63,0.7)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-title': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'card-title': ['1.25rem', { lineHeight: '1.3' }],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'button': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'button-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
