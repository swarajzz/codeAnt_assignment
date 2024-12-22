/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: {
          100: "#414651",
          200: "#171717",
          300: "#181D27",
          400: "#081735",
          "dark-white": "#FAFAFA",
          "darker-white": "#F5F5F5",
        },
        accent: {
          100: "#0049C6",
          200: "#1570EF",
          300: "#175CD3",
        },
        borderColors: {
          1: "#E9EAEB",
          2: "#D5D7Da",
          3: "#E6E8F0",
          4: "#D8DAE5",
        },
      },
      boxShadow: {
        1: "0px 0px 24px 0px #08173529",
        2: "0px 1px 2px 0px #0A0D120D",
      },
    },
  },
  plugins: [],
};
