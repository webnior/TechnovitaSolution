/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
       // Or if using `src` directory:
       "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Important: Set important to true to ensure Tailwind classes take precedence when needed
  important: true,
  theme: {
    extend: {
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 0.2 }
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        twinkle: 'twinkle 3s infinite',
        'gradient-x': 'gradient-x 3s ease infinite'
      }
    }
  },
  // This ensures Tailwind doesn't purge styles from your existing CSS
  safelist: [
    // Add any dynamic classes that shouldn't be purged
    'animate-gradient-x'
  ],
  // Disable any Tailwind features that might conflict with your existing styles
  corePlugins: {
    preflight: false, // This prevents Tailwind from resetting existing styles
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ... other plugins ...
  ],
}
