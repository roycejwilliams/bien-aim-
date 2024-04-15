import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        nerfos: [ 'nerfos', 'sans-serif'],
      },
      height: {
        40: '40px',
        50: '50px',
        75: '75px',
        80: '80px',
        100: '100px',
        150: '150px',
        170: '170px',
        300: '300px',
        400: '400px',
        450: '450px',
        500: '500px',
        600: '600px',
        700: '700px',
        750: "750px",
        800: '800px',
        900: "900px",
        1000: '1000px',
        1300: '1300px',
        1600: '1600px',
        1800: '1800px',
        2000: '2000px'
      },
      width: {
        300: '400px',
      },
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        deepGreen: "#0D3000",
        deepBrown: "#7E5C15",
        eggshell: "#FFFFC8"
      },
      rotate: {
        '90': '90deg',
      },
      animation: {
        fillProgressBar: 'fillProgressBar 3s ease-out', // Adjust duration and easing function as needed
      },
      keyframes: {
        fillProgressBar: {
          '0%': {
            width: '0',
           
          },
          '100%': {
            width: '100%',
            
          },
        },
      },
      boxShadow: {
        'custom': '0px 0px 10px 10px rgba(0,0,0,0.68) ',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
    
  },
  plugins: [],
};

export default config;
