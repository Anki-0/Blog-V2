// my-theme.ts
import { common, dark } from '../../interface/styled';

interface theme {
  light: common;
  dark: dark;
}

export const colors: theme = {
  light: {
    bl: '#1B1D21',
    wh: '#ffffff',
    purple: '#6C5DD3',
    purplelight: '#CFC8FF',
    text: '#11142D',
    graydark: '#545863',
    graymd: '#757575',
    graylight: '#B2B3BD',
    orange: '#FF754C',
    pink: '#FFA2C0',
    pinklight: '#FFEBF6',
    yellow: '#FFCE73',
    yellowlight: '#FFE2AC',
    blue: '#3F8CFF',
    bluelight: '#A0D7E7',
    bluemd: '#1875e1',
    bluedark: '#0049C6',
    border: '#E4E4E4',
    borderlight: '#F0F3F6',
    green: '#7FBA7A',
    link: '#5F75EE'
  },
  dark: { dark: '#1F2128', dark1: '#242731' }
};
