import React from 'react';
// import { useThemeTogglerValue } from '../../Context/ThemeTogglerContext';
import * as S from '@/styles/Banner.style';

interface props {
  heading: string;
  subHeading: string;
}

export default function Banner({ heading, subHeading }: props): JSX.Element {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <S.Banner>
        <S.BannerConetent>
          <h1 className='heading' dangerouslySetInnerHTML={{ __html: heading }} />
          <h2 className='subHeading' dangerouslySetInnerHTML={{ __html: subHeading }} />
        </S.BannerConetent>
      </S.Banner>
      {/* {isDark ? (
        <S.BannerImage>
          <Image
            src='/images/banner-pic.png'
            alt='Banner_Pic'
            width={644}
            height={644}
            layout='responsive'
            quality={50}
          />
        </S.BannerImage>
      ) : null} */}
    </div>
  );
}
