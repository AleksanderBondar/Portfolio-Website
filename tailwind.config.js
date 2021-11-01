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
                px: '1px',
                '25px': '25px',
                '50px': '50px',
                '160px': '160px',
                '360px': '360px',
                0: '0px',
                0.5: '0.125rem',
                1: '0.25rem',
                1.5: '0.375rem',
                2: '0.5rem',
                2.5: '0.625rem',
                3: '0.75rem',
                3.5: '0.875rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                9: '2.25rem',
                10: '2.5rem',
                11: '2.75rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
                28: '7rem',
                32: '8rem',
                36: '9rem',
                40: '10rem',
                44: '11rem',
                48: '12rem',
                52: '13rem',
                56: '14rem',
                60: '15rem',
                64: '16rem',
                72: '18rem',
                80: '20rem',
                96: '24rem',
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