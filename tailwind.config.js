import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Bricolage Grotesque", "sans-serif"],
        primary: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F17329",
      },
    },
  },
  plugins: [],
});
