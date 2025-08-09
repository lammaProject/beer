module.exports = {
    content: [
        // ваши пути к файлам
    ],
    theme: {
        extend: {
            animation: {
                'float-up': 'floatUp 3s ease-out infinite',
            },
            keyframes: {
                floatUp: {
                    '0%': {
                        transform: 'translateY(0)',
                        opacity: '0.6',
                    },
                    '100%': {
                        transform: 'translateY(-200px)',
                        opacity: '0',
                    },
                },
            },
        },
    },
    plugins: [
        // Плагин для animation-delay утилит
        function ({addUtilities}) {
            const delays = {
                '.animation-delay-500': {
                    'animation-delay': '0.5s',
                },
                '.animation-delay-1000': {
                    'animation-delay': '1s',
                },
                '.animation-delay-1500': {
                    'animation-delay': '1.5s',
                },
                '.animation-delay-2000': {
                    'animation-delay': '2s',
                },
            }
            addUtilities(delays)
        },
    ],
}