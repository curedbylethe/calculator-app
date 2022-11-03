/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme1-main-bg": "hsl(222, 26%, 31%)",
        "theme1-keypad-bg": "hsl(223, 31%, 20%)",
        "theme1-screen-bg": "hsl(224, 36%, 15%)",
        "theme1-key-bg": "hsl(225, 21%, 49%)",
        "theme1-key-shadow": "hsl(224, 28%, 35%)",
        "theme1-red-keybg-toggle": "hsl(6, 63%, 50%)",
        "theme1-red-key-shadow": "hsl(6, 70%, 34%)",
        "theme1-light-key-bg": "hsl(30, 25%, 89%)",
        "theme1-grayish-key-shadow": "hsl(28, 16%, 65%)",
        "theme1-text-color": "hsl(221, 14%, 31%)",
      },
    },
  },
  plugins: [],
};
