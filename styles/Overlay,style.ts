import styled from 'styled-components';

export const Backdrop = styled.div`
  /* background-color: rgba(255, 255, 255, 0.5); */
  position: fixed;
  top: 0;
  left: 0;
  height: calc(100% + 1rem);
  width: 100%;
  opacity: 1;
  z-index: 10;
  backdrop-filter: blur(4.5px);
  background: rgba(31, 33, 40, 0.2);
  box-shadow: inset 0 -1px 0 0 rgb(228 228 228 / 10%);
  /* top: 9rem; */
  overflow: hidden;
`;
