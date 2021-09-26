import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { GetServerSideProps } from 'next';

import { useAuthValue } from '@/src/Context';
import { Loader, Tag } from '@/src/Layout';
import { Iauth as response } from '@/interface/api';
import { ApiPosts } from '@/interface/api';

import axiosInstance from '@/axiosConfig';
import * as S from '@/styles/Login.module';
import * as L from '@/styles/Login.Style';
import * as M from '@/styles/apiRes.style';
import useCheckAuth from '@/src/_services/useCheckAuth';
import { useEffect } from 'react';

type props = {
  data: ApiPosts;
};
// type err = { status: string; message: string };

export default function Signup({ data }: props): JSX.Element {
  console.log(data.posts);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { authStatus, setAuthStatus } = useAuthValue();
  const { isAuthenticated } = useCheckAuth();
  console.log(isAuthenticated);

  useEffect(() => {
    console.log('useeffect', isAuthenticated);

    if (isAuthenticated) {
      RedirectToHome();
    }
  }, [isAuthenticated]);

  const RedirectToHome = (): void => {
    window.location.href = '/';
  };

  const signUpHandler = async (event: React.SyntheticEvent<EventTarget>): Promise<void> => {
    event.preventDefault(); // don't redirect the page

    const userData = {
      userEmail: email,
      userPassword: password,
      userUsername: username
    };

    try {
      const res = await axiosInstance.post('/users/signup', userData);
      const data: response = res.data;
      setAuthStatus(data);
      console.log(data);
      setIsLoading(true);
      RedirectToHome();
      // console.log('res : =====> ', data);
    } catch (error) {
      const err = await error.response.data;
      setIsLoading(true);
      setAuthStatus(err);
      console.log('LOGIN ERROR => ', error.response); // this is the main part. Use the response property from the error object
    }
  };

  return (
    <S.Login>
      <S.Container>
        <S.LoginWrap>
          <Link href='/'>
            <a className='logo'>DEV BLOG</a>
          </Link>
          <div className='info'>Keep up-to-date with Dev Community</div>
          <S.PopularPost>
            {data &&
              data.posts.map(post => {
                return (
                  <a className='post' href='#' key={post._id}>
                    <div className='post__preview'>
                      <Image
                        className='post__pic'
                        alt='post_img'
                        src='/images/bg-sign-in.png'
                        width={120}
                        height={96}
                      />
                    </div>
                    <div className='post__details'>
                      <div className='post__title'>{post.post_title}</div>
                      <div className='post__category'>
                        {post.post_tags &&
                          post.post_tags.map(tag => <Tag tagName={tag} key={tag} fontSize={1} />)}
                      </div>
                      <div className='status orange'>{post.likecount}K viewers</div>
                    </div>
                  </a>
                );
              })}
          </S.PopularPost>
        </S.LoginWrap>
        <S.LoginForm>
          <S.IconClose onClick={RedirectToHome}>
            <svg id='icon-remove' viewBox='0 0 10 10'>
              <path d='M1.613.21l.094.083L5 3.585 8.293.293a1 1 0 0 1 1.497 1.32l-.083.094L6.415 5l3.292 3.293a1 1 0 0 1-1.32 1.497l-.094-.083L5 6.415 1.707 9.707A1 1 0 0 1 .21 8.387l.083-.094L3.585 5 .293 1.707A1 1 0 0 1 1.613.21z'></path>
            </svg>
          </S.IconClose>
          <L.Wrapper>
            {isLoading ? (
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
            <L.FormWrapper>
              <h2 className='heading-secondary ma-bt-lg'>Sign Up</h2>

              <div className='login__line'>
                <div className='login__text'>Already a user</div>
                <Link href='/login'>
                  <a className='login__link'>Login now</a>
                </Link>
              </div>

              <form className='form form--signin' onSubmit={signUpHandler}>
                <L.FormGroup>
                  <L.FormGroupLable>UserName</L.FormGroupLable>
                  <div className='field__wrap'>
                    <L.FormGroupInput
                      className='field__input'
                      type='text'
                      placeholder='Unique Username'
                      required
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>
                </L.FormGroup>
                <L.FormGroup>
                  <L.FormGroupLable>Email address</L.FormGroupLable>

                  <L.FormGroupInput
                    className='form__input'
                    id='email'
                    type='email'
                    placeholder='you@example.com'
                    required
                    onChange={e => setEmail(e.target.value)}
                  />
                </L.FormGroup>

                <L.FormGroup>
                  <L.FormGroupLable>Password</L.FormGroupLable>

                  <L.FormGroupInput
                    className='form__input'
                    id='password'
                    type='password'
                    placeholder='••••••••'
                    required
                    onChange={e => setPassword(e.target.value)}
                  />
                </L.FormGroup>
                <L.FormGroup>
                  <L.button color='#6c5dd3' onClick={() => setIsLoading(false)}>
                    Continue
                  </L.button>
                </L.FormGroup>
              </form>

              <div className='login__or'>Or continue with</div>

              <L.button color='#3F8CFF'>Google</L.button>
            </L.FormWrapper>
          </L.Wrapper>
        </S.LoginForm>
      </S.Container>
    </S.Login>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axiosInstance.get('/posts?limit=3');
    const data: ApiPosts = res.data;
    console.log('res : =====> ', data);

    // will be passed to the page component as props
    return { props: { data } };
  } catch (error) {
    /**
     * ! const data: response = error.response;
     */
    console.log('err : =====> ', error.response);
    return {
      redirect: {
        destination: '/404',
        statusCode: 307
      }
    };
  }
};
