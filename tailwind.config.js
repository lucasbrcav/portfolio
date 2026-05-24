/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          950: '#070708',
          900: '#0a0a0c',
          800: '#101013',
          700: '#16161b',
          600: '#1d1d24',
          500: '#2a2a33',
        },
        accent: {
          DEFAULT: '#7CFF6B',
          soft: '#a8ff9c',
          dim: '#4ea843',
        },
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at top, rgba(124,255,107,0.08), transparent 60%)',
        'noise':
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,255,107,0.18), 0 8px 40px -8px rgba(124,255,107,0.25)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 30px 60px -30px rgba(0,0,0,0.6)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
