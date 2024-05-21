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
          secondary: "rgba(var(--secondary))",
          licorice: "rgba(var(--licorice))",
          input: "rgba(var(--input))",
        };
      },
    },
    boxShadow() {
      return {
        xs: "0 1px 2px 0 rgba(var(--licorice), 5%)",
        "xs-inset": "0 1px 2px 0 rgba(var(--licorice), 5%) inset",
        "xs-focused":
          "0 1px 2px 0 rgba(var(--licorice), 15%), 0 0 0 4px rgba(var(--secondary), 10%)",
        "xs-focused-error":
          "0 1px 2px 0 rgba(var(--licorice), 5%), 0 0 0 4px rgba(var(--focused-error), 100%)",
      };
    },
    ringColor: {
      DEFAULT: "rgba(var(--ring))",
      error: "rgba(var(--error))"
    },
    borderColor: {
      DEFAULT: "rgba(var(--border))",
    }
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
