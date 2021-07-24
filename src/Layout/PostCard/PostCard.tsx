import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { IPost } from '../../../interface/api';

import * as S from '../../../styles/Post';

type props = {
  authorImg: string;
  postImg: string;
  data: IPost;
};

const Post = ({ authorImg, postImg, data }: props): JSX.Element => {
  return (
    <S.Post>
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
            <h2 className='post__title'>{data?.post_title}</h2>
          </S.Post_Title>
          <S.Post_Demo>
            <h3 className='demo'>{data?.post_content}</h3>
          </S.Post_Demo>
          <S.Post_Meta>
            <S.Post_Date>{data?.createdAt}</S.Post_Date>
          </S.Post_Meta>
        </S.Post_Content>
      </S.Post_Wrapper>
      <S.Post_Image>
        <div>
          <Image
            className='img'
            src={postImg}
            alt='Banner_Pic'
            layout='fill'
            objectFit='contain'
            priority={true}
            quality={75}
          />
        </div>
      </S.Post_Image>
    </S.Post>
  );
};
export default Post;
