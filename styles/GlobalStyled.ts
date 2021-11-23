import { createGlobalStyle } from 'styled-components';
import { fonts } from './util/font.module';

export const GlobalStyle = createGlobalStyle`

${fonts};

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
    zoom: 90%!important;
    /* @media only screen and (max-width: ${1200 / 16}em) {
      font-size: 50%;
      } */
  }

  body {
    /* min-width: 375px; */
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
    font-family: 'Montserrat',sans-serif;
 
  }
  
  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
  }

  article{
    &  h1,h2,h3,h4,h5,h6{
      padding-bottom: .9rem;
    border-bottom: 1px solid #333;
    margin-bottom: 1.6rem;
    }
    &  h1{
      font-size: 3.2rem;
    }
    &  h2{
      font-size: 2.4rem;
    }
    &  h3{
      font-size: 2rem;
    }
    &  h4{
      font-size: 1.6rem;
    }
    &  h5{
     font-size:1.4rem
    }
    &  h6{
     font-size:1.36rem
    }

    & hr{height: .25em;
    padding: 0;
    margin: 24px 0;
    background-color: #30363d;
    border: 0;}

    &  blockquote{
      padding: 1rem 1.6rem;
    color: #8b949e;
    border-left: .25em solid #3a424a;
    margin-bottom: 1.6rem;
    }
    & ul,ol{
      padding-left: 2em;
    margin-bottom: 1.6rem;
    & li{
      list-style: circle;
      & p{
        margin: 1.6rem;
      }
    }
    }

    & ol{
      & li{
        list-style: unset;    
        margin-top: .25em;
      }
    }
  

    & img{
      max-width: 35%;
      border: none;
      vertical-align: middle;
      display: inline-block;
    }

    & pre {
    padding: 1.8rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background: #161b22 !important;
    border-radius: 6px;
    margin: 1.6rem 0;
    color: #d9d9d9;
  }
  &  code {
    padding: 0.2em 0.4em;
    margin: 0;
    /* font-size: 85%; */
    background: #161b22 !important;
    /* color: #c9d1d9; */
    color: #3e8eff;
    border-radius: 6px;
  }
  &  p{
    font-size: 1.6rem;
    margin-bottom: 1.6rem;
    line-height: 3.1rem;
    letter-spacing:.8px;
  }
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
    padding-top: 80px;
    }
  }

  ::selection {
  color: #fff;
  background: #6C5DD3;
}
`;
