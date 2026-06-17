/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        academic: {
          background: '#FFFDFB',
          ivory: '#FDF7F9',
          blush: '#FFF3F8',
          pastel: '#F9A8D4',
          rose: '#EC4899',
          'deep-rose': '#BE185D',
          ink: '#211C2F',
          muted: '#6F6675',
          border: '#F4B6CF',
          card: '#FFFFFF',
          sidebar: '#211C2F',
          'sidebar-border': '#F4B6CF',
          navy: '#211C2F',
          'hero-blue': '#BE185D',
          blue: '#BE185D',
          cyan: '#F9A8D4',
          'blue-light': '#EC4899',
          warning: '#B45309',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(190, 24, 93, 0.07)',
      },
    },
  },
  plugins: [],
};
