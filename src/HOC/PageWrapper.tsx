import React from 'react';
import { useHeaderMenuToggleValue } from '../Context/HeaderMenuTogglwContext';
import Overlay from '../Overlay/Overlay';

type props = { children: JSX.Element };

const PageWrapper = ({ children }: props): JSX.Element => {
  const { showMenu } = useHeaderMenuToggleValue();

  return (
    <div className='page__wrapper'>
      {showMenu ? <Overlay /> : null}
      {children}
    </div>
  );
};
export default PageWrapper;
