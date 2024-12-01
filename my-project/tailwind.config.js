/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          1: "#071013",
          2: "#23B5D3",
          3: "#75ABBC",
          4: "#A2AEBB",
          5: "#DFE0E2",
          6: "#f93d5d",
          7: "#1A1F16",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#071013",
          2: "#23B5D3",
          3: "#75ABBC",
          4: "#A2AEBB",
          5: "#DFE0E2",
          6: "#f93d5d",
          7: "#15131D",
          8: "#071013",
          9: "#23B5D3",
          10: "#75ABBC",
          11: "#A2AEBB",
          12: "#DFE0E2",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "gradient-to-t-1": "linear-gradient(to top, #071013, #1A1F16)", // darken
        "gradient-to-r-1": "linear-gradient(to right, #071013, #1C2223)", // lighter shade
        "gradient-to-b-1": "linear-gradient(to bottom, #071013, #1B1F20)", // darker shade
        "gradient-to-l-1": "linear-gradient(to left, #071013, #1A1F16)", // darken
        "gradient-to-br-1":
          "linear-gradient(to bottom right, #071013, #1C2223)", // lightened shade

        // Color 2 gradients
        "gradient-to-t-2": "linear-gradient(to top, #23B5D3, #1E9B9C)", // lighter shade of 2
        "gradient-to-r-2": "linear-gradient(to right, #23B5D3, #1E9B9C)", // lightened blue-green
        "gradient-to-b-2": "linear-gradient(to bottom, #23B5D3, #1A7F87)", // darker blue-green
        "gradient-to-l-2": "linear-gradient(to left, #23B5D3, #1E9B9C)", // lightened
        "gradient-to-br-2":
          "linear-gradient(to bottom right, #23B5D3, #1A7F87)", // darker blue-green

        // Color 3 gradients
        "gradient-to-t-3": "linear-gradient(to top, #75ABBC, #A2AEBB)", // slight shift
        "gradient-to-r-3": "linear-gradient(to right, #75ABBC, #A2AEBB)", // smooth transition
        "gradient-to-b-3": "linear-gradient(to bottom, #75ABBC, #A2AEBB)", // smooth transition
        "gradient-to-l-3": "linear-gradient(to left, #75ABBC, #A2AEBB)", // smooth transition
        "gradient-to-br-3":
          "linear-gradient(to bottom right, #75ABBC, #A2AEBB)", // smooth transition

        // Color 4 gradients
        "gradient-to-t-4": "linear-gradient(to top, #A2AEBB, #B7C4D0)", // lighter shade of 4
        "gradient-to-r-4": "linear-gradient(to right, #A2AEBB, #B7C4D0)", // lightened blue-grey
        "gradient-to-b-4": "linear-gradient(to bottom, #A2AEBB, #BCC6D1)", // more lightened grey
        "gradient-to-l-4": "linear-gradient(to left, #A2AEBB, #B7C4D0)", // lightened
        "gradient-to-br-4":
          "linear-gradient(to bottom right, #A2AEBB, #BCC6D1)", // lightened grey

        // Color 5 gradients
        "gradient-to-t-5": "linear-gradient(to top, #DFE0E2, #F4F5F7)", // lighter shade of 5
        "gradient-to-r-5": "linear-gradient(to right, #DFE0E2, #F4F5F7)", // lightened grey
        "gradient-to-b-5": "linear-gradient(to bottom, #DFE0E2, #F4F5F7)", // very lightened grey
        "gradient-to-l-5": "linear-gradient(to left, #DFE0E2, #F4F5F7)", // lightened
        "gradient-to-br-5":
          "linear-gradient(to bottom right, #DFE0E2, #F4F5F7)", // very lightened grey
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
