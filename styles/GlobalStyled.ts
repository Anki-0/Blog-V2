import { createGlobalStyle } from 'styled-components';
import { fonts } from './util/font.module';
import { prismDarkTheme } from '@/styles/util/Prism.module';

export const GlobalStyle = createGlobalStyle`

${fonts};

*,
*::before,
*::after{
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    zoom: 90%!important;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;

    @media only screen and (max-width:${639 / 16}em){
      font-size: 58%;
    }
  }

  body {
    font-family: 'sofia-pro', sans-serif;
    color:${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.dark.dark1)}; ;
    background-color: ${({ theme }) =>
      theme.isDark ? theme.colors.dark.dark : theme.colors.light.wh};
  }
  

  a {
    text-decoration: none;
    color: #3F8CFF;
  }
  img {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
    font-size: inherit;
 
  }

  article{
  ${prismDarkTheme};

  } 
  
  .page{
    display: flex;
    flex-direction: column;
    min-height: calc(100vh + 9.6rem);
    overflow: hidden;
  }

  .page__wrapper{
    flex-grow: 1;
    padding-left:  ${({ theme }) => (theme.toggle ? '9.6rem' : '25.6rem')};
    padding-top: 9.5rem;
    transition: padding .25s;

    @media only screen and (max-width: ${1023 / 16}em){
    padding-left: 0;
    }
    @media only screen and (max-width: ${767 / 16}em){
    padding-top: 8.0rem;
    }
  }
  .nprogress-busy{
    z-index:5000000;
    background-color: #fff;
    height: 2rem;
  }

  ::selection {
  color: #fff;
  background: #6C5DD3;
}




`;
