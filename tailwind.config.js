/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

delete color.lightBlue;
delete color.warmGray;
delete color.trueGray;
delete color.coolGray;
delete color.blueGray;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: { screen: {} },
    fontSize: {
      ...fontSize,
    },
    fontFamily: {
      'noto-black': ['Noto Serif TC Black', 'serif'],
      'noto-semiBold': ['Noto Serif TC SemiBold', 'serif'],
      'noto-medium': ['Noto Serif TC Medium', 'serif'],
      'noto-regular': ['Noto Serif TC Regular', 'serif'],
    },
    colors: {
      ...color,
      primary: '#E83F43',
      secondary: '#ff5454',
      // tertiary: '#ff0066',
      // quaternary: '#00ff00',
      backgroundColor: '#EB3F43',
      textColor: '#000',
      'OM-red-300': '#E83F43',
      'OM-red-200': '#F58E8F',
      'OM-red-100': '#FBCECE',
      'OM-gray-400': '#262526',
      'OM-gray-300': '#545659',
      'OM-gray-200': '#A6A6A8',
      'OM-gray-100': '#F0F0F0',
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
