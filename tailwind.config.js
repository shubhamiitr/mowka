/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        mowka: {
          // Backgrounds - Warm off-whites
          'bg-primary': '#ffffff',      // Main background - all sections
          'bg-secondary': '#f4f4f6',    // Subtle premium grey for Header/Footer (Light & Airy)
          'bg-tertiary': '#fbfbfd',     // Pure white cards

          // Text - Soft blacks, never harsh
          'text-primary': '#1d1d1f',    // Headings - soft black
          'text-secondary': '#424245',  // Body text - medium gray
          'text-tertiary': '#6e6e73',   // Secondary text
          'text-quaternary': '#86868b', // Very light text

          // Primary Action Color (Buttons, CTAs, Cards)
          'action-primary': '#173054',     // Primary button/card background (navy)
          'action-primary-hover': '#233f6b', // Hover state for primary buttons

          // Link Color - Uses brand teal for consistency
          'link': '#2d6d75',            // Links & metrics (same as teal-vibrant)
          'link-hover': '#1f4d54',      // Darker on hover

          // Label Color - For section labels
          'label': '#2d6d75',           // Uppercase section labels (same as teal)

          // Teal - Keep for accents only
          'teal-vibrant': '#2d6d75',    // Teal accent - darker for better contrast

          // Borders - Subtle separators
          'border-light': '#d2d2d7',    // Light borders
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        },
        spotlight: {
          '0%': { opacity: 0, transform: 'scale(0.9)' },
          '100%': { opacity: 1, transform: 'scale(1)' }
        }
      }
    }
  },
  plugins: [],
}
