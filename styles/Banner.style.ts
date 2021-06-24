import styled from 'styled-components';

export const Banner = styled.div`
  position: relative;
  height: 35rem;
  max-height: 35rem;
  padding: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(45deg, rgb(31, 33, 40, 0), rgb(31, 33, 40, 0.69));
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => (theme.isDark ? 'rgba(228, 228, 228, .1)' : theme.colors.light.border)};
  backdrop-filter: blur(8px);
  overflow: hidden;

  .heading {
    font-size: 7rem;
  }
`;
export const BannerConetent = styled.div``;
export const BannerImage = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 5rem;
  width: 70rem;
`;
