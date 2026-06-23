/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0B6B3A',
          50: '#EAF6EF',
          100: '#CFEBDA',
          200: '#9FD7B6',
          300: '#6FC392',
          400: '#3DAE6E',
          500: '#0B6B3A',
          600: '#0A5C32',
          700: '#084A28',
          800: '#06381E',
          900: '#042614',
        },
        deepgreen: '#14532D',
        leaf: '#4ADE80',
        // Note: Tailwind's built-in sky-400 (#38BDF8) already matches the
        // brand's "Sky Blue" supporting color — use sky-400/500/600 directly.
        earth: '#8B5A2B',
        warmgray: '#F8FAFC',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'rings-pattern': "radial-gradient(circle at 1px 1px, rgba(11,107,58,0.08) 1px, transparent 0)",
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        ripple: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        ripple: 'ripple 2.5s ease-out infinite',
        gradientShift: 'gradientShift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
