/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7B3FE4", // ✅ กำหนดสี primary
      },
    },
  },
  plugins: [],
};
