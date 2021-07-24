import React from 'react';
import { ThemeProvider } from 'styled-components';
import { colors } from '../../styles/Theme/colors';
import { useSideabarToggleValue } from '../Context/SidebarToggleContext';
import { useThemeTogglerValue } from '../Context/ThemeTogglerContext';

const ThemeHOC: React.FC = ({ children }) => {
  const { isDark } = useThemeTogglerValue();
  const { toggle } = useSideabarToggleValue();

  return <ThemeProvider theme={{ colors, isDark, toggle }}>{children}</ThemeProvider>;
};
export default ThemeHOC;
