module.exports = {
    purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'arrow-left': 'url("public/images/projects/left-arrow.svg")',
                'arrow-right': 'url("public/images/projects/right-arrow.svg")',
                'sticky-note': 'url("public/images/projects/sticky-note.svg")',
                soon: 'url("public/images/projects/soon.png")',
                laptop: 'url("public/images/projects/laptop.png")',
            },
            variants: {},
            colors: {},
            spacing: {
                84: '21rem',
                90: '22rem',
                94: '23rem',
                384: '384px',
                '20/100': '20%',
                101: '30rem',
                102: '31rem',
                103: '32rem',
                104: '33rem',
                105: '34rem',
                106: '35rem',
                111: '40rem',
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