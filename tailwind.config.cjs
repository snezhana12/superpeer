/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin.js');

module.exports = {
<<<<<<< HEAD
  content: ['./build/**/*.html'],
  important: true,
  theme: {
    container: {
      center: true,
      screens: {
        mobile: '1900px',
      },
    },
    extend: {
      colors: {
        boxShadow: {
          '2xl': '0px 4px 4px rgba(45, 122, 53, 0.15)',
          '3xl': '0px 4px 4px rgba(0, 0, 0, 0.05)',
        },
        green: '#2D7A4C',
        lime:'#2D7A35',
        grass: '#7DC138',
        yellow: '#F5BE34',
        orange: '#F5E234',
      },
      screens: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1200px'
      },
      animation: {
        'nav-show': 'nav-show 2s ',
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
          color: '#fff',
          fontSize: `calc(30px + 25 * ((100vw - 320px)/ 1600))`,
          fontWeight: 'bold'
=======
    content: ['./build/**/*.html', './src/**/*.html'],
    important: true,
    theme: {
        container: {
            center: true,
            screens: {
                mobile: '1680px',
            },
>>>>>>> origin
        },
        extend: {
            colors: {
                boxShadow: {
                    '2xl': '0px 4px 4px rgba(45, 122, 53, 0.15)',
                    '3xl': '0px 4px 4px rgba(0, 0, 0, 0.05)',
                },
                green: '#2D7A4C',
                blue: '#313D66',
                lime: '#2D7A35',
                grass: '#7DC138',
                yellow: '#F5BE34',
                orange: '#F5E234',
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
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: `calc(28px + 20 * ((100vw - 320px)/ 1600))`,
                    color: '#2D7A4C'
                },
                '.button': {
                    display: 'block',
                    width: 'fit-content',
                    padding: '15px 50px 18px',
                    marginTop: '50px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    borderRadius: '100px',
                    fontWeight: 'medium',
                    fontSize: `calc(18px + 6 * ((100vw - 320px)/ 1600))`,
                    lineHeight: '1',
                    color: '#fff',
                    background: 'linear-gradient(180deg, #F5BE34 -13.93%, #F5E234 114.75%)',
                    cursor: 'pointer'
                }
            })
        })
    ]
}