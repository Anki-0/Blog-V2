import React from 'react';
import * as S from '../../styles/Overlay,style';
import { useHeaderMenuToggleValue } from '../Context/HeaderMenuTogglwContext';
import { useSigninComponentToggleValue } from '../Context/SigninComponentToggleContext';

export default function Backdrop(): JSX.Element {
  const { setShowMenu } = useHeaderMenuToggleValue();
  const { setShowSignin } = useSigninComponentToggleValue();
  const Handler = (): void => {
    setShowMenu(false);
    setShowSignin(false);
  };
  return <S.Backdrop onClick={() => Handler()} />;
}
