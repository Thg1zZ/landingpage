/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
        sans: ['IBM Plex Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0c10',
          2: '#0f1218',
          3: '#161b25',
        },
        surface: {
          DEFAULT: '#1a2035',
          2: '#1f2840',
        },
        border: 'rgba(42,53,80,0.7)',
        accent: {
          DEFAULT: '#4a9eff',
          2: '#00d4aa',
          3: '#ff6b35',
        },
        text: {
          DEFAULT: '#e8edf5',
          2: '#9aabcc',
          3: '#5a6e8c',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.25,1,0.5,1) forwards',
        'gradient-x': 'gradientX 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: 'translateY(32px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        gradientX: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          from: { textShadow: '0 0 10px rgba(74,158,255,0.3)' },
          to: { textShadow: '0 0 20px rgba(74,158,255,0.6), 0 0 40px rgba(74,158,255,0.2)' },
        },
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
}
