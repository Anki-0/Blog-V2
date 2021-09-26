import Image from 'next/image';
import Link from 'next/link';
import * as S from './Author.module';

import moment from 'moment';

type props = {
  username: string;
  postdate: string;
  postpage: boolean;
};

const Author: React.FC<props> = ({ username, postdate, postpage }) => {
  return (
    <>
      <S.CardAuthor post={postpage}>
        <S.CardAvatar>
          <Image
            src='/images/1.png'
            alt='avatar'
            className='ava_pic'
            width={16}
            height={16}
            layout='responsive'
            quality={20}
          />
        </S.CardAvatar>
        <S.CardDescription>
          <Link href={`/${username}`}>
            <S.AuthorName>{`@ ${username}`}</S.AuthorName>
          </Link>
          <S.PostDate>{moment(postdate).startOf('hour').fromNow()}</S.PostDate>
        </S.CardDescription>
      </S.CardAuthor>
    </>
  );
};

export default Author;
