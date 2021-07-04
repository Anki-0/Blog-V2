import styled from 'styled-components';

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  margin-top: 5.6rem;

  .head {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: ${767 / 16}em) {
    display: block;
    margin-bottom: 24px;
  }
  @media only screen and (min-width: ${1440 / 16}em) {
    max-width: 180.5rem;
    margin: 5.6rem auto;
  }
`;

export const Sorting = styled.div`
  min-width: 235px;
  margin-left: 30px;
  margin: auto 0;
  @media only screen and (max-width: ${767 / 16}em) {
    margin: 2rem 0 0 0;
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
  transition: color 0.25s;
  cursor: pointer;
`;
export const SelectOptions = styled.option``;
export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.8rem;
`;
export const Sidebar = styled.div`
  max-width: 36.6rem;
  min-width: 24.1rem;

  /* padding: 0 5.6rem; */

  margin-left: 5.6rem;
  background-color: rgb(226 226 226 / 0%);
  @media only screen and (max-width: ${1173 / 16}em) {
    width: 33rem;
    /* padding: 0 4rem; */
    margin-left: 4rem;
  }
  @media only screen and (max-width: ${1023 / 16}em) {
    /* padding: 0 3rem; */
    margin-left: 3rem;
  }
  @media only screen and (max-width: ${1000 / 16}em) {
    display: none;
    cursor: none;
    pointer-events: none;
  }
`;

export const Recommended = styled.div`
  padding-bottom: 4rem;
  border-bottom: 1px solid
    ${({ theme }) => (theme.isDark ? 'rgb(60, 63, 70)' : 'rgb(60,63,70,.15)')};

  & > p {
    line-height: 18px;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin-bottom: 3rem;
    color: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.dark.dark1)};
  }
`;
export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
`;
export const WhoToFollow = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid
    ${({ theme }) => (theme.isDark ? 'rgb(60, 63, 70)' : 'rgba(60,63,70,.15)')};
  & > p {
    font-size: 1.3rem;
    text-transform: uppercase;
    color: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.dark.dark1)};
  }
`;
export const SidebarFooter = styled.div`
  padding: 2.4rem 0;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;

  .footerItems {
    margin-right: 2.6rem;
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
  }
`;
