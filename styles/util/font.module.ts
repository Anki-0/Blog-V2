import { css } from 'styled-components';

export const fonts = css`
  @font-face {
    font-family: 'Sofia Pro';
    src: local('Sofia Pro Bold'), local('SofiaProBold'),
      url(${'/fonts/sofia-pro/SofiaProBold.woff'}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: local('Sofia Pro Regular'), local('SofiaProRegular'),
      url(${'/fonts/sofia-pro/SofiaProRegular.woff'}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: local('Sofia Pro Medium'), local('SofiaProMedium'),
      url(${'/fonts/sofia-pro/SofiaProMedium.woff'}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: local('Sofia Pro Black'), local('SofiaProBlack'),
      url(${'/fonts/sofia-pro/SofiaProBlack.woff'}) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: local('Sofia Pro Light'), local('SofiaProLight'),
      url(${'/fonts/sofia-pro/SofiaProLight.woff'}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro Semi';
    src: local('Sofia Pro Semi Bold'), local('SofiaProSemiBold'),
      url(${'/fonts/sofia-pro/SofiaProSemiBold.woff'}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'cubano';
    src: local('Cubano'), local('Cubano'), url(${'/fonts/cubano/Cubano.woff'}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
