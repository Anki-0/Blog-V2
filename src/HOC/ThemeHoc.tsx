import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colors } from '@/styles/Theme/colors';
import { fonts } from '@/styles/Theme/font';
import { useSideabarToggleValue } from '@/src/Context';
import { useThemeTogglerValue } from '@/src/Context';

const ThemeHOC: React.FC = ({ children }) => {
  const { isDark } = useThemeTogglerValue();
  const { toggle } = useSideabarToggleValue();

  return <ThemeProvider theme={{ colors, fonts, isDark, toggle }}>{children}</ThemeProvider>;
};
export default ThemeHOC;
