// my-theme.ts
import { Icommon, Idark } from '../../interface/styled';

interface theme {
  light: Icommon;
  dark: Idark;
}

export const colors: theme = {
  light: {
    bl: '#1B1D21',
    text: '#11142D',
    graydark: '#545863',
    graymd: '#757575',
    graylight: '#adafca',
    border: '#E4E4E4',
    borderlight: '#F0F3F6',
    wh: '#ffffff',
    bluedark: '#0049C6',
    bluemd: '#1875e1',
    blue: '#3F8CFF',
    link: '#5F75EE',
    purple: '#6C5DD3',
    purplelight: '#CFC8FF',
    yellow: '#FFCE73',
    yellowlight: '#FFE2AC',
    orange: '#FF754C',
    pink: '#FFA2C0',
    pinklight: '#FFEBF6',
    bluelight: '#A0D7E7',
    green: '#7FBA7A'
  },
  dark: { dark: '#1F2128', dark1: '#242731' }
};
