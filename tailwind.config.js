/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "luminescent-300": "rgb(209, 244, 3)",
        "luminescent-500": "rgb(191, 223, 0)",
        "luminescent-700": "rgb(146, 170, 2)",
      },
    },
  },
  plugins: [],
};
