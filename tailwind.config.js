/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "service-hero": "url('./src/assets/Images/serviceHeroImage.svg')",
        largeFooterTexture: "url('./src/assets/Images/largeFooterPattern.png')",
        errorImage: "url('./src/assets/Images/404page.svg')",
      },
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
