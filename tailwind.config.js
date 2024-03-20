/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
      xxl: "3rem",
    },
    extend: {
      colors: {
        primaryColor: "#88B4F5",
        grayColor: "#bdbdbd",
        borderColor: "#273248",
        overlayColor: "#06080C",
      },
    },
  },
  plugins: [],
};
