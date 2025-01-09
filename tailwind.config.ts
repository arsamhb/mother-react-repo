import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8b00ff",
          "primary-content": "#e5d9ff",
          secondary: "#d96100",
          "secondary-content": "#110300",
          accent: "#00bdff",
          "accent-content": "#000d16",
          neutral: "#040705",
          "neutral-content": "#c4c6c5",
          "base-100": "#fff7ff",
          "base-200": "#ded7de",
          "base-300": "#beb7be",
          "base-content": "#161516",
          info: "#00a3ff",
          "info-content": "#000a16",
          success: "#50bb00",
          "success-content": "#020d00",
          warning: "#f6bb00",
          "warning-content": "#150d00",
          error: "#e15154",
          "error-content": "#120202",
        },
      },
    ],
  },
  theme: {
    extend: {
      padding: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
      },
      margin: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
      },
      spacing: {
        sm: "0.5rem",
        md: "1rem",
        lg: "2rem",
      },
      borderRadius: {
        sm: "1px",
        md: "2px",
        lg: "5px",
      },
      borderWidth: {
        sm: "1px",
        md: "3px",
        lg: "5px",
      },
      fontSize: {},
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
