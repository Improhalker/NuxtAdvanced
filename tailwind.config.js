module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js}',
        './layouts/**/*.{vue,js}',
        './pages/**/*.{vue,js}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        img: {
                            borderRadius: '0.5rem',
                            maxWidth: '30%',
                            margin: '1rem auto',
                            display: 'block',
                        },
                    },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],

}