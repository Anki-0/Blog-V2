import axiosInstance from '@/axiosConfig';
import { ApiPosts, SpecificPost } from '@/interface/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useState } from 'react';

import * as S from '@/styles/post.module';
import Author from '@/src/Layout/Author/Author';

import { serialize } from 'next-mdx-remote/serialize';
// import remarkGemoji from 'remark-gemoji';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type props = {
  data: SpecificPost;
  mdxSource: MDXRemoteSerializeResult;
};

export default function Index({ data, mdxSource }: props): JSX.Element {
  const [post] = useState(data.post);
  // console.log('MDX SOURCE =>>', mdxSource.compiledSource);

  return (
    <S.ArticalWrapper>
      <Head>
        <title>{post?.post_title}</title>
      </Head>

      <S.Artical>
        <S.PostArticleHeader>
          <S.PostArticleCover>
            <Image
              src='/images/main-banner.jpg'
              alt='Post'
              width={800}
              height={338}
              layout='responsive'
              quality={40}
            />
          </S.PostArticleCover>
          <S.PostArticleMeta>
            <h1 className='title'>{post?.post_title}</h1>
            <div className='tags'>
              {data.post && post?.post_tags.map((tag, index) => <span key={index}>{tag}</span>)}
            </div>

            <Author
              username={post?.post_author?.user_nickname}
              postdate={post?.updatedAt}
              postpage={true}
            />
          </S.PostArticleMeta>
        </S.PostArticleHeader>

        <S.PostArticleBody>
          <MDXRemote {...mdxSource} />
          {/* {data.post.post_content} */}
        </S.PostArticleBody>

        <S.PostComments>Comment</S.PostComments>
      </S.Artical>
      <S.NextRead># Hello, *world*! NEXT READ</S.NextRead>
    </S.ArticalWrapper>
  );
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
  // Call an external API endpoint to get posts
  const res = await axiosInstance.get('/posts');
  const { data }: { data: ApiPosts } = await res;

  // Get the paths we want to pre-render based on posts
  const paths = data.posts.map(post => ({
    params: { id: post.post_title }
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // console.log(params?.id);
  const id: string = params?.id as string;

  const res = await axiosInstance.get(`/posts/${encodeURI(id)}`);
  const { data }: { data: SpecificPost } = res;
  const mdxSource = await serialize(data.post.post_content, {
    mdxOptions: {
      // rehypePlugins: [rehypeAccessibleEmojis]
      // remarkPlugins: [remarkGemoji]
    }
  });

  // will be passed to the page component as props
  return { props: { data, mdxSource }, revalidate: 60 };
};
