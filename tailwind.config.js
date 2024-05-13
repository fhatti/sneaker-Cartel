/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        palanquin: ["Palanquin", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        //ELEMENTS
        background: "#004643",
        headline: "#fffffe",
        paragraph: "#abd1c6",
        button: "#f9bc60",
        "btn-text": "#001e1d",
        //ILLUSTRATION
        main: "#e8e4e6",
        secondary: "#abd1c6",
        stroke: "#001e1d",
        highlight: "#f9bc60",
        tertiary: "#e16162",
        subHeadline: "#0f3433",
        cardP: "#abd1c6",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
      keyframes: {
        "slide-fwd-center": {
          '0%': { transform: 'scale(.9)' },
          '100%': { transform: 'scale(1.2)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)'}
        },
      },
      animation: {
        "slide-fwd-center":'slide-fwd-center 2s ease 0s 1 normal forwards',
        "wiggle":"wiggle 1s ease-in-out infinite",
        "fadeInUp": "fadeInUp 5s ease 0s 1 normal forwards"
        
      },
    },
  },
  plugins: [],
};

