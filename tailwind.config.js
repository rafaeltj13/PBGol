export default {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        // Light theme
        primary: "#159895",
        secondary: "#aed09e",
        text: "#61B292",
        background: "#f1f3f5",
        sidebar: "#f0f1f3",
        accent: "#7e6752",

        //Dark Theme
        "primary-dark": "#2E4F4F",
        "secondary-dark": "#044343",
        "text-dark": "#0E8388",
        "background-dark": "#03001C",
        "sidebar-dark": "#1B2430",
        "accent-dark": "#3C2A21",
      },
      spacing: {
        88: "22rem",
      },
      fontFamily: {
        sans: ["Comfortaa", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
