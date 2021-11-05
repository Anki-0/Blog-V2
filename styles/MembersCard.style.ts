import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-top: 1.6rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const MemeberWrapper = styled.div`
  display: flex;
  margin-right: 0.8rem;
`;
export const MemeberAvatar = styled.div`
  border-radius: 50%;
  width: 4.8rem;
`;
export const MemeberMain = styled.a`
  /* min-width: 13.5rem; */
  max-width: 75%;
  margin-left: 1.6rem;
  margin-right: 0.8rem;
  & > p,
  h2 {
    color: ${({ theme }) => (theme.isDark ? '#fafafa' : theme.colors.dark.dark1)};
  }
  @media only screen and (max-width: ${1154 / 16}em) {
    width: 9.5rem;
  }

  & > h2 {
    font-size: 1.6rem;
  }
  & > p {
    font-size: 1.3rem;
    margin-top: 0.4rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const FollowButton = styled.button`
  padding: 0.8rem 1.8rem;
  border-radius: 2rem;
  background: rgba(0, 0, 0, 0);
  border: 1px solid #b5b5b5;
  color: ${({ theme }) => (theme.isDark ? '#fafafa' : theme.colors.dark.dark1)};

  cursor: pointer;
  transition: color 0.5s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => (theme.isDark ? '#fafafa' : theme.colors.dark.dark1)};
  }
`;
