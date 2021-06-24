import styled from 'styled-components'

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
  background: ${({ theme }) => (theme.isDark ? theme.colors.dark.dark : theme.colors.light.wh)};
  backdrop-filter: blur(12px);
  box-shadow: inset 0 -1px 0 0 ${({ theme }) => (theme.isDark ? 'rgba(228, 228, 228, .1)' : theme.colors.light.border)};
  transition: left 0.25s;

  @media only screen and (max-width: ${1023 / 16}em) {
    left: 0;
  }
  @media only screen and (max-width: ${767 / 16}em) {
    height: 80px;
    padding: 0 24px;
  }
`
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
    transition: all 0.25s;
    &:hover {
      background: ${({ theme }) => theme.colors.light.purple};
    }
  }
  @media only screen and (max-width: ${1023 / 16}em) {
    display: inline-block;
  }
  &::before {
    @media only screen and (max-width: ${767 / 16}em) {
      transform: ${({ theme }) => (!theme.toggle ? 'translateY(4px) rotate(45deg)' : '')};
    }
  }
  &::after {
    @media only screen and (max-width: ${767 / 16}em) {
      transform: ${({ theme }) => (!theme.toggle ? 'translateY(-4px) rotate(-45deg)' : '')};
    }
  }
`

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
`
export const HeaderHead = styled.div`
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
  }
`
export const HeaderBody = styled.div`
  position: absolute;
  visibility: hidden;
  opacity: 0;
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
`
export const StarIcon = styled.div``
export const BrowseText = styled.div``
