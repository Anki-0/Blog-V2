import styled from 'styled-components';

export const Main__Wrapper = styled.div`
  .Heading {
    font-size: 3.1rem;
    padding-bottom: 2rem;
    letter-spacing: 1px;
  }
`;
export const Settings__wrapper = styled.div`
  display: flex;
  justify-content: center;
  max-width: 104rem !important;

  padding-top: 6rem;
  padding-right: 2rem;
  padding-left: 2rem;
  margin-right: auto;
  margin-left: auto;
`;
export const Settings__sidebar = styled.div`
  padding-right: 20rem !important;
  width: 26.5rem !important;
  flex: 0 0 auto;
  @media screen and (max-width: 1199px) {
    display: none !important;
  }
  .settings__nav {
    .nav__items {
      list-style: none;
      font-size: 1.6rem;
      cursor: pointer;
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
      &:hover {
        color: #2196f3;
        font-weight: 600;
      }
    }
  }
`;
export const Settings__content = styled.div`
  width: 100%;
  max-width: 76rem !important;
  flex: 0 0 auto;
`;
export const AboutYou = styled.div``;
export const Heading = styled.header`
  font-size: 3rem;
  letter-spacing: 0;
  position: relative;
  font-weight: 500;
  margin-bottom: 1rem;
`;
export const List = styled.ul`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;
export const List__Items = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 4rem 0 3%.5rem;
  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
  /* .wrapper {
    display: flex;
    align-items: center;
    padding: 40px 0 35px; */

  .main__wrapper {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    margin-top: 1rem;
    flex: 1 1 auto;
    margin-right: 1rem;
    width: 100%;
    @media (max-width: 767px) {
      padding-bottom: 2rem;
    }

    .heading {
      letter-spacing: -0.02em !important;
      font-weight: 700 !important;
      font-style: normal !important;
      letter-spacing: 0 !important;
      font-size: 2.1rem !important;
      line-height: 2.4rem !important;
      transform: translateY(-1.88px);
      letter-spacing: -0.29px !important;
    }

    input {
      border-bottom: 1px solid rgb(255 255 255 / 24%) !important;
      display: block;
      border: none;
      background: none;
      color: #eee;
      margin: 2rem 0;
      font-weight: 400;
      padding-bottom: 1rem;
      font-size: 1.5rem;
    }

    .delete-account {
      text-decoration: underline;
      margin-top: 2rem;
      cursor: pointer;
      color: tomato;
      padding: 2rem 0;
      width: max-content;
      transition: color, font-size, font-weight 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        color: #ff4929;
        font-size: 1.7rem;
        font-weight: 600;
      }
    }
  }
  .button__wrapper {
    /* display: flex; */
    align-self: flex-start;
    .button {
      line-height: 3.7rem;
      padding: 0 1.6rem;
      border: 1px solid rgb(255 255 255 / 63%);
      border-radius: 1rem;
      background: none;
      color: #fff;
      cursor: pointer;
      align-self: flex-start;
    }
  }
`;

export const Email = styled.div`
  margin-top: 3rem;
`;
