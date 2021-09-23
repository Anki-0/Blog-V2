import React from 'react';
import styled from 'styled-components';
import { useAuthModelToggleValue } from '@/src/Context';

interface props {
  name: string;
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

export default function Button({ name, className }: props): JSX.Element {
  return <Btn className={className}>{name}</Btn>;
}
