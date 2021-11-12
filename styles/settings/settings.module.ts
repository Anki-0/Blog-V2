import styled from 'styled-components';

type props = {
  active: boolean;
};

export const Banner = styled.div`
  text-align: center;
  padding: 8rem;
  & h2 {
    font-size: 6.8rem;
    font-weight: 600;
    text-transform: uppercase;
    font-family: roboto;
    line-height: 9rem;
  }

  & p {
    font-size: 1.6rem;
    font-weight: 500;
    font-family: roboto;
    line-height: 2.2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 8rem;
  align-items: start;
  grid-template-areas: 'sidebar content';
  grid-template-columns: 23.9864864865% 74.6621621622%;
  max-width: 1180px;
  margin: 5rem auto 0;
  @media screen and (max-width: 1365px) {
    grid-template-columns: 100%;
    grid-template-areas:
      'content'
      'sidebar';
    padding: 0 5%;
  }
`;
export const Sidebar = styled.div`
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 40px 0 rgb(94 92 154 / 6%);
`;
export const Sidebar_Menu = styled.div`
  & .sidebar-menu-head {
    height: 112px;
    padding: 28px 26px 0 60px;
    background-color: #fff;
    cursor: pointer;
    position: relative;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    & > div {
      display: flex;
      align-items: center;
      .icon {
        position: absolute;
        top: 3.2rem;
        left: 2rem;
        height: 2rem;
        width: 2rem;
      }

      .title {
        font-size: 1.4rem;
        font-weight: 600;
        font-family: roboto;
        line-height: 1.6rem;
        letter-spacing: 0.1rem;
      }
      .control-icon {
        margin-left: auto;
        font-size: 2rem;
        font-weight: 400;
        font-family: roboto;
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        width: 2rem;
      }
    }

    .text {
      margin-top: 4px;
      color: #8f91ac;
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.3333333333em;
    }
  }

  & .sidebar-menu-body {
    overflow: hidden;
    padding: 0 0 0 6rem;
    height: 0px;

    &.active {
      overflow: visible;
      height: max-content;
      padding: 1.2rem 0 1.2rem 6rem;
      border-top: 1px solid #eaeaf5;
      background-color: #fcfcfd;
      transition: all 0.3s ease-in-out 0s;
    }

    .menu-link {
      display: block;
      height: 34px;
      color: #3a3a3a;
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 34px;
      cursor: pointer;
      transition: transform 0.2s ease-in-out, color 0.25s ease-in-out;

      &:hover {
        transform: translate(4px);
        color: #3f8cff;
      }
    }
  }
`;
export const Sidebar_footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  align-items: center;
  margin-top: 4rem;

  & button[type='reset'],
  & button[type='submit'] {
    width: 80%;
    height: 4rem;
    border-radius: 2rem;
    color: #fff;
    background-color: #2e2e47;
    border-color: #2e2e47;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
  }
  & button[type='submit'] {
    &:hover {
      background: #3cf575d1;
    }
  }
  & button[type='reset'] {
    &:hover {
      background: #f76e6e;
    }
  }
`;
export const Content = styled.div``;

export const content_header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2.8rem;

  & .section-pretitle {
    color: #8f91ac;
    font-size: 1.6rem;
    font-weight: 600;
    text-transform: uppercase;
  }
  & .section-title {
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 2.2;
  }
`;

export const MainBox = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1.6rem;
  min-width: 0;
  margin-bottom: 3rem;
`;

export const BasicSettings = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2 rem;
  .upload-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: max-content;
    width: 31.6rem;
    padding: 3.2rem 0;
    border-radius: 1.2rem;
    background-color: #fff;
    box-shadow: 0 0 40px 0 rgb(94 92 154 / 6%);
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.25s ease-in-out;

    & svg {
      fill: #adafca;
      width: 4rem;
      height: 4rem;
      transition: fill 0.25s ease-in-out;
    }

    &__title {
      margin-top: 2rem;
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2.2rem;
    }
    &__text {
      font-size: 1.2rem;
      color: #3e3f5e;
    }
  }
`;

export const Widget_Box = styled.div<props>`
  .widget-box {
    padding: 3.2rem 2.8rem;
    border-radius: 1.2rem;
    background-color: #fff;
    box-shadow: 0 0 40px 0 rgb(94 92 154 / 6%);
    position: relative;

    &__title {
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 2.2rem;
    }
    &__content {
      margin-top: 3.6rem;

      .form {
        width: 100%;

        &-row {
          display: flex;
          flex-wrap: nowrap;
          @media screen and (max-width: 960px) {
            display: block;
          }

          &:not(:first-child) {
            margin-top: 2.8rem;
          }

          .split {
            width: 100%;
            margin-top: 0;
          }
        }
        &-input {
          position: relative;
          #profile-job-1-description {
            height: 12.6rem;
          }
        }

        &-input:focus-within {
          label {
            color: #fff;
            font-size: 1.2rem;
            top: -6px;
            left: 12px;
            transform: unset;
            background-color: #2e2e47;
            border-radius: 30rem;
            padding: 0rem 0.8rem;
            text-align: center;
          }
        }
        &-item {
          width: 100%;
          margin-right: 1.6rem;
          @media screen and (max-width: 960px) {
            margin-bottom: 28px;
          }

          .form-select {
            position: relative;
          }

          & label {
            background-color: ${({ active }) => (active ? '#fff' : '#fff')};
            color: ${({ active }) => (active ? '#2e2e47' : '#adafca')};
            border-radius: ${({ active }) => (active ? '30rem' : 0)};
            font-size: ${({ active }) => (active ? '1.2rem' : '1.4rem')};
            font-weight: 600;
            position: absolute;
            top: ${({ active }) => (active ? '-.6rem' : '50%')};
            left: ${({ active }) => (active ? '1.2rem' : '2rem')};
            transform: ${({ active }) => (active ? 'unset' : 'translateY(-50%)')};
            pointer-events: none;
            padding: 0rem 0.8rem;
            text-align: center;

            transition: all 0.3s ease-in-out;
          }
          input[type='password'],
          input[type='text'],
          input[type='date'],
          select,
          textarea {
            background-color: #fff;
            border: 1px solid #dedeea;
            color: #3e3f5e;
            height: 48px;
            width: 100%;
            border-radius: 1.2rem;
            font-size: 1.4rem;
            padding: 0 1.8rem;
            font-weight: 700;
            transition: border-color 0.2s ease-in-out;
          }

          input:focus,
          textarea:focus,
          select:focus {
            border-color: #615dfa;
          }

          textarea {
            height: 100%;
            padding: 14px 18px;
            resize: none;
          }
        }

        &-row:nth-child(2) {
          .form-item:first-child {
            .form-input {
              height: 100%;
            }
          }

          .form-item:nth-child(2) {
            .form-input:first-child {
              margin-bottom: 1.6rem;
            }
          }
        }
      }
    }
  }
`;
