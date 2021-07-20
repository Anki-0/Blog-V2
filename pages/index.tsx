import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { GetServerSideProps } from 'next';

import { PageCenter } from '../styles/PageCenter.style';

const Banner = dynamic(() => import('../src/Layout/Banner/Banner'));
const Tag = dynamic(() => import('../src/Layout/Tag/Tag'));
import Post from '../src/Layout/Post/Post';
import Trending from '../src/Layout/Trending/Trending';
import MemberCard from '../src/Layout/Member/MemberCard';
import { footerItems } from '../src/utils/footerItems';

import * as S from '../styles/blog.module';
import { ApiPosts } from '../interface/api';
import axiosInstance from '../axiosConfig';

type props = {
  data: ApiPosts;
};

let page: number;

const Index = ({ data }: props): JSX.Element => {
  console.log(data);
  const [posts, setPosts] = useState(data.posts);
  const [loading, setloading] = useState(false);
  const [postEnd, setPostEnd] = useState(false);

  useEffect(() => {
    //re-initializing page to 2 when page re-render
    page = 2;
  }, []);

  const getMorePost: () => Promise<void> = async () => {
    const LIMIT = 4;
    setloading(true);
    const res = await axiosInstance.get(`/posts?page=${page}&limit=${LIMIT}`);
    page += 1;
    const newData: ApiPosts = res.data;

    if (newData.posts.length !== 0) setPosts(posts.concat(newData.posts));
    setloading(false);

    if (newData.posts.length < 1) {
      setPostEnd(true);
    }
  };

  console.log(page);

  return (
    <>
      <Banner heading={'Blog'} subHeading={'Keep up-to-date with Dev Community'} />

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
            {data.posts &&
              posts.map(post => {
                return (
                  <Post
                    key={post._id}
                    data={post}
                    authorImg='/images/author-1.png'
                    postImg='/images/asset-1.png'
                  />
                );
              })}

            {!loading && !postEnd && <button onClick={getMorePost}>LOAD more</button>}
            {postEnd && <p>END RACHED</p>}
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
              <MemberCard
                img={'/images/2.png'}
                name={'LIONDEX'}
                about={'Decentralized Finance at its best'}
              />
              <MemberCard
                img={'/images/1.png'}
                name={'disBalancer'}
                about={
                  'disBalancer — is a decentralized network that provides DDoS Resistance service and decentralized load balancer for infrastructure.'
                }
              />
              <MemberCard
                img={'/images/3.png'}
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
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axiosInstance.get('/posts?limit=4');
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
        destination: '/login',
        statusCode: 307
      }
    };
  }
};
export default Index;
