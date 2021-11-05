import React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

import { AxiosError } from 'axios';
import axiosInstance from '@/axiosConfig';

import { useAuthValue } from '@/src/Context';
import { Loader } from '@/src/Layout';
import useCheckAuth from '@/src/_services/useCheckAuth';

import { Iauth as response } from '@/interface/api';

import * as M from '@/styles/apiRes.style';
import * as S from '@/styles/login/login.module';

export default function Login2(): JSX.Element {
  const [{ loginButtonActive, RegistratonButtonActive }, setActive] = useState({
    loginButtonActive: true,
    RegistratonButtonActive: false
  });
  const [password, setPassword] = useState('TEXT');
  const [repeatPassword, setRepeatPassword] = useState('TEXT');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { authStatus, setAuthStatus } = useAuthValue();
  const { isAuthenticated } = useCheckAuth();
  console.log(password, username);

  const RedirectToHome = (): void => {
    window.location.href = '/';
  };

  useEffect(() => {
    console.log(isAuthenticated);

    // if isAuthentiacted is true redirect to home
    if (isAuthenticated) {
      RedirectToHome();
    }
  }, [isAuthenticated]);

  //HANDLE LOGIN
  const LoginHandler = async (event: React.SyntheticEvent<EventTarget>): Promise<void> => {
    event.preventDefault(); // don't redirect the page
    console.log('loginhandler');

    //PayLood for the body
    const userData = {
      user_email: email,
      user_pass: password
    };

    try {
      const res = await axiosInstance.post(`/users/login`, userData);
      const data: response = res.data;
      setIsLoading(false);
      setAuthStatus(data);
      RedirectToHome();
    } catch (error) {
      const { response } = (await error) as AxiosError;
      setIsLoading(true);
      setAuthStatus(response?.data);
    }
  };

  const signUpHandler = async (event: React.SyntheticEvent<EventTarget>): Promise<void> => {
    event.preventDefault(); // don't redirect the page

    const payload = {
      user_email: email,
      user_pass: password,
      user_name: username
    };

    try {
      const res = await axiosInstance.post('/users/signup', payload);
      const data: response = res.data;
      setAuthStatus(data);
      console.log(data);
      setIsLoading(true);
      RedirectToHome();
      // console.log('res : =====> ', data);
    } catch (error) {
      const { response } = (await error) as AxiosError;
      setIsLoading(true);
      setAuthStatus(response?.data);
      console.log('LOGIN ERROR => ', response); // this is the main part. Use the response property from the error object
    }
  };

  return (
    <S.landing>
      <S.landing_decoration></S.landing_decoration>

      <S.landing_info>
        <S.logo>
          <svg className='icon-logo-vikinger'>
            <use xlinkHref='#svg-logo-vikinger'></use>
          </svg>
        </S.logo>

        <h2 className='landing-info-pretitle'>Welcome to</h2>

        <h1 className='landing-info-title'>
          Dev
          <span role='img' aria-label='laptop'>
            (💻)
          </span>
          - Blog
        </h1>

        <p className='landing-info-text'>
          The next generation social network &amp; community! Connect with your friends and play
          with our quests and badges gamification system!
        </p>

        <S.tab_switch>
          <button
            className={`tab-switch-button login-register-form-trigger ${
              loginButtonActive ? 'active' : ''
            }`}
            onClick={() =>
              setActive(prev => {
                return { ...prev, loginButtonActive: true, RegistratonButtonActive: false };
              })
            }
          >
            Login
          </button>

          <button
            className={`tab-switch-button login-register-form-trigger ${
              RegistratonButtonActive ? 'active' : ''
            }`}
            onClick={() =>
              setActive(prev => {
                return { ...prev, RegistratonButtonActive: true, loginButtonActive: false };
              })
            }
          >
            Register
          </button>
        </S.tab_switch>
      </S.landing_info>

      <S.landing_form>
        <S.form_box className={`form-box ${loginButtonActive ? 'active' : ''}`}>
          <button className='cross-icon' onClick={() => RedirectToHome()} />

          <div className='form-box-decoration'>
            <Image src='/landing/rocket.png' alt='rocket' width={160} height={156} quality={60} />
          </div>

          <h2 className='form-box-title'>Account Login</h2>

          <S.form onSubmit={LoginHandler}>
            {!isLoading ? (
              authStatus?.status === 'success' ? (
                <M.Message status={authStatus?.status}>{authStatus?.message}</M.Message>
              ) : authStatus?.status === 'fail' ? (
                <M.Message status={authStatus?.status}>{authStatus?.message}</M.Message>
              ) : (
                ''
              )
            ) : (
              <Loader />
            )}

            <div className='form-row'>
              <div className='form-item'>
                <div className='form-input'>
                  <label htmlFor='login' className='label'>
                    Username or Email
                  </label>
                  <input
                    type='text'
                    id='loginEmail'
                    name='login_username'
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='form-row'>
              <div className='form-item'>
                <div className='form-input'>
                  <label htmlFor='login-password'>Password</label>
                  <input
                    type='password'
                    id='login-password'
                    name='login_password'
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='form-row space-between'>
              <div className='form-item'>
                <div className='checkbox-wrap'>
                  <input type='checkbox' id='login-remember' name='login_remember' />
                  <div className='checkbox-box'>
                    {/* <svg className='icon-cross'>
                        <use xlinkHref='#svg-cross'></use>
                      </svg> */}
                  </div>
                  <label htmlFor='login-remember'>Remember Me</label>
                </div>
              </div>

              <div className='form-item'>
                <a className='form-link' href='#'>
                  Forgot Password?
                </a>
              </div>
            </div>

            <div className='form-row'>
              <div className='form-item'>
                <S.button onClick={() => setIsLoading(true)}>Login to your Account!</S.button>
              </div>
            </div>
          </S.form>

          <p className='lined-text'>Login with your Social Account</p>

          {/* <div className='social-links'>
              <a className='social-link facebook' href='#'>
                <svg className='icon-facebook'>
                  <use xlinkHref='#svg-facebook'></use>
                </svg>
              </a>

              <a className='social-link twitter' href='#'>
                <svg className='icon-twitter'>
                  <use xlinkHref='#svg-twitter'></use>
                </svg>
              </a>

              <a className='social-link twitch' href='#'>
                <svg className='icon-twitch'>
                  <use xlinkHref='#svg-twitch'></use>
                </svg>
              </a>

              <a className='social-link youtube' href='#'>
                <svg className='icon-youtube'>
                  <use xlinkHref='#svg-youtube'></use>
                </svg>
              </a>
            </div>
          */}
        </S.form_box>

        <S.form_box className={`form-box ${RegistratonButtonActive ? 'active' : ''}`}>
          <button className='cross-icon' onClick={() => RedirectToHome()} />

          <div className='form-box-decoration'>
            <Image src='/landing/rocket.png' alt='rocket' width={160} height={156} quality={60} />
          </div>

          <h2 className='form-box-title'>Create your Account!</h2>

          <S.form onSubmit={signUpHandler}>
            <div className='form-row'>
              <div className='form-item'>
                <div className='form-input'>
                  <label htmlFor='register-email'>Your Email</label>
                  <input
                    type='text'
                    id='register-email'
                    name='register_email'
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='form-row'>
              <div className='form-item'>
                <div className='form-input'>
                  <label htmlFor='register-username'>Username</label>
                  <input
                    type='text'
                    id='register-username'
                    name='register_username'
                    required
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='form-row'>
              <div className='form-item'>
                <div className='form-input'>
                  <label htmlFor='register-password'>Password</label>
                  <input
                    type='password'
                    id='register-password'
                    name='register_password'
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='form-row'>
              <div className='form-item'>
                <div className='form-input'>
                  <label htmlFor='register-password-repeat'>Repeat Password</label>
                  <input
                    type='password'
                    id='register-password-repeat'
                    name='register_password_repeat'
                    required
                    onChange={e => setRepeatPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className='form-row'>
              <div className='form-item'>
                <div className='checkbox-wrap'>
                  <input type='checkbox' id='register-newsletter' name='register_newsletter' />
                  <div className='checkbox-box'>
                    {/* <svg className='icon-cross'>
                        <use xlinkHref='#svg-cross'></use>
                      </svg> */}
                  </div>
                  <label htmlFor='register-newsletter'>Send me news and updates via email</label>
                </div>
              </div>
            </div>

            <div className='form-row'>
              <div className='form-item'>
                <S.button disabled={password !== repeatPassword}>
                  {password === repeatPassword ? 'Register Now!' : '🙄Password Not Matched!!'}
                </S.button>
              </div>
            </div>
          </S.form>

          <p className='form-text'>
            You&apos;ll receive a confirmation email in your inbox with a link to activate your
            account. If you have any problems, <a href='#'>contact us</a>!
          </p>
        </S.form_box>
      </S.landing_form>
    </S.landing>
  );
}
