/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from 'react';
import Link from 'next/link';

import { sidebarItems } from '@/src/utils/sidebarItems';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import { useSideabarToggleValue } from '@/src/Context/SidebarToggleContext';
import * as S from '@/styles/Sidebar.style';

const Sidebar: React.FC = () => {
  const [active, setActive] = useState('Posts');
  const { toggle, setToggle } = useSideabarToggleValue();

  return (
    <S.Sidebar>
      <S.Top>
        <S.Logo aria-label='SideBar Toggle Btn'>
          <h2>BLOG</h2>
          {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            width='28'
            height='40'
            viewBox='0 0 28 40'
            className='logo'
          >
            <path d='M14,38l-2.1,2a3.008,3.008,0,0,1-.975-1.43C1.371,36.539,1.235,27.28,1.235,27.28.264,26.488-.022,25.829,0,25.307A1.89,1.89,0,0,1,.82,24.039a2.19,2.19,0,0,1,.244-.146l.005-.049A16.512,16.512,0,0,1,4.9,22a5.131,5.131,0,0,1-3.5-1.335C1.446,20.612.7,20,.7,20a17.431,17.431,0,0,1,7-14.667A60.778,60.778,0,0,1,11.2,14a47.351,47.351,0,0,0-.7-10.668c.851-.452,1.956-.7,2.3-1.537A7.838,7.838,0,0,1,13.984,0L14,.014,14.015,0A7.838,7.838,0,0,1,15.2,1.8c.34.84,1.446,1.085,2.3,1.537A47.352,47.352,0,0,0,16.8,14a60.9,60.9,0,0,1,3.5-8.668A17.431,17.431,0,0,1,27.3,20s-.749.612-.7.666A5.129,5.129,0,0,1,23.1,22a16.529,16.529,0,0,1,3.829,1.843l0,.049a2.242,2.242,0,0,1,.245.146A1.894,1.894,0,0,1,28,25.307c.023.522-.264,1.182-1.233,1.974,0,0-.136,9.258-9.691,11.289A3.008,3.008,0,0,1,16.1,40Zm2.1-4c6.652,0,7.7-8,7.7-8-2.362.121-3.517,1.472-5.6,4a2.505,2.505,0,0,1-2.06.829Zm-4.2,0-.041-3.171A2.505,2.505,0,0,1,9.8,30c-2.084-2.528-3.238-3.88-5.6-4C4.2,26,5.249,34,11.9,34ZM14,14.506l-2.971,2.828,2.1,2-2.1,2,2.1,2-2.1,2L14,28.162l2.971-2.828-2.1-2,2.1-2-2.1-2,2.1-2ZM14,26h-.7v-1.33h1.4V26Zm0-4.009h-.7v-1.33h1.4v1.33Zm0-4h-.7v-1.33h1.4v1.33ZM17.5,3.334c-.021-.012-.01-.006,0,0l.012.007Zm-7,0c.011-.006.022-.012,0,0l-.013.007Z' />
          </svg> */}
        </S.Logo>
        <S.Burger onClick={() => setToggle(!toggle)} />
      </S.Top>
      <S.Wrapper>
        <S.Inner>
          <S.Group>
            <S.Caption>
              <span>New </span>
              Feeds
            </S.Caption>
            <S.menu>
              {sidebarItems.map(items => (
                <Link href={items.url} key={items.title}>
                  <a
                    className={'items ' + (active === items.title ? 'active' : '')}
                    onClick={() => setActive(items.title)}
                  >
                    <S.SidebarIcon data-title='Members'>
                      <items.icon height='22px' width='22px' />
                    </S.SidebarIcon>
                    <S.SidebarText>{items.title}</S.SidebarText>
                  </a>
                </Link>
              ))}
            </S.menu>
          </S.Group>
        </S.Inner>
      </S.Wrapper>
      <S.Bottom>
        <ThemeSwitcher />
      </S.Bottom>
    </S.Sidebar>
  );
};
export default Sidebar;
