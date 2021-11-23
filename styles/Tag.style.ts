import styled from 'styled-components';

type props = {
  fontSize: number;
  height: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
};

export const Tag = styled.div<props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ borderRadius }) => (!borderRadius ? '0.7rem' : borderRadius)};

  //if color prop is not avilable then check for darkmode
  //if enabled set @color to white
  //else set @color to black
  //if color-prop then set @color to color-prop
  color: ${({ theme, color }) =>
    !color ? (theme.isDark ? theme.colors.light.wh : theme.colors.light.text) : color};

  background: ${({ backgroundColor }) => backgroundColor};
  box-shadow: ${({ theme }) =>
    theme.isDark
      ? '5px 5px 17px #1c1e26, -5px -5px 17px #2c303c'
      : '7px 7px 14px #e6e6e6,-7px -7px 14px #ffffff'};
  height: ${({ height }) => height};
  width: max-content;
  text-align: center;
  padding: 0.8rem 1.6rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) =>
      theme.isDark
        ? 'linear-gradient(145deg, #20232c, #272a34)'
        : 'linear-gradient(145deg, #e1e1e1, #ffffff);'};
    box-shadow: ${({ theme }) =>
      theme.isDark ? 'inset 5px 5px 14px #1e2028, inset -5px -5px 14px #2a2e3a' : ''};
  }

  & > p {
    & > span {
      font-size: ${({ fontSize }) => fontSize}rem;
    }
  }
`;
