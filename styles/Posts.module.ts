import styled from 'styled-components';

export const Posts = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  align-items: center;

  background-color: hsla(0, 100%, 100%, 0.03);
  box-shadow: /* offset-x | offset-y | blur-radius | spread-radius | color */ 0px 1px 1px 0px
      hsla(0, 0%, 0%, 0.14),
    0px 2px 1px -1px hsla(0, 0%, 0%, 0.12), 0px 1px 3px 0px hsla(0, 0%, 0%, 0.2);
  padding: 2rem;
  border-radius: 1rem;
`;
export const Post_Wrapper = styled.div`
  margin-right: 2rem;
  width: 100%;
  display: block;
`;
export const Post_Author = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  width: 100%;

  .author__img {
    position: relative;
    width: 3.2rem;
    height: 3.2rem;
  }
  & > p {
    font-size: 1.3rem;
    line-height: 2.2rem;
    font-weight: 600;
  }
`;

export const Post_Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Post_Title = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;

  h2 {
    font-size: 2.2rem;
    letter-spacing: 0;
    font-weight: 800;
    line-height: 2.7rem;
    /* max-height: 56px; */
    /* width: 96%; */
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
    @media only screen and (max-width: ${727.98 / 16}em) {
      font-weight: 700;
    }
  }
`;
export const Post_Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 1rem;
`;
export const Post_Image = styled.a`
  cursor: pointer;
  border-radius: 1rem;
  & > div {
    position: relative;
    width: 20rem;
    aspect-ratio: auto 150 / 100;
    height: 13.4rem;
    vertical-align: middle;
    @media only screen and (max-width: ${768 / 16}em) {
      width: 15rem;
      aspect-ratio: auto 150 / 100;
      height: 10rem;
      vertical-align: middle;
    }
    @media only screen and (max-width: ${548 / 16}em) {
      width: 10rem;
      aspect-ratio: auto 100 / 100;
      vertical-align: middle;
      height: 10rem;
    }
  }
  & .Post__Img {
    border-radius: 1rem;
  }
`;
export const Post_Meta = styled.div`
  margin-top: 1rem;
  color: #b2b3bd;
  font-size: 1.3rem;
  font-weight: 300;
`;
export const Post_Date = styled.div`
  color: ${({ theme }) => (theme.isDark ? theme.colors.light.graylight : theme.colors.light.bl)};
`;
