import styled from 'styled-components';

export const landing = styled.div`
  width: 100%;
  height: 100%;
  background: url(${'/landing/landing-background.jpg'}) no-repeat left center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  @media screen and (max-width: ${1365 / 16}em) {
    padding: 8rem 0 10rem;
    position: static;
  }
`;

export const landing_decoration = styled.div`
  width: 64%;
  height: 140%;
  border-radius: 50%;
  background: url(${'/landing/dot-texture.png'}) repeat left top #fff;
  position: absolute;
  top: -20%;
  right: -32%;
  pointer-events: none;
  @media screen and (max-width: ${1500 / 16}em) {
    display: none;
  }
`;

export const landing_info = styled.div`
  width: 58.4rem;
  position: absolute;
  top: 16%;
  left: 13%;
  @media screen and (max-width: ${1500 / 16}em) {
    left: 6%;
  }
  @media screen and (max-width: ${1365 / 16}em) {
    width: 100%;
    position: static;
  }
  .landing-info-pretitle,
  .landing-info-title,
  .landing-info-text {
    color: ${({ theme }) => theme.colors.light.wh};
    text-align: center;
  }
  .landing-info-pretitle,
  .landing-info-title {
    text-transform: uppercase;
    font-family: Titillium Web, sans-serif;
    font-size: 6.5rem;
    font-weight: 900;
    position: relative;
    top: -1rem;

    span {
      font-size: 2rem;
      vertical-align: text-top;
    }
  }
  .landing-info-pretitle {
    margin-top: 3.6rem;
    font-size: 2.5rem;
    font-weight: 500;
  }
  .landing-info-title {
    @media screen and (max-width: ${500 / 16}em) {
      font-size: 5.75rem;
    }
    @media screen and (max-width: ${411 / 16}em) {
      font-size: 4.75rem;
    }
  }
  .landing-info-text {
    width: 38.4rem;
    margin: 1rem auto 0;
    font-size: 1.8rem;
    line-height: 1.3333333333em;
    font-weight: 500;
    @media screen and (max-width: ${1365 / 16}em) {
      display: none;
    }
  }
`;

export const tab_switch = styled.div`
  margin-top: 9rem;
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${1500 / 16}em) {
    margin-top: 4rem;
  }
  .tab-switch-button {
    width: 18rem;
    height: 5.4rem;
    border: 1px solid ${({ theme }) => theme.colors.light.wh};
    color: ${({ theme }) => theme.colors.light.wh};
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 5.4rem;
    text-align: center;
    cursor: pointer;
    background: none;
    transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  }
  .tab-switch-button:first-child {
    border-top-left-radius: 1.2rem;
    border-bottom-left-radius: 1.2rem;
  }
  .tab-switch-button:last-child {
    border-top-right-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
  }
  & .active {
    color: ${({ theme }) => theme.colors.light.graydark};
    background-color: ${({ theme }) => theme.colors.light.wh};
    cursor: auto;
  }
`;

export const logo = styled.div`
  display: flex;
  justify-content: center;
`;

