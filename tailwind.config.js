/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'hsl(var(--border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        border: 'hsl(var(--border) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        space: {
          50: '#f5f5ff',
          100: '#ececff',
          200: '#d8d8ff',
          300: '#b1b1ff',
          400: '#8a8aff',
          500: '#6b6bff',
          600: '#5151ff',
          700: '#3636ff',
          800: '#1c1cff',
          900: '#0000c2',
          950: '#000066',
        },
      },
      animation: {
        'orbit-mercury': 'orbit 8s linear infinite',
        'orbit-venus': 'orbit 12s linear infinite',
        'orbit-earth': 'orbit 16s linear infinite',
        'orbit-mars': 'orbit 20s linear infinite',
        'orbit-jupiter': 'orbit 30s linear infinite',
        'orbit-saturn': 'orbit 40s linear infinite',
        'orbit-uranus': 'orbit 50s linear infinite',
        'orbit-neptune': 'orbit 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        orbit: 'orbit linear infinite',
        spin: 'spin linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      backgroundImage: {
        'stars': 'url("https://images.pexels.com/photos/176851/pexels-photo-176851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
        'nebula': 'url("https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      },
    },
  },
  plugins: [],
};