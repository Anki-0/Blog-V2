import styled from 'styled-components';

export const ArticalWrapper = styled.div`
  max-width: 134.4rem;
  /* margin: 0 auto; */
  padding: 6.4rem;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
export const Artical = styled.div`
  /* max-width: 806px; */
`;
export const PostArticleHeader = styled.div`
  /* max-width: 806px; */
  /* max-height: 580px; */
`;
export const PostArticleCover = styled.div`
  font-size: 0;
  padding: 0 1rem;
  background: ${({ theme }) => (theme.isDark ? '#d3d3d314' : '#d3d3d3')};
  border-radius: 1rem 1rem 0 0;

  img {
    width: 100%;
    min-height: 100%;
    border-radius: 1rem 1rem 0 0;
  }
`;
export const PostArticleMeta = styled.div`
  padding: 4rem;
  @media only screen and (max-width: 767px) {
    padding: 3rem;
  }

  .title {
    font-size: 4rem;
    font-weight: 900;
    line-height: 5rem;

    @media only screen and (max-width: 640px) {
      font-size: 3.5rem;
      font-weight: 700;
    }
    @media only screen and (max-width: 506px) {
      font-size: 3rem;
      font-weight: 600;
      line-height: 4rem;
      margin-bottom: 2rem;
    }
  }

  .tags {
    margin-top: 1rem;
    & > span {
      background-color: #fff;
      color: #000;
      border-radius: 0.5rem;
      padding: 0.4rem 0.9rem;
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
  }
`;
export const PostArticleBody = styled.article`
  font-size: 1.6rem;
  padding: 2rem 3.2rem;
  line-height: 1.5;
  margin-top: 4rem;
`;
export const PostComments = styled.section``;
export const NextRead = styled.section``;
