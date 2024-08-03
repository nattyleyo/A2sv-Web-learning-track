import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0000",
        text: {
          1: "#25324B",
          2: "#7C8493",
          3: "#56CDAD",
          4: "#FFB836",
          5: "#4640DE",
          6: "#26A4FF",
        },
      },
      backgroundColor: {
        bg: {
          1: "#2a3b850a",
        },
      },
      borderColor: {
        bd: {
          1: "#D6DDEB",
        },
      },
      borderWidth: {
        px: "1px",
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Epilogue: ["Epilogue"],
      },
    },
  },
  plugins: [],
};
export default config;
