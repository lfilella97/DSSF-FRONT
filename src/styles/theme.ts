import "@fontsource/roboto";
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colour: {
    main: "#132A13",
    secondary: "#1d1d1d",
    brokenWhite: "#e8e8e8",
    white: "#fff",
  },
  fonts: {
    title: "Roboto",
    titleFontSizeS: "1.25rem",
    titleFontSizeM: "1.5rem",
    titleFontSizeXL: "2.5rem",
    text: "Roboto",
    textFontSizeS: "1rem",
    textFontSizeM: "1.25rem",
    textFontSizeL: "1.5rem",
    textFontSizeXL: "1.875rem",
  },
  border: {
    borderRadiusSmall: "10px",
    borderRadiusLarge: "15px",
  },
  padding: {
    mainMobilePadding: "10px",
    mainDesktopPadding: "20px",
    secondaryMobilePadding: "20px",
    secondaryDesktopPading: "40px",
  },
};
