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
      : 'linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(55,55,55,1) 38%, rgba(60,72,89,1) 100%);'};
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => (theme.isDark ? 'rgba(228, 228, 228, .1)' : theme.colors.light.border)};
  backdrop-filter: ${({ theme }) => (theme.isDark ? 'blur(8px)' : 'blur(0px)')};
  overflow: hidden;

  @media only screen and (max-width: ${768 / 16}em) {
    padding: 0 5rem;
  }
`;
export const BannerConetent = styled.div`
  color: ${({ theme }) => theme.colors.light.wh};
  .heading {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.cubano};
    font-size: 4rem;
    font-weight: 600;
    max-width: 49rem;
    margin-block-end: 2.6rem;
    word-wrap: break-word;

    & > span {
      background-image: linear-gradient(90deg, #fa8142, #ff4088);
      -webkit-background-clip: text;
      color: transparent;
    }
  }

  .subHeading {
    font-size: 2rem;
    max-width: 54rem;
    line-height: 1.6;

    & > span {
      background-image: linear-gradient(90deg, #fa8142, #ff4088);
      padding: 0.5rem 0.5rem;
      border-radius: 3px;
      font-size: 0.85em;
      font-weight: 700;
    }
  }
  @media only screen and (max-width: ${768 / 16}em) {
    /* text-align: center; */
    margin: auto;
  }
`;
export const BannerImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0rem;
  right: 4rem;
  max-width: 53rem;
  min-width: 100vw;
`;
