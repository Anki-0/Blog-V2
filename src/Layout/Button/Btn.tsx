import React from 'react';
import styled from 'styled-components';
import { useAuthModelToggleValue } from '@/src/Context';

interface props {
  name: string;
  className: string;
  type: string;
}

const Btn = styled.button`
  padding: 1rem 2rem;
  border: none;
  background: ${({ theme }) => theme.colors.light.blue};
  color: ${({ theme }) => theme.colors.light.wh};

  font-size: 1.4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.1s ease-in-out, background 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.light.wh};
    background: ${({ theme }) => theme.colors.light.bluemd};
  }
`;

export default function Button({ name, className, type }: props): JSX.Element {
  const { showAuthModel, setShowAuthModel } = useAuthModelToggleValue();

  const setter = {
    SignInModel: type === 'loginBtn' ? !showAuthModel.SignInModel : showAuthModel.SignInModel,
    SignUpModel: type === 'signupBtn' ? !showAuthModel.SignUpModel : showAuthModel.SignUpModel
  };

  return (
    <Btn className={className} onClick={() => setShowAuthModel(setter)}>
      {name}
    </Btn>
  );
}
