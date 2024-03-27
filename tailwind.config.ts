import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors(util) {
      return {
        black: util.colors.black,
        white: util.colors.white,
        foreground: "rgba(var(--foreground))",
        background: "rgba(var(--background))",
        primary: "rgba(var(--primary))",
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
