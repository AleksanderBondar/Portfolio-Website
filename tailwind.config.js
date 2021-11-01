module.exports = {
    purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {},
            variants: {},
            colors: {},
            spacing: {
                384: '384px',
                '20/100': '20%',
                101: '30rem',
            },
            fontFamily: {},
            keyframes: {
                'fade-in-down': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    'fade-in-down': {
                        '0%': {
                            opacity: '0',
                            transform: 'translateY(-40px)',
                        },
                        '100%': {
                            opacity: '1',
                            transform: 'translateY(0)',
                        },
                    },
                    'fade-out-down': {
                        from: {
                            opacity: '1',
                            transform: 'translateY(0px)',
                        },
                        to: {
                            opacity: '0',
                            transform: 'translateY(10px)',
                        },
                    },
                    'fade-in-up': {
                        '0%': {
                            opacity: '0',
                            transform: 'translateY(10px)',
                        },
                        '100%': {
                            opacity: '1',
                            transform: 'translateY(0)',
                        },
                    },
                    'fade-out-up': {
                        from: {
                            opacity: '1',
                            transform: 'translateY(0px)',
                        },
                        to: {
                            opacity: '0',
                            transform: 'translateY(10px)',
                        },
                    },
                    wiggle: {
                        '0%, 100%': {
                            transform: 'rotate(-3deg)',
                        },
                        '50%': {
                            transform: 'rotate(3deg)',
                        },
                    },
                },
            },
            animation: {
                'fade-in-down': 'fade-in-down 0.5s ease-out',
                'fade-in-down': 'fade-in-down 2s ease-out',
                'fade-out-down': 'fade-out-down 0.5s ease-out',
                'fade-in-up': 'fade-in-up 0.5s ease-out',
                'fade-out-up': 'fade-out-up 0.5s ease-out',
                wiggle: 'wiggle 1s ease-in-out infinite',
            },
        },
    },
    variants: {
        animation: ['responsive', 'motion-safe', 'motion-reduce', 'hover'],
    },
    plugins: [],
};