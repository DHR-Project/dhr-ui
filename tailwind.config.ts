import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors() {
        return {
          bg: {
            primary: "var(--bg-primary)",
            secondary: "var(--bg-secondary)",
            tertiary: "var(--bg-tertiary)",
          },
          fill: {
            primary: "var(--fill-primary)",
            secondary: "var(--fill-secondary)",
            tertiary: "var(--fill-tertiary)",
            quaternary: "var(--fill-quaternary)",
          },
          label: {
            primary: "var(--label-primary)",
            secondary: "var(--label-secondary)",
            tertiary: "var(--label-tertiary)",
            quaternary: "var(--label-quaternary)",
          },
          separator: {
            DEFAULT: "var(--separator)",
            "none-opaque": "var(--separator-non-opaque)",
          },
          material: {
            regular: "var(--material-regular)",
            chrome: "var(--material-chrome)",
          },
          // colors
          accent: {
            DEFAULT: "rgba(var(--accent))",
          },
        };
      },
    },
    boxShadow() {
      return {
        xs: "0 1px 2px 0 rgb(213 213 213 / 30%)",
        "xs-inset": "0 1px 2px 0 rgb(213 213 213 / 30%) inset",
        "xs-focused":
          "0 1px 2px 0 rgb(213 213 213 / 45%), 0 0 0 4px rgb(213 213 213 / 45%), 0 0 0 1px var(--separator)",
        "xs-focused-error":
          "0 1px 2px 0 rgb(213 213 213 / 45%), 0 0 0 1px var(--system-red), 0 0 0 4px rgb(255 59 48 / 25%)",

        // lg
        lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
      };
    },
    borderColor: {
      DEFAULT: "var(--separator)",
      "none-opaque": "var(--separator-non-opaque)",
    },
    ringColor() {
      return {
        transparent: "transparent",
        DEFAULT: "var(--separator)",
        error: "var(--system-red)",
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
