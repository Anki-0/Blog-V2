import axiosInstance from '../../../axiosConfig';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Iauth as response } from '../../../interface/api';
import * as M from '../../../styles/apiRes.style';
import * as S from '../../../styles/Login.Style';
import { useAuthValue } from '../../Context/AuthContext';
import Loader from '../../Loader/Loader';

export default function SignIn(): JSX.Element {
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { authStatus, setAuthStatus } = useAuthValue();

  const router = useRouter();

  const loginHandler = async (event: React.SyntheticEvent<EventTarget>): Promise<void> => {
    event.preventDefault(); // don't redirect the page

    const userData = {
      userEmail: email,
      userPassword: password
    };

    try {
      const res = await axiosInstance.post(`/users/login`, userData);
      const data: response = res.data;
      setIsLoading(true);
      setAuthStatus(data);
      console.log('res : =====> ', data);
      router.push('/') && router.reload();
    } catch (error) {
      setIsLoading(true);
      console.log('ERROR => ', error.response); // this is the main part. Use the response property from the error object

      return error.response;
    }
  };

  console.log(`${email} + ${password} +`);

  return (
    <S.Wrapper>
      {isLoading ? (
        authStatus?.status === 'sucess' ? (
          <M.Message status={authStatus?.status}>{authStatus?.message}</M.Message>
        ) : authStatus?.status === 'fail' ? (
          <M.Message status={authStatus?.status}>{authStatus?.message}</M.Message>
        ) : (
          ''
        )
      ) : (
        <Loader />
      )}
      <S.FormWrapper>
        <h2 className='heading-secondary ma-bt-lg'>Sign in</h2>

        <div className='login__line'>
          <div className='login__text'>New user?</div>
          <a className='login__link' href='#'>
            Create an account
          </a>
        </div>

        <form className='form form--signup' onSubmit={loginHandler}>
          <S.FormGroup>
            <S.FormGroupLable>Email address</S.FormGroupLable>

            <S.FormGroupInput
              className='form__input'
              id='email'
              type='email'
              placeholder='you@example.com'
              required
              onChange={e => setEmail(e.target.value)}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.FormGroupLable>Password</S.FormGroupLable>

            <S.FormGroupInput
              className='form__input'
              id='password'
              type='password'
              placeholder='••••••••'
              required
              onChange={e => setPassword(e.target.value)}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.button color='#6c5dd3' onClick={() => setIsLoading(false)}>
              Continue
            </S.button>
          </S.FormGroup>
        </form>

        <div className='login__or'>Or continue with</div>

        <S.button color='#3F8CFF'>Google</S.button>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
