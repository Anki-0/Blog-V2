import styled from 'styled-components';

export const Login = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 3rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  background: linear-gradient(
    301.63deg,
    rgba(58, 62, 69, 0.0001) 29.5%,
    rgba(27, 29, 33, 0.707195) 74.66%
  );
  @media only screen and (max-width: 767px) {
    min-height: auto;
    padding: 0;
    background: none !important;
  }
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 96rem;
`;
export const LoginWrap = styled.div`
  flex-shrink: 0;
  width: 2.4rem;
  margin-right: auto;

  @media only screen and (max-width: 767px) {
    display: none;
  }

  .logo {
    color: #ffffff;
    font-size: 4rem;
    font-weight: 600;
    text-shadow: 3px 4px #4a7ed1;
  }
  .info {
    margin-bottom: 3.2rem;
    margin-right: -2rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: #ffffff;
  }
`;
export const LoginForm = styled.div`
  background: #242731;
  position: relative;

  flex-shrink: 0;
  width: 46.4rem;
  padding: 4.8rem 4.8rem 6.4rem;
  border-radius: 4rem;
  @media only screen and (max-width: 1023px) {
    width: 40rem;
    padding: 3.2rem;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 4rem 3.2rem;
    border-radius: 0;
    background: none;
    background: #1f2128;
  }

  &::before {
    content: '';
    position: absolute;
    top: 3rem;
    left: 1.4rem;
    right: 1.4rem;
    bottom: -3rem;
    z-index: -1;
    background: #1b1d21;
    opacity: 0.8;
    -webkit-filter: blur(32.6194px);
    filter: blur(32.6194px);
    border-radius: 4rem;
  }

  .login {
    &__title {
      font-size: 4rem;
      font-weight: 600;
    }
  }
`;

export const IconClose = styled.a`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  display: flex;
  background: #1f2128;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  box-shadow: 0 2px 7px rgb(0 0 0 / 10%);
  font-size: 0;
  transition: all 0.25s;
  cursor: pointer;

  #icon-remove {
    width: 1em;
    height: 1em;
    fill: #fff;
    font-size: 1.2rem;

    transition: fill 0.25s;
  }
`;

export const PopularPost = styled.div`
  margin-bottom: 2.2rem;

  .post {
    width: 35rem;
    display: flex;
    align-items: center;
    border-radius: 1.6rem;
    background: rgba(27, 29, 33, 0.5);
    font-weight: 500;
    color: #1b1d21;
    transition: all 0.25s;

    &:not(:last-child) {
      margin-bottom: 1.6rem;
    }

    &__preview {
      flex-shrink: 0;
      /* width: 72px; */
      font-size: 0;
      .post__pic {
        border-radius: 1.2rem;
      }
    }
    &__details {
      padding: 1rem 1.2rem 1rem 2.4rem;
      @media only screen and (max-width: 1259px) {
        padding-left: 1.6rem;
      }
    }
    &__title {
      margin-bottom: 2rem;
      font-size: 1.3rem;
      color: #fff;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &__category {
      margin-bottom: 0.4rem;
      font-size: 1.2rem;
      color: #808191;
      display: flex;
      gap: 0.7rem;
    }
    .status {
      position: relative;
      padding-left: 1.6rem;
      font-size: 1.2rem;
      font-weight: 500;
      color: #808191;
      &::before {
        content: '';
        position: absolute;
        top: 53%;
        left: 0;
        background: #ff754c;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
      }
    }
  }
`;
