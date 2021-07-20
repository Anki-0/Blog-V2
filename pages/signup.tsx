import axios from 'axios';
import React, { useState } from 'react';
import * as S from '../styles/apiRes.style';

interface response {
  status: string | boolean;
  token: string | boolean;
  message: string;
}

export default function SignUp(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [resStatus, setResStatus] = useState<response>();

  const registerUser = async (event: React.SyntheticEvent<EventTarget>): Promise<void> => {
    event.preventDefault(); // don't redirect the page

    const user = {
      userEmail: email,
      userPassword: password,
      userNickname: username
    };
    try {
      const res = await axios.post('http://localhost:3001/api/v1/users/signup', user);
      const data: response = res.data;
      setResStatus(data);
      console.log(data);
    } catch (error) {
      const { data } = error.response;
      await setResStatus(data);

      console.log('err : =====> ', data);
    }
  };

  console.log(`${username} + ${email} + ${password} ${process.env.API}`);

  const message = resStatus?.message.replace(/\{|\}/gi, '');
  console.log(message);

  return (
    <div>
      {resStatus?.status === 'sucess' ? (
        <S.Message status={resStatus?.status}>{resStatus?.message}</S.Message>
      ) : resStatus?.status === 'fail' ? (
        <S.Message status={resStatus?.status}>{resStatus?.message}</S.Message>
      ) : (
        ''
      )}

      <div className='login-form'>
        <h2 className='heading-secondary ma-bt-lg'>Create your account!</h2>
        <form className='form form--signup' onSubmit={registerUser}>
          <div className='form__group'>
            <label className='form__label' htmlFor='name'>
              Your name
            </label>
            <input
              className='form__input'
              id='name'
              type='text'
              placeholder=''
              required
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className='form__group'>
            <label className='form__label' htmlFor='email'>
              Email address
            </label>
            <input
              className='form__input'
              id='email'
              type='email'
              placeholder='you@example.com'
              required
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className='form__group ma-bt-md'>
            <label className='form__label' htmlFor='password'>
              Password
            </label>
            <input
              className='form__input'
              id='password'
              type='password'
              placeholder='••••••••'
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div className='form__group ma-bt-md'>
            <label className='form__label' htmlFor='passwordConfirm'>
              Confirm password
            </label>
            <input
              className='form__input'
              id='passwordConfirm'
              type='password'
              placeholder='••••••••'
              required
              onChange={e => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className='form__group'>
            <button className='btn btn--green' disabled={!(password === confirmPassword)}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
