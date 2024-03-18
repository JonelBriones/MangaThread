/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        phone: "480px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      screens: {
        phone: "480px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
      minWidth: {
        "30": "480px",
      },
    },
  },
  plugins: [],
};
