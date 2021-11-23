import React from 'react';

import * as S from '@/styles/Tag.style';

type props = {
  tagName: string;
  fontSize: number;
  height: string;
  backgroundColor?: string;
  borderRadius?: string;
  color?: string;
};

export default function Tag({
  tagName,
  fontSize,
  height,
  backgroundColor,
  borderRadius,
  color
}: props): JSX.Element {
  return (
    <S.Tag
      fontSize={fontSize}
      height={height}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      color={color}
      className='tag'
    >
      <p>
        <span>{tagName}</span>
      </p>
    </S.Tag>
  );
}
