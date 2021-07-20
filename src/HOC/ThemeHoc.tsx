import React from 'react';
import { colors } from '../../styles/Theme/colors';
import { useSideabarToggleValue } from '../Context/SidebarToggleContext';
import { useThemeTogglerValue } from '../Context/ThemeTogglerContext';
import { ThemeProvider } from 'styled-components';

const ThemeHOC: React.FC = ({ children }) => {
  const { isDark } = useThemeTogglerValue();
  const { toggle } = useSideabarToggleValue();

  return <ThemeProvider theme={{ colors, isDark, toggle }}>{children}</ThemeProvider>;
};
export default ThemeHOC;
