import styled from 'styled-components';

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;

  .head {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: ${767 / 16}em) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Sorting = styled.div`
  min-width: 235px;
  margin-left: 30px;
  @media only screen and (max-width: ${767 / 16}em) {
    margin: 2rem 0 0 0;
    color: red;
  }
`;
export const FieldWrap = styled.div``;
export const FieldSelect = styled.select`
  min-width: 100%;
  height: 56px;
  padding: 0 45px 0 24px;
  appearance: none;
  border: none;
  border-radius: 16px;
  background: ${({ theme }) =>
    theme.isDark ? 'rgba(240,243,246,0.1)' : ' rgba(228, 228, 228, 0.5)'};
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.isDark ? theme.colors.light.graylight : theme.colors.light.graydark};
  transition: all 0.25s;
  cursor: pointer;
`;
export const SelectOptions = styled.option``;
