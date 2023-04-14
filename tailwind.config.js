/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin.js');

module.exports = {
    content: ['./build/**/*.html', './src/**/*.html'],
    important: true,
    theme: {
        container: {
            center: true,
            screens: {
                mobile: '1680px',
            },
        },
        extend: {
            colors: {
                peach: '#FFF9E8',
                purpure: '#F0ECFF',
                yellow: '#FFD338',
                dark: '#222222',
            },
            screens: {
                mobile: '320px',
                tablet: '768px',
                desktop: '1200px'
            },
            animation: {
                'nav-show': 'nav-show 2s',
            },
            flex: {
                'header': '0 0 auto',
                'main': '1 0 auto',
                'footer': '0 0 auto',
            },
            fill: {
                'bg': '#171717'
            }
        }
    },
    plugins: [
        plugin(function ({matchUtilities, addComponents, theme}) {
            matchUtilities(
                {
                    'response-font': (value) => ({
                        fontSize: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            fontSize: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-margin': (value) => ({
                        margin: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            margin: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-mt': (value) => ({
                        marginTop: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            marginTop: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-mr': (value) => ({
                        marginRight: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            marginRight: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-mb': (value) => ({
                        marginBottom: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            marginBottom: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-ml': (value) => ({
                        marginLeft: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            marginLeft: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-padding': (value) => ({
                        padding: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            padding: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-pt': (value) => ({
                        paddingTop: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            paddingTop: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-pr': (value) => ({
                        paddingRight: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            paddingRight: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-pb': (value) => ({
                        paddingBottom: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            paddingBottom: `${value.split('-')[0]}px`,
                        },
                    }),
                    'response-pl': (value) => ({
                        paddingLeft: `calc(${value.split('-')[1]}px + ${value.split('-')[0] - value.split('-')[1]} * ((100vw - 320px)/ 1600))`,
                        "@media (min-width: 1920px)": {
                            paddingLeft: `${value.split('-')[0]}px`,
                        },
                    })
                }
            )
            addComponents({
                '.title': {
                    fontWeight: 'normal',
                    fontSize: `36px`,
                    lineHeight: '1',
                    color: '#222222'
                },

                '.subtitle': {
                    fontWeight: 'normal',
                    fontSize: `20px`,
                    lineHeight: '1',
                    color: '#555555'
                },
                '.button': {
                    display: 'block',
                    width: 'fit-content',
                    padding: '15px 50px 18px',
                    borderRadius: '8px',
                    fontWeight: 'normal',
                    fontSize: `16px`,
                    lineHeight: '2',
                    color: '#000000',
                    background: '#FFD338',
                    cursor: 'pointer'
                },
                '.button_sign': {
                    display: 'block',
                    width: 'fit-content',
                    borderRadius: '8px',
                    fontWeight: 'normal',
                    fontSize: `16px`,
                    lineHeight: '2',
                    color: '#000000',
                    background: '#FFFFFF',
                    cursor: 'pointer',
                    borderWidth: '1px',
                },
                '.swiper-pagination-bullet': {
                    background: 'yellow',
                },
            })
        })
    ]
}