export const landing_form = styled.div`
  width: 48.4rem;
  height: 100%;
  position: absolute;
  top: 0;
  right: 13%;
  @media screen and (max-width: ${1500 / 16}em) {
    right: 8rem;
  }
  @media screen and (max-width: ${1365 / 16}em) {
    width: 100%;
    margin-top: 8rem;
    position: static;
  }
  @media screen and (min-width: ${2560 / 16}em) {
    right: 20%;
  }
  .form-box {
    position: absolute;
    top: 50%;
    left: 0;

    &:first-child {
      margin-top: -23.3rem;
    }
    &:last-child {
      margin-top: -28rem;
    }
  }
`;
export const form_box = styled.div`
  width: 48.4rem;
  padding: 6.4rem;
  border-radius: 1.2rem;
  background-color: #fff;
  box-shadow: 0 0 6rem 0 rgb(94 92 154 / 12%);
  position: relative;
  color: ${({ theme }) => theme.colors.light.text};

  @media screen and (max-width: ${1365 / 16}em) {
    margin: 0 auto !important;
    position: static !important;
  }
  @media screen and (max-width: ${600 / 16}em) {
    width: 90% !important;
  }

  .cross-icon {
    &::before {
      content: '➕';
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 50%;
      top: 2rem;
      right: 2rem;
      cursor: pointer;
      background: #fafafa;
      box-shadow: 7px 7px 14px #e6e6e6, -7px -7px 14px #ffffff;
      transition: transform 0.1s ease-in-out, background 0.3s ease-in-out;
    }
    &:hover {
      &::before {
        transform: scale(1.1);
        transform: rotate(36deg);
        background: linear-gradient(145deg, #e1e1e1, #ffffff);
      }
    }
  }

  &:first-child,
  &:last-child {
    transform: translate(50%, 0px);
    opacity: 0;
    visibility: hidden;
    z-index: 1;
    position: absolute;
    left: 0px;
    transition: all 0.6s ease-in-out 0s;
    @media screen and (max-width: ${1365 / 16}em) {
      display: none;
    }
  }

  &.active {
    transform: translate(0px, 0px);
    opacity: 1;
    visibility: visible;
    z-index: 2;
    display: block;
  }

  & .form-box-decoration {
    position: absolute;
    top: -6.8rem;
    left: -8rem;
  }

  & .form-box-title {
    font-size: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
    font-weight: 700;
  }

  .lined-text {
    font-size: 1.4rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    margin-top: 40px;

    &::before,
    &::after {
      content: '';
      width: 70px;
      height: 1px;
      background-color: #eaeaf5;
      position: absolute;
      top: 7px;
    }

    &::before {
      left: 0;
    }
    &::after {
      right: 0;
    }
  }
  .form-text {
    font-size: 1.5rem;
    line-height: 1.7142857143em;
    font-weight: 500;
    margin-top: 3rem;
  }
`;

export const form = styled.form`
  margin-top: 7.6rem;
  width: 100%;

  .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
    width: 100%;

    &:not(:first-child) {
      margin-top: 2.8rem;
    }

    &.space-between {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & .form-item {
        width: auto;
        .form-link {
          color: ${({ theme }) => theme.colors.light.graylight};
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 2.2rem;
          transition: color 0.2s;
          &:hover {
            color: ${({ theme }) => theme.colors.light.bluemd};
          }
        }
      }
    }

    .checkbox-wrap {
      position: relative;
      & input {
        display: none;
      }

      & .checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2.2rem;
        height: 2.2rem;
        border: 1px solid ${({ theme }) => theme.colors.light.border};
        border-radius: 0.6rem;
        background-color: ${({ theme }) => theme.colors.light.wh};
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
      }

      & label {
        display: block;
        margin: 0;
        color: ${({ theme }) => theme.colors.light.text};
        padding-left: 3.4rem;
        font-size: 1.4rem;
        font-weight: 700;
        line-height: 2.2rem;
        cursor: pointer;
      }
    }
  }

  .form-item {
    width: 100%;

    .form-input {
      position: relative;

      & label {
        display: block;
        margin: 0;
        line-height: 1em;
        color: ${({ theme }) => theme.colors.light.graylight};
        font-size: 1.6rem;
        font-weight: 600;
        position: absolute;
        top: 2rem;
        left: 2rem;
        transition: all 0.3s ease-in-out;
        pointer-events: none;
      }

      & input[type='text'],
      & input[type='password'] {
        width: 100%;
        border-radius: 1.2rem;
        font-size: 1.6rem;
        font-weight: 700;
        background-color: ${({ theme }) => theme.colors.light.wh};
        border: 1px solid ${({ theme }) => theme.colors.light.border};
        color: ${({ theme }) => theme.colors.light.text};
        height: 5.4rem;
        padding: 0 1.8rem;
        transition: border-color 0.2s ease-in-out;

        &:focus {
          border-color: ${({ theme }) => theme.colors.light.blue};
        }
      }
    }
  }
`;

export const button = styled.button`
  display: inline-block;
  height: 48px;
  border-radius: 10px;
  background-color: #615dfa;
  box-shadow: 4px 7px 12px 0 rgb(97 93 250 / 20%);
  color: #fff;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  height: 54px;
  line-height: 54px;
  width: 100%;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 3px 5px 10px 0 rgb(62 63 94 / 20%);

  &:hover {
    background-color: ${({ theme }) => theme.colors.light.bluedark};
  }
`;

export const box_form_decoration = styled.div`
  position: absolute;
  top: -14px;
  left: -80px;
`;
