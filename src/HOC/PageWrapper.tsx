import React from 'react';
import { useHeaderMenuToggleValue } from '../Context/HeaderMenuTogglwContext';
import Backdrop from '../Backdrop/Backdrop';
import { useSigninComponentToggleValue } from '../Context/SigninComponentToggleContext';
import dynamic from 'next/dynamic';
const Login = dynamic(() => import('../Layout/Login/Login'));

type props = { children: JSX.Element };

const PageWrapper = ({ children }: props): JSX.Element => {
  const { showMenu } = useHeaderMenuToggleValue();
  const { showSignin } = useSigninComponentToggleValue();

  console.log(`Show SignIn => ${showSignin}`);

  return (
    <div className='page__wrapper'>
      {showMenu || showSignin ? <Backdrop /> : null}
      {showSignin ? <Login /> : null}
      {children}
    </div>
  );
};
export default PageWrapper;
