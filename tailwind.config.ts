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
        foreground: "var(--foreground)",
        background: {
          DEFAULT: "var(--background-foreground)",
          foreground: "var(--background)",
          neutral: "var(--background-neutral)",
          normal: "var(--background-normal)",
        },
        text: {
          DEFAULT: "var(--text)",
          primary: "var(--text-foreground)",
          hover: "var(--text-hover)",
        },
        button: {
          DEFAULT: "var(--button)",
          foreground: "var(--button-foreground)",
          hover: "var(--button-hover)",
          secondaryHover: "var(--button-secondary-hover)",
        },
      },
      keyframes: {
        scaleEffect: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        scaleEffect: "scaleEffect 1s infinite ease-in-out",
      },
    },
    screens: {
      largerMax: { max: "1600.1px" },
      largerMin: { min: "1600.1px" },
      // => @media (max-width: 1600) { ... }
      xxxlMax: { max: "1366.1px" },
      xxxlMin: { min: "1366.1px" },
      // => @media (max-width: 1600) { ... }

      xxlMax: { max: "1280.1px" },
      xxlMin: { min: "1280.1px" },
      // => @media (max-width: 1366) { ... }

      xlMax: { max: "1024.1px" },
      xlMin: { min: "1024.1px" },
      // => @media (max-width: 1024) { ... }

      lgMax: { max: "991.1px" },
      lgMin: { min: "991.1px" },
      // => @media (max-width: 991) { ... }

      mdMax: { max: "768.1px" },
      mdMin: { min: "768.1px" },
      // => @media (max-width: 768) { ... }

      smMax: { max: "576.1px" },
      smMin: { min: "576.1px" },
      // => @media (max-width: 576) { ... }

      xsMax: { max: "375.1px" },
      xsMin: { max: "375.1px" },
      // => @media (max-width: 375) { ... }
    },
  },
  plugins: [],
};
export default config;
