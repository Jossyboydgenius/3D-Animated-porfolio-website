// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };


// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {
      content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
      ],
    },
    autoprefixer: {},
  },
};
