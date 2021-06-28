// import original module declarations
import 'styled-components';

type common = {
  readonly bl: string;
  readonly wh: string;
  readonly purple: string;
  readonly purplelight: string;
  readonly text: string;
  readonly graydark: string;
  readonly graymd: string;
  readonly graylight: string;
  readonly orange: string;
  readonly pink: string;
  readonly pinklight: string;
  readonly yellow: string;
  readonly yellowlight: string;
  readonly blue: string;
  readonly bluelight: string;
  readonly bluemd: string;
  readonly bluedark: string;
  readonly border: string;
  readonly borderlight: string;
  readonly green: string;
  readonly link: string;
};
type dark = {
  readonly dark: string;
  readonly dark1: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: common;
      dark: dark;
    };
    isDark: boolean;
    toggle: boolean;
    toggle: boolean;
  }
}
