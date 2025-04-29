module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',     // Main background (light, white)
        surface: '#5e9188',         // Surface elements (cards, sections) - muted green
        primaryText: '#3e5954',     // Primary text - dark greenish gray
        secondaryText: '#253342',   // Secondary text - dark bluish gray
        emphasis: '#232226',        // Emphasis/strong contrast - almost black
        accent: '#58A6FF',          // Accent color - vibrant blue (buttons, links)
        accentHover: '#6E40C9',     // Accent color on hover - vivid violet
      },
      keyframes: {
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-slow': 'gradientMove 10s ease infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
