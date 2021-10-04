import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import moment from 'moment';

import { IPost } from '@/interface/api';

import * as S from '@/styles/Posts.module';
import Tag from '../Tag/Tag';

type props = {
  authorImg: string;
  postImg: string;
  data: IPost;
};

const Post = ({ authorImg, postImg, data }: props): JSX.Element => {
  return (
    <S.Posts>
      <S.Post_Wrapper>
        <S.Post_Author>
          <Link href='/'>
            <a>
              <div className='author__img'>
                <Image
                  src={authorImg}
                  alt='Author Image'
                  layout='fill'
                  objectFit='contain'
                  className={'image'}
                  priority={true}
                  quality={20}
                />
              </div>
            </a>
          </Link>
          <p className='author__name'>{data?.post_author?.user_nickname}</p>
        </S.Post_Author>

        <S.Post_Content>
          <S.Post_Title>
            <Link href={`${data.post_title}`} passHref>
              <h2 className='post__title'>{data?.post_title}</h2>
            </Link>
          </S.Post_Title>
          <S.Post_Tags>
            {data.post_tags.map(tagname => (
              <Tag tagName={tagname} fontSize={1.2} key={tagname} />
            ))}
          </S.Post_Tags>
          <S.Post_Meta>
            <S.Post_Date>{`${moment(data?.createdAt).format('MMM Do YY')}`}</S.Post_Date>
          </S.Post_Meta>
        </S.Post_Content>
      </S.Post_Wrapper>
      <S.Post_Image>
        <div>
          <Image
            className='Post__Img'
            src={postImg}
            alt='Banner_Pic'
            layout='fill'
            objectFit='contain'
            priority={true}
            quality={75}
          />
        </div>
      </S.Post_Image>
    </S.Posts>
  );
};
export default Post;
