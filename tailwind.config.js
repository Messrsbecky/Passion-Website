/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        Yellow: "#E3C648",
        FaintYellow: "#F2E5AB80",
        DullGold: "#938B8B",
        White: "#FAFAFA",
        DarkPurple: "#0A0217",
        gray: "#D9D9D9",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
