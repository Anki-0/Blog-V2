import styled from 'styled-components'

export const SearchFrom = styled.form`
  position: relative;
  flex-shrink: 0;
  width: 20rem;
  margin-right: auto;

  @media only screen and (min-width: ${768 / 16}em) {
    display: block !important;
    height: 2.4rem !important;
  }
  @media only screen and (max-width: ${767 / 16}em) {
    display: none !important;
  }
`
export const SearchInput = styled.input`
  width: 100%;
  height: 2.4rem;
  padding-left: 4rem;
  background: none;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.light.text)};
`
export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 2rem;
  font-size: 0;
  background: rgba(0, 0, 0, 0);

  & > #icon_search {
    font-size: 2rem;

    width: 2rem;
    height: 2rem;
    transition: fill 0.25s;
    fill: ${({ theme }) => theme.colors.light.graylight};
  }
`
