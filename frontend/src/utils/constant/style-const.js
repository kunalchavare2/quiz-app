//Veriables related about font weights

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
};

export const color = {
  //  White color variations
  white: "#ffffff",

  // Blue color variations
  blue500: "#181725",

  // Gray color variations
  gray100: "#7C7C7C",
  gray200: "#F2F3F2",
  gray300: "#E2E2E2",
  gray400: "#030303",
  gray500: "#4C4F4D",

  // Black color variations
  black: "#000000",
  black500: "#4C4F4D",

  // Green color variations
  green100: "#53B175",
  green200: "#489E67",
  greenSheen: "#85b8b7",

  // Orange color variations
  orange100: "#F8A44C",
  orange200: "#F3603F",

  denger: "#dc3545",

  dark100: "#121212",
  dark200: "#282828",
  dark300: "#3f3f3f",
};

export const fontSize = {
  // Heading font sizes
  headingExtraLarge: "5.25rem",
  headingLarge: "4.5rem",
  headingMedium: "3.75rem",
  headingRegular: "3rem",
  headingSmall: "2.25rem",
  headingExtraSmall: "1.875rem",

  // Title font sizes
  titleLarge: "1.5rem",
  titleRegular: "1.25rem",
  titleSmall: "1.125rem",

  // Body font sizes
  body: "1rem",

  // caption/subtitles font sizes
  captionRegular: "0.875rem",
  captionSmall: "0.75rem",
  captionExtraSmall: "0.7rem",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const boxshadow = {
  appbar: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
};

export const opacity = (percentage) => {
  let decimal = (percentage * 255) / 100;
  return Math.round(decimal).toString(16);
};
