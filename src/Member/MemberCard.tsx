import React from 'react';
import Image from 'next/image';
import * as S from '../../styles/MembersCard.style';

type props = { img: string; name: string; about: string };

export default function MemberCard({ img, name, about }: props): JSX.Element {
  return (
    <S.Wrapper>
      <S.MemeberWrapper>
        <S.MemeberAvatar>
          <Image src={img} alt='Banner_Pic' width={60} height={60} quality={45} />
        </S.MemeberAvatar>
        <S.MemeberMain>
          <h2>{name}</h2>
          <p>{about}</p>
        </S.MemeberMain>
      </S.MemeberWrapper>
      <S.FollowButton>Follow</S.FollowButton>
    </S.Wrapper>
  );
}
