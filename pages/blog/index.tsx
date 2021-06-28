import React from 'react';

import * as S from '../../styles/blog.module';

import { PageCenter } from '../../styles/PageCenter.style';
import Post from '../../src/Post/Post';
import Trending from '../../src/Trending/Trending';
import Banner from '../../src/Banner/Banner';
import Tag from '../../src/Tag/Tag';
import MemberCard from '../../src/Member/MemberCard';
import { footerItems } from '../../src/utils/footerItems';

export default function index(): JSX.Element {
  return (
    <>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Banner />
      </div>
      <PageCenter>
        <Trending />
        <hr />
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
        <S.Container>
          <S.Posts>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </S.Posts>
          <S.Sidebar>
            <S.Recommended>
              <p>Recommended topics</p>
              <S.Tags>
                <Tag tagName={'Product Management'} />
                <Tag tagName={'Accessibility'} />
                <Tag tagName={'Programming'} />
                <Tag tagName={'Education'} />
                <Tag tagName={'Music'} />
                <Tag tagName={'Media'} />
                <Tag tagName={'Next.js'} />
              </S.Tags>
            </S.Recommended>
            <S.WhoToFollow>
              <p>Who to follow</p>
              <MemberCard name={'LIONDEX'} about={'Decentralized Finance at its best'} />
              <MemberCard
                name={'disBalancer'}
                about={
                  'disBalancer — is a decentralized network that provides DDoS Resistance service and decentralized load balancer for infrastructure.'
                }
              />
              <MemberCard
                name={'PancakeSwap'}
                about={
                  'The #1 AMM and yield farm on Binance Smart Chain. https://pancakeswap.finance/'
                }
              />
            </S.WhoToFollow>
            <S.SidebarFooter>
              {footerItems &&
                footerItems.map((item, index) => (
                  <div className='footerItems' key={index}>
                    {item.itemName}
                  </div>
                ))}
            </S.SidebarFooter>
          </S.Sidebar>
        </S.Container>
      </PageCenter>
    </>
  );
}
