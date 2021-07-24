import React from 'react';
import dynamic from 'next/dynamic';
const Signup = dynamic(() => import('../Layout/Signup/Signup'));
const Login = dynamic(() => import('../Layout/Login/Login'));
const Backdrop = dynamic(() => import('../Backdrop/Backdrop'));
import { useHeaderMenuToggleValue } from '../Context/HeaderMenuTogglwContext';
import { useAuthModelToggleValue } from '../Context/AuthModelToggleContext';

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
