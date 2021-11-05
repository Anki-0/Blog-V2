import React from 'react';
import styled from 'styled-components';

interface props {
  buttonText: string;
  className: string;
  onClick?: () => void;
}

const BUTTON = styled.button`
  color: ${({ theme }) => theme.colors.light.wh};
  background: ${({ theme }) => theme.colors.light.blue};
  border: none;
  border-radius: 0.2rem;
  outline: none;
  font-size: 1.4rem;
  line-height: 1.9rem;
  letter-spacing: 0.2rem;
  height: 4rem;
  width: ${'max-content'};
  padding: 0 2rem;
  cursor: pointer;

  transition: color 0.1s ease-in-out, background 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.light.wh};
    background: ${({ theme }) => theme.colors.light.bluemd};
  }
`;

export default function Button({ buttonText, className, onClick }: props): JSX.Element {
  return (
    <BUTTON className={className} onClick={onClick}>
      {buttonText}
    </BUTTON>
  );
}
