import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colour: {
      main: string;
      secondary: string;
      brokenWhite: string;
      white: string;
    };
    fonts: {
      title: string;
      titleFontSizeS: string;
      titleFontSizeM: string;
      titleFontSizeXL: string;
      text: string;
      textFontSizeS: string;
      textFontSizeM: string;
      textFontSizeL: string;
      textFontSizeXL: string;
    };
    border: {
      borderRadiusSmall: string;
      borderRadiusLarge: string;
    };
    padding: {
      mainMobilePadding: string;
      mainDesktopPadding: string;
      secondaryMobilePadding: string;
      secondaryDesktopPading: string;
    };
  }
}
