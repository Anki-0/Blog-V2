import { keyframes } from 'styled-components';

export const rotate = keyframes`
    0% {
      transform-origin: center;
      transform: translate();
      //opacity: 1;
    }
    100% {
      transform-origin: center;
      transform: rotate3d(0, 0, 1, 360deg);
      //opacity: 0;
    }
`;
