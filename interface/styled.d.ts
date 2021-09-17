// import original module declarations
import 'styled-components';

type common = {
  bl: string;
  wh: string;
  purple: string;
  purplelight: string;
  text: string;
  graydark: string;
  graymd: string;
  graylight: string;
  orange: string;
  pink: string;
  pinklight: string;
  yellow: string;
  yellowlight: string;
  blue: string;
  bluelight: string;
  bluemd: string;
  bluedark: string;
  border: string;
  borderlight: string;
  green: string;
  link: string;
};
type dark = {
  dark: string;
  dark1: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: common;
      dark: dark;
    };
    isDark: boolean;
    toggle: boolean;
  }
}
