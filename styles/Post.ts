import styled from 'styled-components';

export const Post = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
`;
export const Post_Wrapper = styled.div`
  margin-right: 2rem;
`;
export const Post_Author = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.8rem;
  cursor: pointer;
  .author__img {
    width: 2rem;
  }
  & > p {
    font-size: 1.3rem;
    font-weight: 600;
  }
`;

export const Post_Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Post_Title = styled.div`
  cursor: pointer;

  h2 {
    font-size: 2.2rem;
    line-height: 28px;
    letter-spacing: 0;
    font-weight: 800;
    /* max-height: 56px; */
    width: 96%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media only screen and (max-width: ${1023 / 16}em) {
      font-size: 2rem;
    }
    @media only screen and (max-width: ${766 / 16}em) {
      font-size: 1.6rem;
    }
  }
`;
export const Post_Demo = styled.div`
  width: 96%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  h3 {
    font-weight: 500;
    font-size: 1.6rem;
    margin-top: 0.4rem;
    color: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.light.graymd)};
    @media only screen and (max-width: ${727.98 / 16}em) {
      display: none;
      pointer-events: none;
      cursor: none;
    }
  }
`;
export const Post_Image = styled.a`
  cursor: pointer;
  & > div {
    position: relative;
    width: 200px;
    aspect-ratio: auto 150 / 100;
    height: 134px;
    vertical-align: middle;
    @media only screen and (max-width: ${768 / 16}em) {
      width: 150px;
      aspect-ratio: auto 150 / 100;
      height: 100px;
      vertical-align: middle;
    }
    @media only screen and (max-width: ${548 / 16}em) {
      width: 100px;
      aspect-ratio: auto 100 / 100;
      vertical-align: middle;
      height: 100px;
    }
  }
`;
export const Post_Meta = styled.div`
  margin-top: 0.8rem;
  color: #b2b3bd;
  font-size: 1.3rem;
  font-weight: 300;
`;
export const Post_Date = styled.div`
  color: ${({ theme }) => (theme.isDark ? theme.colors.light.graylight : theme.colors.light.bl)};
`;
