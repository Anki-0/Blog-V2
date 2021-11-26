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
    status === 'success' ? 'rgb(100, 254, 136)' : status === 'fail' ? 'rgb(254, 100, 100)' : ''};
  border: ${({ status }) => (status === 'success' ? '#6bef9d' : status === 'fail' ? '#ff9393' : '')}
    0.1rem solid;
  background-color: ${({ status }) =>
    status === 'success'
      ? 'rgba(100, 254, 136,.1)'
      : status === 'fail'
      ? 'rgb(249, 198, 200);'
      : ''}; ;
`;
