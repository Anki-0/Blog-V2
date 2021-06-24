import React from 'react';
import Banner from '../../src/Banner/Banner';

import * as S from '../../styles/blog.module';
import Post from '../../src/Post/Post';
import { PageCenter } from '../../styles/PageCenter.style';

export default function index(): JSX.Element {
  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Banner />
      </div>
      <PageCenter>
        <S.Head>
          <h2 className='head'>Posts</h2>
          <S.Sorting arial-label='view post by'>
            <S.FieldWrap>
              <S.FieldSelect>
                <S.SelectOptions>Popular</S.SelectOptions>
                <S.SelectOptions>New</S.SelectOptions>
                <S.SelectOptions>Week</S.SelectOptions>
                <S.SelectOptions>Month</S.SelectOptions>
                <S.SelectOptions>Year</S.SelectOptions>
              </S.FieldSelect>
            </S.FieldWrap>
          </S.Sorting>
        </S.Head>
        <div className='test'>
          <div className='posts'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div className='side'>side</div>
        </div>
      </PageCenter>
    </>
  );
}
