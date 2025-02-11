/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        prompt: ["Prompt", "sans-serif"], // ✅ เพิ่มฟอนต์ Prompt
      },
    },
  },
  plugins: [],
};