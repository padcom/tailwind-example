/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    },
  },
  plugins: [
    // Example list of plugins
    require("@tailwindcss/line-clamp")
  ],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
    respectDefaultRingColorOpacity: true,
  }
}
