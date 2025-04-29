import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        dark: "#395886",
        "dark-light": "#628ECB",
        "light-dark": "#8AAEE0",
        light: "B1C9EF",
        "dark-white": "#D5DEEF",
        "light-white": "#F0F3FA",
        "com-primary": "#01204E",
        "com-secondary": "#3D4B80",
        "com-light": "#EAEEFF",
        "com-grey": "#444655",
        "com-gray": "#A8AABC",
        "gray-500": "#AAAEA9",
      },
      backgroundImage: {
        "com-gradient-primary":
          "linear-gradient(97deg, rgba(238,62,56,1) 20%, rgba(68,70,85,1) 80%)",
        "com-gradient-secondary":
          "linear-gradient(97deg, rgba(68,70,85,1) 20%,rgba(238,62,56,1) 80%)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
export default config;
