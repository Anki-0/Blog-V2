import React from 'react';

import * as S from '../../../styles/Tag.style';

type props = {
  tagName: string;
};

export default function Tag({ tagName }: props): JSX.Element {
  return (
    <S.Tag>
      <p>
        <span>{tagName}</span>
      </p>
    </S.Tag>
  );
}
