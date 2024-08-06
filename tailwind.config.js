/** @type {import('tailwindcss').Config} */
export default {
  content: ["./packages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FDFDFD",
        black: "#111315",
        "btn-primary-start": "#9EA1FF",
        "btn-primary-end": "#607DE8",
        "btn-secondary-start": "#9EA1FF",
        "btn-secondary-end": "#607DE8",
        "btn-destructive": "#FF4858",
        "btn-destructive-start": "#FF384A",
        "btn-destructive-end": "#FF5463",
        "btn-accept-start": "#2ED573",
        "btn-accept-end": "#7BED9F",
      },
    },
  },
  plugins: [],
};
