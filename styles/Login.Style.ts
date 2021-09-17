import styled from 'styled-components';

interface props {
  color: string;
}

export const Wrapper = styled.div`
  /* position: fixed;
  top: calc(50% + 5rem);
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 8000;
  visibility: visible;
  opacity: 1;
  box-shadow: rgb(0, 0, 0, 0.15) 0px 2px 10px;
  flex-shrink: 0;
  width: 80rem;
  height: 66rem;
  padding: 48px 48px 64px;
  border-radius: 40px;
  background: #242731; */
`;
export const FormWrapper = styled.div`
  margin-top: 2rem;
  & > .login__or {
    padding: 24px 0;
    font-size: 12px;
    font-weight: 500;
    color: #808191;
  }
  & > h2 {
    font-weight: 700;
    letter-spacing: -1px;
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  & > .login__line {
    display: flex;
    align-items: center;
    margin-bottom: 42px;
    font-size: 12px;
    font-weight: 500;

    .login__text {
      color: #808191;
    }
    .login__link {
      margin-left: 16px;
      transition: color 0.25s;
    }
  }

  & > .form--signin {
    span {
      font-size: 1.2rem;
      color: #d44949;
      font-weight: 600;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: #f51010;
      }
    }
  }
`;
export const FormGroup = styled.div`
  margin-bottom: 2.4rem;

  & > #sign_up {
    background: #5a49ce;
    color: #ffffff;
    min-width: 100%;
    height: 56px;
    padding: 0 20px;
    border-radius: 16px/16px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.42857;
    font-weight: 700;
    cursor: pointer;

    transition: all 0.25s;

    &:hover {
      background: #5a49ce;
    }
  }
`;
export const Warning = styled.span`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 800;
  color: ${({ color }) => color};
`;

export const FormGroupLable = styled.div`
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 1.33333;
  font-weight: 500;
  color: #808191;
`;
export const FormGroupInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 2px solid transparent;
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  background: rgba(228, 228, 228, 0.05);
  height: 56px;
  padding: 0 22px;
  transition: all 0.25s;

  &:focus {
    border-color: #6c5dd3;
    color: #ffffff;
    background: rgba(228, 228, 228, 0.05);
  }
`;

export const SignupBtn = styled.input<props>`
  background: ${({ color }) => color};
  color: #ffffff;
  min-width: 100%;
  height: 56px;
  padding: 0 20px;
  border-radius: 16px/16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.42857;
  font-weight: 700;
  cursor: pointer;

  transition: all 0.25s;

  &:hover {
    background: #5a49ce;
  }
`;

export const button = styled.button<props>`
  background: ${({ color }) => color};
  color: #ffffff;
  min-width: 100%;
  height: 56px;
  padding: 0 20px;
  border-radius: 16px/16px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.42857;
  font-weight: 700;
  cursor: pointer;

  transition: all 0.25s;

  &:hover {
    background: #5a49ce;
  }
`;
