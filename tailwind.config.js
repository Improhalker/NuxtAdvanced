module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.{vue,js}',
        './pages/**/*.{vue,js}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    plugins: [
        require('@tailwindcss/typography')
    ]
}