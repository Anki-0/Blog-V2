import React from 'react';
import { useHeaderMenuToggleValue } from '../Context/HeaderMenuTogglwContext';
import { useAuthModelToggleValue } from '../Context/AuthModelToggleContext';
import * as S from '../../styles/Overlay,style';

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
