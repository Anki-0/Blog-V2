import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  height: 35rem;
  max-height: 35rem;
  padding: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) =>
    theme.isDark
      ? 'linear-gradient(45deg, rgb(31, 33, 40, 0), rgb(31, 33, 40, 0.69))'
      : 'linear-gradient(45deg, rgb(31, 33, 40, 0), rgb(31, 33, 40, 0))'};
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => (theme.isDark ? 'rgba(228, 228, 228, .1)' : theme.colors.light.border)};
  backdrop-filter: ${({ theme }) => (theme.isDark ? 'blur(8px)' : 'blur(0px)')};
  overflow: hidden;

  .heading {
    font-size: 7rem;
  }
`;
export const BannerConetent = styled.div`
  .subHeading {
    font-size: 2rem;
  }
  @media only screen and (max-width: ${768 / 16}em) {
    text-align: center;
    margin: auto;
  }
`;
export const BannerImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0rem;
  right: 4rem;
  width: 53rem;
`;
