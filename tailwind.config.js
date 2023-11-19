/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      white:"#fff",
      contentSecondary:"#777676",
      contentPrimary:"#050505",
      primaryStroke:"#E4E4E4",
      baseBrand:"#4643EE",
      baseError:"#D13B3B",
      bgError:"#F6D8D8",
      contentTertiary:"#ADADAD",
      bgRaised:"#F5F5F5",
      blueLight:"#EAEAFE",
      contentError:"#7D2424"
    },
    extend: {
      fontFamily:{
        "letter":["lettera","inter"]
      },
    },
  },
  plugins: [],
}

