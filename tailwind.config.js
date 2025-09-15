/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        exito: "#9046FF", // color de prueba
      },
      spacing: {
        prueba: "50px", // spacing de prueba
      },
    },
  },
  plugins: [],
};

///** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         // Light Theme
//         lightBody: "#fff",
//         lightText: "#202020",
//         lightCarousel: "#9955ff",
//         lightBg: "rgb(255,255,255)",
//         lightBgAlpha: "rgba(250,250,250,.3)",
//         lightBg2: "rgb(245,245,245)",
//         lightBg3: "#fff",
//         lightBg4: "#eaeaea",
//         lightBg5: "#9046FF",
//         lightTotal: "#EDF3FB",
//         lightDerecha: "#fff",
//         lightSubtitle: "#2c2c2c",

//         // Dark Theme
//         darkBody: "#202020",
//         darkText: "#fff",
//         darkCarousel: "#9955ff",
//         darkBg: "#2C2C2E",
//         darkBgAlpha: "rgba(0,0,0,.3)",
//         darkBg2: "rgb(30,30,30)",
//         darkBg3: "#2C2C2E",
//         darkBg4: "#4E4E50",
//         darkBg5: "#BF94FF",
//         darkTotal: "#1C1C1E",
//         darkDerecha: "#21252B",
//         darkSubtitle: "#b7b7b7",

//         // Comunes
//         primary: "rgb(52, 131, 235)",
//         secondary: "#DAC1FF",
//         ingresos: "#53B257",
//         bgingresos: "#e6ffe7",
//         gastos: "#fe6156",
//         bggastos: "#fbcbc9",
//         error: "#F54E41",
//         exito: "#9046FF",
//       },
//       fontSize: {
//         xs: "0.75em", // fontxs
//         sm: "0.875em", // fontsm
//         base: "1em", // fontmd
//         px16: "16px", // font16px
//         lg: "1.25em", // fontlg
//         xl: "2em", // fontxl
//         xxl: "3em", // fontxxl
//         xxxl: "4em", // fontxxxl
//         button: "0.875em", // fontButton
//       },
//       spacing: {
//         sm: "8px",
//         md: "16px",
//         lg: "24px",
//         xl: "32px",
//         xxl: "48px",
//       },
//       borderRadius: {
//         DEFAULT: "6px",
//       },
//       boxShadow: {
//         gray: "-2px 14px 20px -4px rgba(0,0,0,0.4)",
//       },
//       screens: {
//         maggie: "15em",
//         lisa: "30em",
//         bart: "48em",
//         marge: "62em",
//         homer: "75em",
//       },
//     },
//   },
//   plugins: [],
// };
