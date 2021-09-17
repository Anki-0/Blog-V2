import React from 'react';

import * as S from '@/styles/Tag.style';

type props = {
  tagName: string;
  fontSize: number;
};

export default function Tag({ tagName, fontSize }: props): JSX.Element {
  return (
    <S.Tag fontSize={fontSize}>
      <p>
        <span>{tagName}</span>
      </p>
    </S.Tag>
  );
}
