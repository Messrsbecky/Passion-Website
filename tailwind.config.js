/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
  },
  plugins: [],
};
