import React from 'react';
import * as S from '../../styles/Overlay,style';
import { useHeaderMenuToggleValue } from '../Context/HeaderMenuTogglwContext';

export default function Overlay(): JSX.Element {
  const { setShowMenu } = useHeaderMenuToggleValue();
  return <S.Overlay onClick={() => setShowMenu(false)} />;
}
