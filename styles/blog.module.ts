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
    margin-bottom: 2.4rem;
  }
  @media only screen and (min-width: ${1440 / 16}em) {
    max-width: 180.5rem;
    margin: 5.6rem auto;
  }
`;
export const center = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (min-width: ${1440 / 16}em) {
    max-width: 195rem;
    margin: 0 auto;
  }
`;

export const Sorting = styled.div`
  min-width: 23.5rem;
  margin-left: 3rem;
  margin: auto 0;
  @media only screen and (max-width: ${767 / 16}em) {
    margin: 2rem 0 0 0;
  }
`;
export const FieldWrap = styled.div``;
export const FieldSelect = styled.select`
  min-width: 100%;
  height: 5.6rem;
  padding: 0 4.5rem 0 2.4rem;
  appearance: none;
  border: none;
  border-radius: 1.6rem;
  background: ${({ theme }) =>
    theme.isDark ? 'rgba(240,243,246,0.1)' : ' rgba(228, 228, 228, 0.5)'};
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.isDark ? theme.colors.light.graylight : theme.colors.light.graydark};
  transition: color 0.25s;
  cursor: pointer;
`;
export const SelectOptions = styled.option``;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Posts = styled.div`
  display: flex;
  margin: 0 -1.6rem;
  flex-wrap: wrap;
  height: fit-content;
  justify-content: center;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;
export const Sidebar = styled.div`
  max-width: 36.6rem;
  min-width: 20%;

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
  border-bottom: 1rem solid
    ${({ theme }) => (theme.isDark ? 'rgb(60, 63, 70)' : 'rgb(60,63,70,.15)')};

  & > p {
    line-height: 18rem;
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
  border-bottom: 1rem solid
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
    cursor: pointer;
  }
`;

export const loadMorePost = styled.button`
  padding: 2rem 5rem;
  background: #216bf3;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 1.5rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  align-self: center;
  box-shadow: 0rem 4rem 9rem #216bf39c;

  &:hover {
    transform: scale(1.04);
  }
`;
