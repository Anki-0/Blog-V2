import React from 'react';
import Image from 'next/image';
import { useThemeTogglerValue } from '../Context/ThemeTogglerContext';
import * as S from '../../styles/Banner.style';

interface props {
  heading: string;
  subHeading: string;
}

export default function Banner({ heading, subHeading }: props): JSX.Element {
  const { isDark } = useThemeTogglerValue();
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <S.Banner>
        <S.BannerConetent>
          <h1 className='heading'>{heading}</h1>
          <h2 className='subHeading'>{subHeading}</h2>
        </S.BannerConetent>
      </S.Banner>
      {isDark ? (
        <S.BannerImage>
          <Image
            src='/images/banner-pic.webp'
            alt='Banner_Pic'
            width={1086}
            height={1082}
            layout='responsive'
            quality={50}
          />
        </S.BannerImage>
      ) : null}
    </div>
  );
}
