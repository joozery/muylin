/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tahoma: ["Tahoma", "sans-serif"], // ✅ เพิ่มฟอนต์ Tahoma
        prompt: ["Prompt", "sans-serif"], // ✅ เพิ่มฟอนต์ Prompt
      },
    },
  },
  plugins: [],
};