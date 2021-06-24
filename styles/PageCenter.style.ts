import styled from 'styled-components';

export const PageCenter = styled.div`
  /* max-width: 134.4rem; */
  margin: 0 auto;
  padding: 4.4rem;

  .test {
    display: flex;

    & > .posts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4.8rem;
    }
    & > .side {
      width: 60rem;
      margin-left: 2rem;
      background-color: #e2e2e2;
      @media only screen and (max-width: ${1173 / 16}em) {
        width: 55rem;
      }
      @media only screen and (max-width: ${1023 / 16}em) {
        width: 33rem;
      }
      @media only screen and (max-width: ${1000 / 16}em) {
        display: none;
        cursor: none;
        pointer-events: none;
      }
    }
  }

  @media only screen and (max-width: ${1023 / 16}em) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media only screen and (max-width: ${767 / 16}em) {
    padding: 3.2rem 2.4rem 4rem;
  }
`;
