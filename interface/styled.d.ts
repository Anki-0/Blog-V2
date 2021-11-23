// import original module declarations
import 'styled-components';

interface Icommon {
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
}
interface Idark {
  dark: string;
  dark1: string;
}

export interface font {
  cubano: string;
  sofia: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: Icommon;
      dark: Idark;
    };
    fonts: font;
    isDark: boolean;
    toggle: boolean;
  }
}
