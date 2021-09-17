import React from 'react';
import dynamic from 'next/dynamic';
const Signup = dynamic(() => import('@/src/Layout/Signup/Signup'));
const Login = dynamic(() => import('@/src/Layout/Login/Login'));
const Backdrop = dynamic(() => import('@/src/utils/Backdrop/Backdrop'));
import { useHeaderMenuToggleValue } from '@/src/Context';
import { useAuthModelToggleValue } from '@/src/Context';

type props = { children: JSX.Element };

const PageWrapper = ({ children }: props): JSX.Element => {
  const { showMenu } = useHeaderMenuToggleValue();
  const { showAuthModel } = useAuthModelToggleValue();

  // console.log(`Show SignIn => ${showAuthModel.SignInModel}`);

  return (
    <div className='page__wrapper'>
      {showMenu || showAuthModel.SignInModel || showAuthModel.SignUpModel ? <Backdrop /> : null}
      {showAuthModel.SignInModel ? <Login /> : null}
      {showAuthModel.SignUpModel ? <Signup /> : null}
      {children}
    </div>
  );
};
export default PageWrapper;
