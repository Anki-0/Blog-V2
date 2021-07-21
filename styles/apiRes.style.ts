import styled from 'styled-components';

type props = {
  status: string;
};

export const Message = styled.span<props>`
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 1rem;
  text-align: left;
  color: ${({ status }) =>
    status === 'sucess' ? 'rgb(100, 254, 136)' : status === 'fail' ? 'rgb(254, 100, 100)' : ''};
  border: ${({ status }) => (status === 'sucess' ? '#6bef9d' : status === 'fail' ? '#ff9393' : '')}
    1px solid;
  background-color: ${({ status }) =>
    status === 'sucess'
      ? 'rgba(100, 254, 136,.1)'
      : status === 'fail'
      ? 'rgba(56, 25, 26, .38)'
      : ''}; ;
`;
