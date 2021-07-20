import React from 'react';
import styled from 'styled-components';
import { useSigninComponentToggleValue } from '../../Context/SigninComponentToggleContext';

interface props {
  text: string;
  className: string;
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

export default function LoginBtn({ text, className }: props): JSX.Element {
  const { showSignin, setShowSignin } = useSigninComponentToggleValue();

  return (
    <Btn className={className} onClick={() => setShowSignin(!showSignin)}>
      {text}
    </Btn>
  );
}
