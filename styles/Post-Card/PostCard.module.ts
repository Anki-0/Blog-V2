import styled from 'styled-components';

export const PostCard = styled.div`
  position: relative;
  flex: 0 0 calc(30% - 32px);
  display: block;
  border-radius: 5px;
  padding: 1rem;
  margin: 2rem 2.5rem;
  cursor: pointer;
  background: ${({ theme }) => (theme.isDark ? 'rgba(38, 40, 49, 1)' : theme.colors.light.wh)};

  width: calc(30% - 32px);
  height: inherit;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 6px rgb(0 0 0 / 10%);
    transform: scale(1.01);
  }

  @media only screen and (max-width: ${1771 / 16}em) {
    -ms-flex: 0 0 calc(33.33% - 32px);
    flex: 0 0 calc(32% - 32px);
    width: calc(32% - 32px);
    margin: 2rem;
  }
  @media only screen and (max-width: ${1307 / 16}em) {
    /* -ms-flex: 0 0 calc(33.33% - 32px); */
    flex: 0 0 calc(33% - 32px);
    width: calc(33% - 32px);
    margin: 1.6rem;
  }
  @media only screen and (max-width: ${1000 / 16}em) {
    /* -ms-flex: 0 0 calc(33.33% - 32px); */
    flex: 0 0 calc(33.33% - 32px);
    width: calc(33.33% - 32px);
  }
  @media only screen and (max-width: ${829 / 16}em) {
    flex: 0 0 calc(48.33% - 32px);
    width: calc(48.33% - 32px);
  }
  @media only screen and (max-width: ${741 / 16}em) {
    width: 100%;
  }
  @media only screen and (max-width: ${638 / 16}em) {
    display: flex;
    flex: 1 1 auto;
  }
`;
export const Post_preview = styled.a`
  border-radius: 0.5rem;
  /* & > div {
    height: 100% !important;
  } */

  .preview_img {
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: ${638 / 16}em) {
    width: 30%;
  }
  @media only screen and (max-width: ${482 / 16}em) {
    & > div {
      width: 21rem;
      aspect-ratio: auto 200 / 100;
      height: 11rem;
    }
  }
`;

export const body = styled.div`
  margin: 1rem 0;
  @media only screen and (max-width: ${638 / 16}em) {
    width: 61%;
    margin-left: 3rem;
  }
  @media only screen and (max-width: ${551 / 16}em) {
    width: 61%;
    margin-left: 3rem;
  }
  & .tag {
    margin-bottom: 1rem;
    @media only screen and (max-width: ${638 / 16}em) {
      display: none;
    }
  }
`;
export const card_title = styled.div`
  & a {
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.light.text)};
    font-weight: 600;

    @media only screen and (max-width: ${551 / 16}em) {
      font-size: 1.6rem;
      letter-spacing: 0px;
      max-height: 4rem;
      line-height: 2.2rem;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      color: rgb(41 41 41);
      font-family: roboto;
    }
  }
  margin-bottom: 5rem;
`;
export const card_Author = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1.2rem;
  @media only screen and (max-width: ${638 / 16}em) {
    bottom: 2rem;
  }
`;
export const card_ava = styled.div`
  height: 3rem;
  width: 3rem;
`;

export const card_desc = styled.div`
  color: ${({ theme }) => (theme.isDark ? theme.colors.light.wh : theme.colors.light.text)};
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  shape-outside: circle(50%);
  margin-left: 1rem;
  margin-top: 0.5rem;
  font-weight: 600;

  & span {
    font-size: 1rem;
    line-height: 1.3rem;
    font-weight: 500;
    color: ${({ theme }) =>
      theme.isDark ? theme.colors.light.graylight : theme.colors.light.text};
  }
`;
export const Post_Tags = styled.div`
  gap: 1rem;
  display: flex;
`;
export const foot = styled.div``;
export const Post_Date = styled.div``;
export const status = styled.div``;

export const Post_Meta = styled.div``;

export const card_Content = styled.div``;
