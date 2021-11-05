import React from 'react';
import { useHeaderMenuToggleValue } from '../../Context/HeaderMenuTogglwContext';
import * as S from '../../../styles/Overlay,style';

export default function Backdrop(): JSX.Element {
  const { setShowMenu } = useHeaderMenuToggleValue();
  const Handler = (): void => {
    setShowMenu(false);
  };
  return <S.Backdrop onClick={() => Handler()} />;
}
