import React from 'react';
import TrendingPost from './TrendingPost';
import * as S from '../../../styles/Trending';
import { TrendingUpTwoTone } from '@material-ui/icons';

export default function Trending(): JSX.Element {
  return (
    <S.TrendingWrapper>
      <S.TrendingHeading_Wrapper>
        <S.TrendingLogo>
          <TrendingUpTwoTone />
        </S.TrendingLogo>
        <S.TrendingH2>TRENDING ON BLOG</S.TrendingH2>
      </S.TrendingHeading_Wrapper>
      <S.TrendingMain_Wrapper>
        <TrendingPost Number={'01'} authorImg='/images/author-1.png' />
        <TrendingPost Number={'02'} authorImg='/images/author-2.png' />
        <TrendingPost Number={'03'} authorImg='/images/author-3.png' />
        <TrendingPost Number={'04'} authorImg='/images/author-1.png' />
        <TrendingPost Number={'05'} authorImg='/images/author-2.png' />
        <TrendingPost Number={'06'} authorImg='/images/author-3.png' />
      </S.TrendingMain_Wrapper>
    </S.TrendingWrapper>
  );
}
