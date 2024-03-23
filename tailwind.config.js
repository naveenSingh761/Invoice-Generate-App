/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "400px",
      },
      fontFamily: {
        "alegreya-sans": ['"Alegreya Sans"', "sans-serif"],
        "dancing-script": ['"Dancing Script"', "cursive"],
        eczar: ['"Eczar"', "serif"],
        pacifico: ['"Pacifico"', "cursive"],
        "playfair-display": ['"Playfair Display"', "serif"],
        satisfy: ['"Satisfy"', "cursive"],
        Lora: ['"Lora"', "cursive"],
        Roboto: ['"Roboto"', "cursive"],
      },
      boxShadow: {
        air1: [
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        ],
        air2: [
          "rgba(50, 50, 93, 0.25) 0px 50px 25px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        ],
        air3: ["rgba(0, 0, 0, 0.2) 0px 25px 15px -5px"],
      },
    },
  },
  plugins: [],
};
