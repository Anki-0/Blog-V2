import React from 'react';
import styled from 'styled-components';
import axiosInstance from '../../../axiosConfig';

interface props {
  text: string;
  className: string;
}
interface response {
  status: string;
  message: string;
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

export default function LooutBtn({ text, className }: props): JSX.Element {
  const logoutHandler = async () => {
    try {
      const res = await axiosInstance.get(`/users/logout`);
      const data: response = res.data;
      if (data.status === 'success') window.location.href = '/';
    } catch (error) {
      console.log('ERROR => ', error.response); // this is the main part. Use the response property from the error object
      alert('☠ Error Logging out try again!!');
      return error.response;
    }
  };

  return (
    <Btn className={className} onClick={() => logoutHandler()}>
      {text}
    </Btn>
  );
}
