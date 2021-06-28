import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    /* min-width: 375px; */
    font-family: 'Raleway', sans-serif;
    font-size: 62.5%;
    /* font-size: 1.4rem; */
    line-height: ${20 / 14};
    color:${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.dark.dark1)}; ;
    background-color: ${({ theme }) =>
      theme.isDark ? theme.colors.dark.dark1 : theme.colors.light.wh};
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    font-family: 'Inter',sans-serif;
  }
  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
  }
  .page{
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
  }

  .page__wrapper{
    flex-grow: 1;
    padding-left:  ${({ theme }) => (theme.toggle ? '9.6rem' : '25.6rem')};
    padding-top: 96px;
    transition: all .25s;

    @media only screen and (max-width: ${1023 / 16}em){
    padding-left: 0;
    }
    @media only screen and (max-width: ${767 / 16}em){
    padding-top: 80px;
    }
  }

  ::selection {
  color: #fff;
  background: #6C5DD3;
}
`;
