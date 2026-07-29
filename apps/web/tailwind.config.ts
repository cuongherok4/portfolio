import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#18211f",
        paper: "#f6f4ef",
        moss: "#2f6f63",
        ember: "#c76f3f"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(24, 33, 31, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
