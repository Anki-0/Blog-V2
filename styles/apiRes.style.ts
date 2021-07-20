import styled from 'styled-components';

type props = {
  status: string;
};

export const Message = styled.span<props>`
  color: ${({ status }) =>
    status === 'sucess' ? 'rgb(100, 254, 136)' : status === 'fail' ? 'rgb(254, 100, 100)' : ''};
  font-size: 1rem;
  font-weight: bolder;
  /* background-color: ${({ status }) =>
    status === 'sucess' ? '#253829' : status === 'fail' ? '#412929' : ''};*/
  border: ${({ status }) => (status === 'sucess' ? '#6bef9d' : status === 'fail' ? '#ff9393' : '')}
    1px solid;
  font-size: 1.2rem;
  border: 1px solid;
  padding: 0.5rem 3rem 0.5rem 1rem;
  text-align: left;
  /* margin: 2rem 0;
  padding: 1rem;
  width: 100vw;
  height: 6rem;
  text-align: left;
  line-height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center; */
`;
