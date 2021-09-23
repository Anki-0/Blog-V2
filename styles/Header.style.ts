import styled from 'styled-components';

interface props {
  show: boolean;
}

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: ${({ theme }) => (theme.toggle ? '9.6rem' : '25.6rem')};
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  height: 9.6rem;
  padding: 0 6.4rem;
  /* box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%); */
  backdrop-filter: blur(4.5px);
  background: ${({ theme }) => (theme.isDark ? ' rgba(31, 33, 40, 0.2)' : theme.colors.light.wh)};
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => (theme.isDark ? 'rgba(228, 228, 228, .1)' : theme.colors.light.border)};
  transition: left 0.25s;

  @media only screen and (max-width: ${1023 / 16}em) {
    left: 0;
  }
  @media only screen and (max-width: ${767 / 16}em) {
    height: 80px;
    padding: 0 24px;
  }
`;
export const HeaderBurger = styled.button`
  display: none;
  flex-shrink: 0;
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 3.2rem;
  font-size: 0;
  background: none;
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    display: inline-block;
    border-radius: 1px;
    background: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.light.bl)};
    width: 3.2rem;
    height: 2px;
    margin: 3px auto;
    &:hover {
      background: ${({ theme }) => theme.colors.light.purple};
    }
  }
  @media only screen and (max-width: ${1023 / 16}em) {
    display: inline-block !important;
  }
  &::before {
    @media only screen and (max-width: 767px) {
      transform: ${({ theme }) => (!theme.toggle ? 'translateY(4px) rotate(45deg)' : '')};
    }
  }
  &::after {
    @media only screen and (max-width: 767px) {
      transform: ${({ theme }) => (!theme.toggle ? 'translateY(-4px) rotate(-45deg)' : '')};
    }
  }
`;

export const HeaderBrowse = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 17rem;
  margin-right: 10.3rem;
  @media only screen and (max-width: ${1419 / 16}em) {
    margin-right: 6.4rem;
  }
  @media only screen and (max-width: ${1259 / 16}em) {
    width: 13rem;
    margin-right: 4rem;
  }
  @media only screen and (max-width: ${767 / 16}em) {
    display: none;
  }
`;
export const HeaderHead = styled.div<props>`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  height: 2.4rem;
  padding-right: 2.4rem;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light.graylight};
  transition: color 0.25s;
  font-size: 1.3rem;

  &:hover {
    color: ${({ theme }) => theme.colors.light.purple};
    #icon_arrow-down,
    #icon_location {
      fill: ${({ theme }) => theme.colors.light.purple};
    }
  }

  & #icon_location {
    width: 2rem;
    height: 2rem;
    margin-right: 1.8rem;
    font-size: 2rem;
    fill: ${({ theme }) => theme.colors.light.graylight};
  }
  & #icon_arrow-down {
    position: absolute;
    top: 55%;
    right: 0.5rem;
    transform: translateY(-50%);
    font-size: 0.6rem;
    transition: all 0.25s;
    width: 1rem;
    height: 0.6rem;
    fill: ${({ theme }) => theme.colors.light.graylight};
    transform: ${({ show }) => (show ? 'translateY(-50%) rotate(180deg)' : '')};
  }
`;
export const HeaderBody = styled.div<props>`
  position: absolute;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: all 0.25s;
  padding: 6px 22px;
  background: #3f8cff;
  border-radius: 16px;
  top: calc(100% + 3.8rem);
  left: 0;
  width: 256px;

  &:before {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: -6px;
    z-index: -1;
    background: rgba(63, 140, 255, 0.5);
    border-radius: 16px;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    width: 16px;
    height: 6px;
    left: 57px;
    background-color: #3f8cff;
    clip-path: polygon(50% 0, 0 100%, 100% 100%);
    border-radius: 5rem;
  }

  & > .links {
    display: flex;
    align-items: center;
    height: 56px;
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    transition: opacity 0.25s;
    cursor: pointer;
  }
`;
export const StarIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  font-size: 0;

  & > svg {
    font-size: 20px;
    fill: #ffffff;

    transition: fill 0.25s;
  }
`;
export const BrowseText = styled.div`
  flex-grow: 1;
  padding: 0 16px;
`;

export const AuthControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  & > a:not(:last-child) {
    margin-right: 1.5rem;
  }
`;
