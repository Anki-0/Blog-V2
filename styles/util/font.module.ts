import { css } from 'styled-components';

export const fonts = css`
  @font-face {
    font-family: 'Sofia Pro';
    src: url('SofiaProBold.eot');
    src: local('Sofia Pro Bold'), local('SofiaProBold'),
      url('../../public/fonts/sofia-pro/SofiaProBold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: url('SofiaProRegular.eot');
    src: local('Sofia Pro Regular'), local('SofiaProRegular'),
      url('../../public/fonts/sofia-pro/SofiaProRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: url('SofiaProMedium.eot');
    src: local('Sofia Pro Medium'), local('SofiaProMedium'),
      url('../../public/fonts/sofia-pro/SofiaProMedium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: url('SofiaProBlack.eot');
    src: local('Sofia Pro Black'), local('SofiaProBlack'),
      url('../../public/fonts/sofia-pro/SofiaProBlack.woff') format('woff');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro';
    src: url('SofiaProLight.eot');
    src: local('Sofia Pro Light'), local('SofiaProLight'),
      url('../../public/fonts/sofia-pro/SofiaProLight.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Sofia Pro Semi';
    src: url('SofiaProSemiBold.eot');
    src: local('Sofia Pro Semi Bold'), local('SofiaProSemiBold'),
      url('SofiaProSemiBold.eot?#iefix') format('embedded-opentype'),
      url('SofiaProSemiBold.woff') format('woff'), url('SofiaProSemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'cubano';
    src: local('Cubano'), local('Cubano'),
      url('../../public/fonts/cubano/Cubano.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'R Regular';
    font-style: normal;
    font-weight: normal;
    src: local('R Regular'), url('../../public/fonts/cubano/R Regular.woff') format('woff');
  }
`;
