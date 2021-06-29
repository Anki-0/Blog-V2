import styled from 'styled-components';

export const TrendingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 4rem auto;
  max-width: 147.2rem;
`;
export const TrendingHeading_Wrapper = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  @media only screen and (min-width: ${1600 / 16}em) {
    max-width: 180.5rem;
    margin: 5.6rem auto;
  }
`;
export const TrendingLogo = styled.div`
  content: '';
  position: relative;
  width: 2rem;
  height: 2rem;
  border: 1px solid #fafafa;
  border-radius: 50%;
  margin-right: 1rem;

  & > svg {
    position: absolute;
    top: 11%;
    right: 11%;
  }
`;
export const TrendingH2 = styled.h2`
  font-size: 1.2rem;
`;
export const TrendingMain_Wrapper = styled.div`
  display: grid;
  position: relative;
  margin-top: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(28.6rem, 1fr));
  gap: 5.2rem 3.2rem;

  @media only screen and (max-width: ${691 / 16}em) {
    gap: 4.2rem 3.2rem;
  }
`;
export const TrendingPost = styled.div`
  display: flex;
  position: relative;
`;
export const PostNumber = styled.div`
  margin-right: 2rem;
  position: relative;
  top: -2rem;
  width: 4rem;
  & > h1 {
    font-size: 3rem;
    color: ${({ theme }) => (theme.isDark ? 'rgba(230, 230, 230, 0.63)' : 'rgba(213, 213, 213,1)')};
    font-weight: 800;
  }
`;
export const PostContent = styled.div``;
export const Posttitle = styled.div`
  & > h2 {
    font-size: 1.6rem;
  }
`;
