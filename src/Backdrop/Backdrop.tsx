import React from 'react';
import * as S from '../../styles/Overlay,style';
import { useHeaderMenuToggleValue } from '../Context/HeaderMenuTogglwContext';
import { useAuthModelToggleValue } from '../Context/AuthModelToggleContext';

export default function Backdrop(): JSX.Element {
  const { setShowMenu } = useHeaderMenuToggleValue();
  const { setShowAuthModel } = useAuthModelToggleValue();
  const Handler = (): void => {
    setShowMenu(false);
    setShowAuthModel({
      SignInModel: false,
      SignUpModel: false
    });
  };
  return <S.Backdrop onClick={() => Handler()} />;
}
