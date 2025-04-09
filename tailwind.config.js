module.exports = {
    theme: {
      extend: {
        animation: {
          'bounce-slow': 'bounce 3s ease-in-out infinite alternate',
          'bounce-reverse': 'bounce-reverse 3s ease-in-out infinite alternate',
        },
        keyframes: {
          'bounce-reverse': {
            '0%': { transform: 'translateY(-40px)' },
            '100%': { transform: 'translateY(40px)' },
          },
        },
        fontFamily: {
          'prosto': ['"Prosto One"', 'sans-serif'],
        },
      },
    },
  };