import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  safelist: [
    "mt-0",
    "mt-1",
    "mt-2",
    "mt-3",
    "mt-4",
    "mt-5",
    "mt-6",
    "mt-8",
    "mt-10",
    "mt-12",
    "mt-16",
    "mt-[2px]",
    "mt-[5px]",
    "mt-[9px]",
    "mt-[11px]",
    "mt-[13px]",
    "mt-[15px]",
    "mt-[17px]",
    "mt-[23px]",
    "mt-[32px]",
    "mt-[54px]",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        "21": "21px",
        "31": "31px",
      },
      height: {
        "91": "91px",
      },
      screens: {
        xxs: "280px",
        xs: "320px",
        oneplus: "412px",
        dininofirni: "170px",
      },
    },
  },
  plugins: [],
};

export default config;
