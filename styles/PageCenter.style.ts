import styled from 'styled-components';

export const PageCenter = styled.div`
  /* max-width: 134.4rem; */
  margin: 0 auto;
  padding: 4.4rem 6rem;

  & > hr {
    background: ${({ theme }) => (theme.isDark ? 'rgb(60, 63, 70)' : 'rgba(60, 63, 70, .15)')};
    height: 0.1rem;
  }

  @media only screen and (max-width: ${1023 / 16}em) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media only screen and (max-width: ${767 / 16}em) {
    padding: 3.2rem 2.4rem 4rem;
  }
`;
