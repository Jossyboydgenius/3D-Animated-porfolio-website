import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("@tailwindcss/typography")],
};
export default config;






// import type { Config } from "tailwindcss";
// import typography from '@tailwindcss/typography';

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radical": "radical-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     }
//   },
//   plugins: [
//     require("@tailwindcss/typography")
//   ],
//   // plugins: [typography],
// };
// export default config;

