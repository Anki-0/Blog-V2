import styled from 'styled-components';
import { rotate } from './Animation/Animaion';

/**(Toggle True) = SM Sidebar
 * &&
 * (Toggle Flase) = LG Sidebar*/

export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  flex-shrink: 0;
  background: ${({ theme }) => (theme.isDark ? `rgba(31,33,40,.7)` : theme.colors.light.wh)};
  backdrop-filter: blur(12px);

  width: ${({ theme }) => (theme.toggle ? '9.6rem' : '25.6rem')};
  height: 100%;
  padding: 9.6rem 0 7.2rem;
  overflow: hidden;
  box-shadow: inset -1px 0 0 0 ${({ theme }) => (theme.isDark ? theme.colors.dark.dark1 : theme.colors.light.border)};
  transition: width 0.25s;

  @media only screen and (max-width: ${1023 / 16}em) {
    z-index: 20;
    border: none;
    transform: ${({ theme }) => (theme.toggle ? 'translateX(-100%)' : 'translateX(0)')};
    transition: -webkit-transform 0.25s;
    transition: transform 0.25s;
  }
  @media only screen and (max-width: ${767 / 16}em) {
    top: 8rem;
    width: 100%;
    height: calc(100% - 8rem);
    padding: 0 0 6.4rem;
  }
`;

export const Top = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 9.6rem;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
export const Logo = styled.div`
  display: ${({ theme }) => (theme.toggle ? 'none' : '')};
  margin-right: 3.5rem;
  width: 10.7rem;

  .logo {
    fill: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : '#363636')};
  }
`;
export const Burger = styled.div`
  flex-shrink: 0;
  width: 3.2rem;
  height: 3.2rem;
  font-size: 0;
  cursor: pointer;
  &::after,
  &::before {
    content: '';
    display: inline-block;
    border-radius: 1px;
    background: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.light.bl)};
    width: 3.2rem;
    height: 0.2rem;
    margin: 0.3rem auto;
    transition: all 0.25s;
    &:hover {
      background: ${({ theme }) => theme.colors.light.purple};
    }
  }
`;

export const Wrapper = styled.div`
  max-height: 100%;
  padding: 0 2rem 3.5rem;
  overflow-y: auto;
  scrollbar-width: none;

  @media only screen and (max-width: ${767 / 16}em) {
    padding: 2rem 2rem 3.2rem;
  }
`;
export const Inner = styled.div`
  width: ${({ theme }) => (theme.toggle ? '5.6rem' : '21.6rem')};
  overflow: hidden;
  transition: all 0.25s;

  @media only screen and (max-width: ${767 / 16}em) {
    width: 100%;
  }
`;
export const Group = styled.div`
  position: relative;
  margin-bottom: 3rem;
  padding-bottom: 2rem.5rem;

  &::before {
    content: '';
    position: absolute;
    left: ${({ theme }) => (theme.toggle ? '0rem' : '2rem')};
    right: ${({ theme }) => (theme.toggle ? '0rem' : '2rem')};
    bottom: 0;
    height: 1px;
    background: ${({ theme }) =>
      theme.isDark ? 'rgba(228,228,228, 0.1)' : theme.colors.light.border};
  }

  @media only screen and (max-width: ${767 / 16}em) {
    margin-bottom: 2rem;
    padding-bottom: 1%.5rem;
  }
`;
export const Caption = styled.div`
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  white-space: nowrap;
  color: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.dark.dark1)};
  transition: padding 0.25s;
  font-size: 1.2rem;

  padding: ${({ theme }) => (theme.toggle ? '0rem' : '')};
  text-align: ${({ theme }) => (theme.toggle ? 'center' : '')};

  & > span {
    display: ${({ theme }) => (theme.toggle ? 'none' : '')};
  }
`;
export const menu = styled.div`
  .items {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    align-items: center;
    height: 5.6rem;
    //padding-right: 20px;
    border-radius: 1.2rem;
    background: transparent;
    white-space: nowrap;
    font-size: 1.4rem;
    font-weight: 600;
    color: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.light.graydark)};

    &:hover {
      background-color: #293249;
      box-shadow: 3px 5px 20px 0 rgb(0, 0, 0, 0.12);
      transition: all 0.25s;
      color: ${({ theme }) => theme.colors.light.wh};
      svg {
        fill: ${({ theme }) => theme.colors.light.wh};
        transition: all 0.25s;
      }
    }
    &.active {
      background: ${({ theme }) => theme.colors.light.bluemd};
      color: ${({ theme }) => theme.colors.light.wh};

      &:hover {
        background: rgba(0, 118, 255, 0.9);
        box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
      }
      & svg {
        fill: ${({ theme }) => theme.colors.light.wh};
      }
    }
  }
`;
export const SidebarIcon = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;

  flex-shrink: 0;
  width: ${({ theme }) => (theme.toggle ? '5.6rem' : '6rem')};
  height: 56px;
  padding: ${({ theme }) => (theme.toggle ? '0rem' : '0 0 0 .4rem')};

  transition: all 0.25s;

  & > svg {
    fill: ${({ theme }) => theme.colors.light.graylight};
    font-size: 2rem;
  }
`;
export const SidebarText = styled.div`
  margin-right: auto;
  padding-right: 1rem;
  transition: margin 0.25s;
`;
export const Bottom = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 7.2rem;
  padding: 0 4.2rem 0 4rem;
  box-shadow: inset 0px 1px 0px rgb(0 0 0 / 5%);
  transition: padding 0.25s;
  @media only screen and (max-width: ${767 / 16}em) {
    height: 6.4rem;
    padding-right: 4rem;
    justify-content: flex-start;
    left: 7rem;
  }
`;
export const ThemeSwitch = styled.div`
  display: inline-block;
  position: relative;
  user-select: none;
  cursor: pointer;
  font-size: 0;
  transition: opacity 0.25s;
`;

export const Box = styled.div`
  position: relative;
  display: block;
  width: 6.4rem;
  height: 2rem.4rem;
  background: ${({ theme }) =>
    theme.isDark ? 'rgba(240, 243, 246, 0.1)' : 'rgb(227, 227, 227, .5)'};
  border-radius: 1.6rem;
  transition: all 0.25s;
  display: ${({ theme }) => (theme.toggle ? 'none' : '')};

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 2px;
    transform: ${({ theme }) => (theme.isDark ? 'translate(48px, -50%);' : 'translateY(-50%)')};
    width: ${({ theme }) => (theme.isDark ? '.4rem' : '2rem')};
    height: ${({ theme }) => (theme.isDark ? '1.6rem' : '2rem')};
    border-radius: ${({ theme }) => (theme.isDark ? '.2rem' : '50%')};

    border: ${({ theme }) =>
      theme.isDark
        ? `.2rem solid ${theme.colors.light.blue}`
        : `.4rem solid ${theme.colors.light.wh}`};

    box-shadow: 0px 4px 8px rgb(0 0 0 / 16%);
    background: #1875e1;
    transition: all 0.25s;
  }
`;
export const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: ${({ theme }) => (theme.toggle ? '-1.2rem' : '-5.8rem')};
  transform: translateY(-50%);
  font-size: 0;
  transition: all 0.5s;

  & > .icon {
    animation: ${({ theme }) => (theme.isDark ? rotate : rotate)} 1s;
    animation-fill-mode: both;
  }

  & > .icon {
    font-size: 2.8rem;
    fill: ${({ theme }) => theme.colors.light.green};
  }
`;
