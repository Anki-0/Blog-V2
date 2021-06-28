import React from 'react';
import TrendingPost from './TrendingPost';
import * as S from '../../styles/Trending';
import { TrendingUpTwoTone } from '@material-ui/icons';

export default function Trending(): JSX.Element {
  return (
    <S.TrendingWrapper>
      <S.TrendingHeading_Wrapper>
        <S.TrendingLogo>
          <TrendingUpTwoTone />
        </S.TrendingLogo>
        <S.TrendingH2>TRENDING ON MEDIUM</S.TrendingH2>
      </S.TrendingHeading_Wrapper>
      <S.TrendingMain_Wrapper>
        <TrendingPost Number={'01'} />
        <TrendingPost Number={'02'} />
        <TrendingPost Number={'03'} />
        <TrendingPost Number={'04'} />
        <TrendingPost Number={'05'} />
        <TrendingPost Number={'06'} />
      </S.TrendingMain_Wrapper>
    </S.TrendingWrapper>
  );
}
