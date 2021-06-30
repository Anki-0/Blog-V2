import React from 'react';
import { PageCenter } from '../../styles/PageCenter.style';

const ThemeHOC: React.FC = ({ children }) => {
  return <PageCenter>{children}</PageCenter>;
};
export default ThemeHOC;
