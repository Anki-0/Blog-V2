import React from 'react';
import Link from 'next/link';

import { useSideabarToggleValue } from '../../Context/SidebarToggleContext';
import { useHeaderMenuToggleValue } from '../../Context/HeaderMenuTogglwContext';
import { useAuthModelToggleValue } from '../../Context/AuthModelToggleContext';

import { browseItems } from '../../utils/browseItems';
import { Search } from '../Search/Search';
import Button from '../Button/Btn';
import LogoutBtn from '../Button/LogoutBtn';
import useCheckAuth from '../../_services/useCheckAuth';

import * as S from '../../../styles/Header.style';

export default function Header(): JSX.Element {
  const { toggle, setToggle } = useSideabarToggleValue();
  const { showMenu, setShowMenu } = useHeaderMenuToggleValue();
  const { showAuthModel, setShowAuthModel } = useAuthModelToggleValue();
  const { isAuthenticated } = useCheckAuth();

  return (
    <S.Header>
      <S.HeaderBurger onClick={() => setToggle(!toggle)} />
      <S.HeaderBrowse>
        <S.HeaderHead onClick={() => setShowMenu(!showMenu)} show={showMenu}>
          <svg id='icon_location' viewBox='0 0 21 21'>
            <path d='M10.61.25c5.722 0 10.36 4.64 10.36 10.36s-4.64 10.36-10.36 10.36S.25 16.333.25 10.61 4.89.25 10.61.25zm0 1.5a8.86 8.86 0 1 0 0 17.72 8.86 8.86 0 0 0 0-17.72zm3.117 4.804a.75.75 0 0 1 .94.94l-1.593 5.09a.75.75 0 0 1-.492.492l-5.09 1.593a.75.75 0 0 1-.94-.94l1.593-5.09a.75.75 0 0 1 .492-.492zm-.92 1.86L9.46 9.46l-1.048 3.347 3.347-1.048 1.048-3.347z'></path>
          </svg>
          {'Browse'}
          <svg id='icon_arrow-down' viewBox='0 0 10 6'>
            <path d='M9.707.293a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4A1 1 0 0 1 1.613.21l.094.083L5 3.584 8.293.293A1 1 0 0 1 9.613.21l.094.083z'></path>
          </svg>
        </S.HeaderHead>

        <S.HeaderBody show={showMenu}>
          {browseItems.map(items => (
            <Link href={items.url} key={items.title} passHref>
              <div className='links'>
                {items.icon ? (
                  <S.StarIcon>
                    <items.icon />
                  </S.StarIcon>
                ) : null}
                {items.title === 'Sign In' ? (
                  <S.BrowseText
                    onClick={() =>
                      setShowAuthModel({
                        SignInModel: !showAuthModel.SignInModel,
                        SignUpModel: showAuthModel.SignUpModel
                      })
                    }
                  >
                    {items.title}
                  </S.BrowseText>
                ) : items.title === 'Sign Up' ? (
                  <S.BrowseText>{items.title}</S.BrowseText>
                ) : (
                  <S.BrowseText>{items.title}</S.BrowseText>
                )}
              </div>
            </Link>
          ))}
        </S.HeaderBody>
      </S.HeaderBrowse>
      <Search />
      {!isAuthenticated ? (
        <S.AuthControls>
          <Button type='loginBtn' name='Sign in' className='SignIn__btn' />
          <Button type='signupBtn' name='Create Account' className='SignUp__btn' />
        </S.AuthControls>
      ) : (
        <S.AuthControls>
          <LogoutBtn text='Logout' className='Logout__btn' />
        </S.AuthControls>
      )}
    </S.Header>
  );
}
