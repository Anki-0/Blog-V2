import React from 'react';
import Link from 'next/link';

import { useSideabarToggleValue } from '../Context/SidebarToggleContext';
import { browseItems } from '../utils/browseItems';
import { Search } from '../Search/Search';

import * as S from '../../styles/Header';

export default function Header(): JSX.Element {
  const { toggle, setToggle } = useSideabarToggleValue();

  return (
    <S.Header>
      <S.HeaderBurger onClick={() => setToggle(!toggle)} />
      <S.HeaderBrowse>
        <S.HeaderHead>
          <svg id='icon_location' viewBox='0 0 21 21'>
            <path d='M10.61.25c5.722 0 10.36 4.64 10.36 10.36s-4.64 10.36-10.36 10.36S.25 16.333.25 10.61 4.89.25 10.61.25zm0 1.5a8.86 8.86 0 1 0 0 17.72 8.86 8.86 0 0 0 0-17.72zm3.117 4.804a.75.75 0 0 1 .94.94l-1.593 5.09a.75.75 0 0 1-.492.492l-5.09 1.593a.75.75 0 0 1-.94-.94l1.593-5.09a.75.75 0 0 1 .492-.492zm-.92 1.86L9.46 9.46l-1.048 3.347 3.347-1.048 1.048-3.347z'></path>
          </svg>
          {'Browse'}
          <svg id='icon_arrow-down' viewBox='0 0 10 6'>
            <path d='M9.707.293a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4A1 1 0 0 1 1.613.21l.094.083L5 3.584 8.293.293A1 1 0 0 1 9.613.21l.094.083z'></path>
          </svg>
        </S.HeaderHead>
        <S.HeaderBody>
          {browseItems.map(items => (
            <Link href={items.url} key={items.title}>
              <>
                <S.StarIcon>
                  <items.icon />
                </S.StarIcon>
                <S.BrowseText>{items.title}</S.BrowseText>
              </>
            </Link>
          ))}
        </S.HeaderBody>
      </S.HeaderBrowse>
      <Search />
    </S.Header>
  );
}
