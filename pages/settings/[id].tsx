import axiosInstance from '@/axiosConfig';
import React, { useState } from 'react';
import { GetServerSideProps } from 'next';

import ProtectedRoute from '@/src/HOC/ProtectedRoute';

import * as S from '@/styles/Settings.mudule';
import moment from 'moment';
import { UserInterface } from '@/interface/api';

type User = {
  User: UserInterface;
};

const Settings = ({ data }: { data: User }): JSX.Element => {
  const [user] = useState(data?.User);
  const [edit, setEdit] = useState(false);
  const [userName, setUserName] = useState(user?.user_name);
  const [userNickName, setUserNickname] = useState(user?.user_nickname);
  const [userDOB, setUserDob] = useState(user?.user_dob);
  const [userPhone, setUserPhone] = useState(user?.user_phone);
  const [userRegistered] = useState(user?.user_registered);
  const [userStatus] = useState(user?.user_registered);

  // console.log(userName, 'USER ==>', user);

  const editHandler = (): void => {
    setEdit(prevState => !prevState);
  };

  const updateHandler = async (event: React.SyntheticEvent<EventTarget>): Promise<void> => {
    event.preventDefault(); // don't redirect the page

    const payLoad = {
      user_name: userName || user?.user_name,
      user_dob: userDOB || user?.user_dob,
      user_phone: userPhone || user?.user_phone,
      user_registered: userRegistered || user?.user_registered,
      user_status: userStatus || user?.user_status,
      user_nickname: userNickName || user?.user_nickname
    };

    try {
      const res = await axiosInstance.patch(`/users/${user?._id}`, payLoad);
      const { data } = res;
      setEdit(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Main__Wrapper>
      <S.Settings__wrapper>
        <S.Settings__sidebar>
          <nav className='settings__nav'>
            <h1 className='Heading'>Settings</h1>

            <li className='nav__items'>About you</li>
            <li className='nav__items'>Account</li>
            <li className='nav__items'>
              <span role='img' aria-label='Coffie'>
                ☕
              </span>
              Donate
            </li>
          </nav>
        </S.Settings__sidebar>
        <S.Settings__content>
          <S.AboutYou>
            <S.Heading>About you</S.Heading>
            <S.List>
              <S.List__Items>
                {/* <div className='wrapper'> */}
                <div className='main__wrapper'>
                  <div className='heading'>Name</div>

                  <input
                    type='text'
                    placeholder='Enter you Full Name'
                    disabled={!edit}
                    onChange={e => setUserName(e.target.value)}
                    value={userName}
                  />
                  <div>
                    Your name appears on your{' '}
                    <a className='link ' href=''>
                      Profile
                    </a>{' '}
                    page, as your byline, and in your responses. It is a required field.
                  </div>
                </div>
                <div className='button__wrapper'>
                  {!edit ? (
                    <button className='button ' data-action='edit-name' onClick={editHandler}>
                      Edit
                    </button>
                  ) : (
                    <span className='buttonSet'>
                      <button className='button ' data-action='save-name' onClick={updateHandler}>
                        Save
                      </button>
                      <button className='button ' data-action='cancel-name' onClick={editHandler}>
                        Cancel
                      </button>
                    </span>
                  )}
                  {/* </div> */}
                </div>
              </S.List__Items>

              <S.List__Items>
                {/* <div className='wrapper'> */}
                <div className='main__wrapper'>
                  <div className='heading'>Phone</div>

                  <input
                    type='text'
                    placeholder='Enter you Phone Number'
                    disabled={!edit}
                    onChange={e => setUserPhone(e.target.value)}
                    value={userPhone}
                  />
                </div>
                <div className='button__wrapper'>
                  {!edit ? (
                    <button className='button ' data-action='edit-name' onClick={editHandler}>
                      Edit
                    </button>
                  ) : (
                    <span className='buttonSet'>
                      <button className='button ' data-action='save-name' onClick={updateHandler}>
                        Save
                      </button>
                      <button className='button ' data-action='cancel-name' onClick={editHandler}>
                        Cancel
                      </button>
                    </span>
                  )}
                  {/* </div> */}
                </div>
              </S.List__Items>

              <S.List__Items>
                {/* <div className='wrapper'> */}
                <div className='main__wrapper'>
                  <div className='heading'>Date of birth</div>

                  <input
                    type='Date'
                    placeholder='Enter you Full Name'
                    disabled={!edit}
                    onChange={e => setUserDob(e.target.value)}
                    value={moment(userDOB).locale('en').format('YYYY-MM-DD')}
                  />
                  <div>
                    Your name appears on your{' '}
                    <a className='link ' href=''>
                      Profile
                    </a>{' '}
                    page, as your byline, and in your responses. It is a required field.
                  </div>
                </div>
                <div className='button__wrapper'>
                  {!edit ? (
                    <button className='button ' data-action='edit-name' onClick={editHandler}>
                      Edit
                    </button>
                  ) : (
                    <span className='buttonSet'>
                      <button className='button ' data-action='save-name' onClick={updateHandler}>
                        Save
                      </button>
                      <button className='button ' data-action='cancel-name' onClick={editHandler}>
                        Cancel
                      </button>
                    </span>
                  )}
                  {/* </div> */}
                </div>
              </S.List__Items>

              <S.List__Items>
                <div className='main__wrapper'>
                  <div className='heading'>Username & URL</div>

                  <div>
                    <table className='table'>
                      <tbody>
                        <tr>
                          <td className='table__data'>Username</td>
                          <td>
                            <input
                              className='table__input'
                              maxLength={50}
                              value={userNickName}
                              onChange={e => setUserNickname(e.target.value)}
                              disabled={!edit}
                            />
                          </td>
                        </tr>
                        <tr className='table__row'>
                          <td></td>
                          <td>
                            <p className='u-hide m'></p>
                          </td>
                        </tr>
                        <tr className='table__row'>
                          <td className='table__data'>URL</td>
                          <td className='table__data'>{`https://medium.com/${userNickName}`}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='button__wrapper'>
                  {!edit ? (
                    <button className='button ' data-action='edit-name' onClick={editHandler}>
                      Edit
                    </button>
                  ) : (
                    <span className='buttonSet'>
                      <button className='button ' data-action='save-name' onClick={updateHandler}>
                        Save
                      </button>
                      <button className='button ' data-action='cancel-name' onClick={editHandler}>
                        Cancel
                      </button>
                    </span>
                  )}
                </div>
              </S.List__Items>
            </S.List>
          </S.AboutYou>
          <S.Email>
            <S.Heading>Account Settings</S.Heading>
            <S.List>
              <S.List__Items>
                {/* <div className='wrapper'> */}
                <div className='main__wrapper'>
                  <div className='heading'>Delete Account</div>

                  <div>Permanently delete your account and all of your content.</div>
                  <div className='delete-account'>Delete account</div>
                </div>
              </S.List__Items>
            </S.List>
          </S.Email>
        </S.Settings__content>
      </S.Settings__wrapper>
    </S.Main__Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id as string;

  try {
    const res = await axiosInstance.get(`/users/${id}`);
    const data: User = res.data;
    // console.log('res : =====> ', data.User);

    // will be passed to the page component as props
    return { props: { data } };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: '/',
        statusCode: 307
      }
    };
  }
};

export default ProtectedRoute(Settings);
// export default Settings;
