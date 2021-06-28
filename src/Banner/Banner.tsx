import React from 'react';
import Image from 'next/image';

import * as S from '../../styles/Banner.style';

export default function Banner(): JSX.Element {
  return (
    <>
      <S.Banner>
        <S.BannerConetent>
          <h1 className='heading'>Blog</h1>
          <h2 className='subHeading'>Keep up-to-date with Dev Community</h2>
        </S.BannerConetent>
      </S.Banner>
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
    </>
  );
}
