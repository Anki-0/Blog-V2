import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import * as S from '../../styles/Post';

const Post = (): JSX.Element => {
  return (
    <S.Post>
      <S.Post_Wrapper>
        <S.Post_Author>
          <Link href='/'>
            <a>
              <div className='author__img'>
                <Image
                  src='/images/banner-pic.webp'
                  alt='Banner_Pic'
                  width={20}
                  height={20}
                  layout='responsive'
                  quality={50}
                />
              </div>
            </a>
          </Link>
          <p className='author__name'>Ankit</p>
        </S.Post_Author>

        <S.Post_Content>
          <S.Post_Title>
            <h2 className='post__title'>
              Integrating an Image Upload System into a React app with Node.js, Express.js and
              Multer
            </h2>
          </S.Post_Title>
          <S.Post_Demo>
            <h3 className='demo'>
              In this blog post, I’m going to walkthrough integrating an image upload system into a
              react app. I wanted to make this walkthrough because…`
            </h3>
          </S.Post_Demo>
          <S.Post_Meta>
            <S.Post_Date>24 Oct 2021</S.Post_Date>
          </S.Post_Meta>
        </S.Post_Content>
      </S.Post_Wrapper>
      <S.Post_Image>
        <div>
          <Image
            className='img'
            src='/images/test.png'
            alt='Banner_Pic'
            layout='fill'
            objectFit='fill'
          />
        </div>
      </S.Post_Image>
    </S.Post>
  );
};
export default Post;
