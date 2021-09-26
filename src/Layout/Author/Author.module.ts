import styled from 'styled-components';

type props = {
  post: boolean;
};
export const CardAuthor = styled.div<props>`
  display: flex;
  justify-content: ${({ post }) => (post === true ? 'flex-start' : 'center')};
  align-items: center;
  padding: 1.5rem;
  background: linear-gradient(45deg, rgb(175 175 175 / 10%), transparent);

  margin-top: ${({ post }) => (post ? '2rem' : '')};
`;

export const CardAvatar = styled.div`
  flex-shrink: 0;
  width: 3.2rem;
  height: 3.2rem;
  margin-right: 0.8rem;
  font-size: 0;
  cursor: pointer;
  .ava__pic {
    width: 100%;
    min-height: 100%;
  }
`;
export const CardDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`;
export const AuthorName = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  cursor: pointer;
`;
export const PostDate = styled.div`
  font-size: 1.1rem;
  letter-spacing: 1px;
  line-height: 2rem;
  font-weight: ${({ theme }) => (theme.isDark ? '100' : '')};
  color: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.dark.dark1)};
`;
