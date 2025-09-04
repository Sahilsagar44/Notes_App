/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.js", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        story: ["Story Script", "sans-serif"],
        assimovian: ["Assimovian", "sans-serif"],
      },
      fontSize: {
        dynamic: "var(--font-size-dynamic)",
      },

    },
  },
  plugins: [],
}