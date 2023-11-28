/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      // Main Black & General Site Backgrounds
      'black': '#100b0b',
      // Internal Backgrounds 
      'blue-dark': '#161C2A',
      // Font Color &  Border Color
      'white': '#FFFFFF',
      // Title Font Color
      'gray-light': '#ACB7C1',
      // Accent Color #1 - Gold
      'gold': '#FCA044',
      // Accent Color #2 - Light Blue
      'blue-light': '#1697D6',
      // Banner Colors - Blue/Black
      'banner-black': '#0d111c',
      'banner-gray': '#354251',
      // Divider Line - Purpleish
      'red': '#0D0D1C'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      xs: ['12px', '14px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['2rem', '2.5rem'],
      xxl: ['2.5rem', "3rem"],
      xxxl: ['3rem', "3.5rem"]
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      dropShadow: {
        'md': '0px 35px 35px #100b0b'
      },
    }
  },
  plugins: [],
}

