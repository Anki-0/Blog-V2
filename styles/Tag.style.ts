import styled from 'styled-components';

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0.7rem;
  background: ${({ theme }) => (theme.isDark ? theme.colors.dark.dark1 : '#fafafa')};
  box-shadow: ${({ theme }) =>
    theme.isDark
      ? '5px 5px 17px #1c1e26, -5px -5px 17px #2c303c'
      : '7px 7px 14px #e6e6e6,-7px -7px 14px #ffffff'};
  height: 3.6rem;
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
      font-size: 1.4rem;
    }
  }
`;
