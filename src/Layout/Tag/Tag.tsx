import React from 'react';

import * as S from '@/styles/Tag.style';

type props = {
  tagName: string;
  fontSize: number;
  height: string;
};

export default function Tag({ tagName, fontSize, height }: props): JSX.Element {
  return (
    <S.Tag fontSize={fontSize} height={height} className='tag'>
      <p>
        <span>{tagName}</span>
      </p>
    </S.Tag>
  );
}
