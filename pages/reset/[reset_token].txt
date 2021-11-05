import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const Loader = dynamic(() => import('../../src/utils/Loader/Loader'));

import * as M from '../../styles/apiRes.style';
import * as S from '../../styles/Login.Style';
import styled from 'styled-components';
import axiosInstance from '../../axiosConfig';
import { useAuthValue } from '../../src/Context/AuthContext';
import { Iauth as response } from '../../interface/api';

export default function ResetLink(): JSX.Element {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { authStatus, setAuthStatus } = useAuthValue();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  console.log(router.query);
  const resetToken = router.query.reset_token;

  const resetUserPasswordHandler = async (
    event: React.SyntheticEvent<EventTarget>
  ): Promise<void> => {
    event.preventDefault(); // don't redirect the page\

    const reqPayload = {
      userPassword: password
    };

    try {
      const res = await axiosInstance.patch(`/users/reset/${resetToken}`, reqPayload);
      const data: response = res.data;
      setAuthStatus(data);
      setIsLoading(false);
      console.log('RES => ', res);
    } catch (error) {
      const err = await error.response.data;
      setAuthStatus(err);
      setIsLoading(false);

      console.log('ERROR => ', err); // this is the main part. Use the response property from the error object
      return error.response;
    }
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader />
      ) : authStatus?.status === 'sucess' ? (
        <M.Message status={authStatus?.status}>{authStatus?.message}</M.Message>
      ) : authStatus?.status === 'fail' ? (
        <M.Message status={authStatus?.status}>{authStatus?.message}</M.Message>
      ) : (
        ''
      )}

      <S.FormWrapper>
        <h2 className='heading-secondary ma-bt-lg'>Change your password</h2>

        <form className='form form--signup' onSubmit={resetUserPasswordHandler}>
          <S.FormGroup>
            <S.FormGroupLable>New Password</S.FormGroupLable>
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

          <div className='form__group'>
            <S.button color='#6c5dd3' onClick={() => setIsLoading(true)}>
              {`Change Password ${password === confirmPassword ? '👍' : '😫'}`}
            </S.button>
          </div>
        </form>
      </S.FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  margin: auto;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75rem;
  /* z-index: 800; */
  visibility: visible;
  opacity: 1;
  box-shadow: rgb(0 0 0 / 15%) 0px 2px 10px;
  flex-shrink: 0;
  padding: 48px 48px 64px;
  border-radius: 40px;
  background: #242731;
`;
