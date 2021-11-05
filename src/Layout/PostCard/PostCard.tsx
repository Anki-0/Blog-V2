import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import moment from 'moment';

import { IPost } from '@/interface/api';

import * as S from '@/styles/Post-Card/PostCard.module';
import Tag from '../Tag/Tag';

type props = {
  authorImg: string;
  postImg: string;
  data: IPost;
};

const Post = ({ authorImg, postImg, data }: props): JSX.Element => {
  return (
    <S.PostCard>
      <S.Post_preview>
        <Image
          className='preview_img'
          src={postImg}
          alt='Banner_Pic'
          priority={true}
          width={500}
          height={400}
          quality={75}
        />
      </S.Post_preview>
      <S.body>
        <Tag tagName='Component' fontSize={1.2} height={'2rem'} />
        <S.card_Content>
          <S.card_title>
            <Link href={`${data.post_title}`} passHref>
              {data?.post_title}
            </Link>
          </S.card_title>
          <S.card_Author>
            <S.card_ava>
              <Link href='/'>
                <a>
                  <div className='author__img'>
                    <Image
                      src={authorImg}
                      alt='Author Image'
                      layout='fixed'
                      className={'image'}
                      height={32}
                      width={32}
                      priority={true}
                      quality={20}
                    />
                  </div>
                </a>
              </Link>
            </S.card_ava>
            <S.card_desc>
              {data?.post_author?.user_nickname}
              <span>{moment(data?.createdAt).format('MMMM DD, YYYY')}</span>
            </S.card_desc>
          </S.card_Author>
        </S.card_Content>
      </S.body>
    </S.PostCard>
  );
};
export default Post;
