/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl2: "1441px",
        lx: "1240px",
        dm: "653px",
        gl: "1083px",
        ms: "490px",
        xxs:"461px"
      },
    },
  },
  plugins: [],
};
