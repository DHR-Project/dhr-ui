import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors() {
        return {
          foreground: "rgba(var(--foreground))",
          background: "rgba(var(--background))",
          primary: "rgba(var(--primary))",
        };
      },
    },
    dropShadow() {
      return {
        xs: "0 1px 2px rgba(16, 24, 40, 5%)",
        "xs-focused": [
          "0 1px 2px rgba(16, 24, 40, 5%)",
          "4px 4px 0 rgba(255, 71, 11, 10%)",
          "-4px -4px 0 rgba(255, 71, 11, 10%)",
        ],
      };
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const flexDirection = {
        ".vertical": {
          display: "flex",
          "flex-direction": "column",
        },
        ".horizontal": {
          display: "flex",
          "flex-direction": "row",
        },
      };
      addUtilities(flexDirection);
    }),
  ],
};
export default config;
