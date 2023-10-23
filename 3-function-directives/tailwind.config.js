/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class',
      theme: {
        extend : {
            spacing: {
                '13': '3.25rem'
            },
            colors: {
                kopi: '#c0ffee'
            },
            Animation: {
                'spin-slow' : 'spin 3s linear infinite',
                'goyang' : 'wiggle 1s ease-in-out infinite',
            },
            keyFrame: {
                'wiggle' : {
                    '0%, 100%' : {transform : 'rotate (-3deg)'},
                    '50%' : {transform:'rotate(3deg)'}
                },
            },
        },
      },
  plugins: [],
}

