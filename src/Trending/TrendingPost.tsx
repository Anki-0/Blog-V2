import React from 'react';
import * as S from '../../styles/Trending';
import { Post_Author, Post_Meta, Post_Date } from '../../styles/Post';
import Link from 'next/link';
import Image from 'next/image';

type props = { Number: string; authorImg: string };

export default function TrendingPost({ Number, authorImg }: props): JSX.Element {
  return (
    <S.TrendingPost>
      <S.PostNumber>
        <h1>{Number}</h1>
      </S.PostNumber>
      <S.PostContent>
        <Post_Author>
          <Link href='/'>
            <a>
              <div className='author__img'>
                <Image
                  src={authorImg}
                  alt='Banner_Pic'
                  width={1086}
                  height={1082}
                  layout='responsive'
                  quality={45}
                />
              </div>
            </a>
          </Link>
          <p className='author__name'>Ankit</p>
        </Post_Author>
        <S.Posttitle>
          <h2>Why I’m Leaving Mumford & Sons</h2>
        </S.Posttitle>
        <Post_Meta>
          <Post_Date>24 Oct 2021</Post_Date>
        </Post_Meta>
      </S.PostContent>
    </S.TrendingPost>
  );
}
