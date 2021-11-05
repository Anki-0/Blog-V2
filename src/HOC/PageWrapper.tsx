import React from 'react';
import dynamic from 'next/dynamic';

const Backdrop = dynamic(() => import('@/src/utils/Backdrop/Backdrop'));
import { useHeaderMenuToggleValue } from '@/src/Context';

type props = { children: JSX.Element };

const PageWrapper = ({ children }: props): JSX.Element => {
  const { showMenu } = useHeaderMenuToggleValue();

  // console.log(`Show SignIn => ${showAuthModel.SignInModel}`);

  return (
    <div className='page__wrapper'>
      {showMenu ? <Backdrop /> : null}
      {children}
    </div>
  );
};
export default PageWrapper;
