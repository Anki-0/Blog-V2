import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import axiosInstance from '@/axiosConfig';
import { useAuthValue } from '@/src/Context/AuthContext';
import { Iauth as response } from '@/interface/api';

const Loader = dynamic(() => import('../../utils/Loader/Loader'));

import * as M from '@/styles/apiRes.style';
import * as S from '@/styles/Login.Style';

export default function Signup_model(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { authStatus, setAuthStatus } = useAuthValue();

  const registerUser = async (event: React.SyntheticEvent<EventTarget>): Promise<void> => {
    console.log('REGISTERED USER');

    event.preventDefault(); // don't redirect the page

    const user = {
      userEmail: email,
      userPassword: password,
      userNickname: username
    };
    try {
      const res = await axiosInstance.post('/users/signup', user);
      const data: response = res.data;
      setAuthStatus(data);
      setIsLoading(false);
      console.log(data);
      window.location.reload();
    } catch (error) {
      const err = await error.response.data;
      setAuthStatus(err);
      setIsLoading(false);

      console.log('ERROR => ', err); // this is the main part. Use the response property from the error object
      return error.response;
    }
  };

  console.log(`${username} + ${email} + ${password} ${process.env.API}`);

  // const message = authStatus?.message?.replace(/\{|\}/gi, '');
  console.log('is Loading => ', isLoading);

  return (
    <S.Wrapper>
      {isLoading ? (
        <Loader />
      ) : authStatus?.status === 'success' ? (
        <M.Message status={authStatus?.status}>{authStatus?.message}</M.Message>
      ) : authStatus?.status === 'fail' ? (
        <M.Message status={authStatus?.status}>{authStatus?.message}</M.Message>
      ) : (
        ''
      )}

      <S.FormWrapper>
        <h2 className='heading-secondary ma-bt-lg'>Create your account!</h2>
        <div className='login__line'>
          <div className='login__text'>Already a user?</div>
          <a className='login__link' href='#'>
            Login now
          </a>
        </div>
        <form id='sign_up__form' className='form form--signup' onSubmit={registerUser}>
          <S.FormGroup>
            <S.FormGroupLable>Your name</S.FormGroupLable>
            <S.FormGroupInput
              className='form__input'
              id='name'
              type='text'
              placeholder=''
              required
              onChange={e => setUsername(e.target.value)}
            />
          </S.FormGroup>
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
            <S.Warning color={password !== confirmPassword ? '#e24646' : '#6ed76e'}>
              {password !== confirmPassword && 'Password mismatch'}
            </S.Warning>
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
            <S.FormGroupLable>Confirm password</S.FormGroupLable>
            <S.Warning color={password !== confirmPassword ? '#d14646' : '#6ed76e'}>
              {password !== confirmPassword && 'Password mismatch'}
            </S.Warning>
            <S.FormGroupInput
              className='form__input'
              id='passwordConfirm'
              type='password'
              placeholder='••••••••'
              required
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </S.FormGroup>

          <S.FormGroup>
            {/* <input type='submit' value='TEST' /> */}
            <input id='sign_up' type='submit' value='Sign Up' onClick={() => setIsLoading(true)} />
          </S.FormGroup>
        </form>
      </S.FormWrapper>
    </S.Wrapper>
  );
}
