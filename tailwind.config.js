/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const colors = require('tailwindcss/colors')
export default {
  content:[
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
theme: {
  extend: {}, colors: {
    transparent: 'transparent',
    current: 'currentColor',
    black: colors.black,
    white: colors.white,
    gray: colors.gray,
    emerald: colors.emerald,
    indigo: colors.indigo,
    yellow: colors.yellow,
    red: colors.red,
    amber: colors.amber,
    green: colors.green
  },
},
darkMode: "class",
    plugins: [nextui()]
}

