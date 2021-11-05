import React, { useState, useEffect } from 'react';
import * as S from '@/styles/settings/settings.module';
import { AccountCircleSharp, Settings, FaceRounded } from '@material-ui/icons';
// import { status } from '@/styles/Post-Card/PostCard.module';

export default function Settings1(): JSX.Element {
  const sidebarItems = [
    {
      icon: AccountCircleSharp,
      link: 'Profile',
      text: 'Change your avatar & cover, accept friends, read messages and more!',
      body: ['Profile Info', 'Notification', 'account Follow', 'marked Posts']
    },
    {
      icon: Settings,
      link: 'Account',
      text: 'Change settings, configure notifications, and review your privacy',
      body: ['Account Info', 'Change Password', 'General Settings']
    },
    {
      icon: FaceRounded,
      link: 'Buy Me a Coffee',
      text: 'Change settings, configure notifications, and review your privacy',
      body: ['Paypal', 'Bitcoin', 'Paytm', 'UPI']
    }
  ];
  const [active, setActive] = useState({ link: '', status: false });
  // setActive({ link: 'test', status: true });
  useEffect(() => {
    console.log('link', active.link, 'status', active.status);
  }, [active]);

  return (
    <>
      <S.Banner>
        <h2>Settigns</h2>
        <p>Profile info, messages, settings and much more!</p>
      </S.Banner>
      <S.Grid>
        <S.Sidebar>
          <S.Sidebar_Menu>
            {sidebarItems.map(item => {
              return (
                <div className={`sidebar-menu-item`} key={item.link}>
                  <div className='sidebar-menu-head'>
                    <div className=''>
                      <item.icon className='icon' />
                      <p className='title'>{item.link}</p>
                      <button
                        className={`control-icon`}
                        onClick={() =>
                          setActive({
                            link: item.link,
                            status: !active.status
                          })
                        }
                      >
                        {active.link === item.link && active.status === true ? (
                          <span>-</span>
                        ) : (
                          <span>+</span>
                        )}
                      </button>
                    </div>
                    <div className='text'>{item.text}</div>
                  </div>
                  <div
                    className={`sidebar-menu-body ${
                      active.link === item.link && active.status === true ? 'active' : ''
                    }`}
                  >
                    {item.body.map(bodyItem => {
                      return (
                        <a href='' className='menu-link' key={bodyItem}>
                          {bodyItem}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </S.Sidebar_Menu>
          <S.Sidebar_footer>
            <button className='button' type='submit'>
              Save Changes!
            </button>

            <button className='button' type='reset'>
              Discard All
            </button>
          </S.Sidebar_footer>
        </S.Sidebar>

        <S.Content>
          <S.content_header>
            <p className='section-pretitle'>MY PROFILE</p>
            <p className='section-title'>{`Profile Info`}</p>
          </S.content_header>

          <S.MainBox>
            <S.BasicSettings>
              {[1, 2].map(item => {
                return (
                  <div className='upload-box' key={item}>
                    <AccountCircleSharp />
                    <p className='upload-box__title'>Change Avatar</p>
                    <p className='upload-box__text'>110x110px size minimum</p>
                  </div>
                );
              })}
            </S.BasicSettings>
          </S.MainBox>
          <S.Widget_Box>
            <p className='widget-box__title'>About Your Profile</p>
            <div className='widget-box__content'>
              <form action='' className='form'>
                <div className='form-row'>
                  <div className='form-item'>
                    <div className='form-input'>
                      <label htmlFor='profile-name'>Profile Name</label>
                      <input id='profile-name' type='text' />
                    </div>
                  </div>
                  <div className='form-item'>
                    <div className='form-input'>
                      <label htmlFor='profile-name'>TagLine</label>
                      <input id='profile-name' type='text' />
                    </div>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-item'>
                    <div className='form-input'>
                      <textarea
                        id='profile-description'
                        name='profile_description'
                        placeholder='Write a little description about you...'
                      ></textarea>
                    </div>
                  </div>

                  <div className='form-item'>
                    <div className='form-input small active'>
                      <label htmlFor='profile-public-email'>Public Email</label>
                      <input type='text' id='profile-public-email' name='profile_public_email' />
                    </div>

                    <div className='form-input small'>
                      <label htmlFor='profile-public-website'>Public Website</label>
                      <input
                        type='text'
                        id='profile-public-website'
                        name='profile_public_website'
                      />
                    </div>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-item'>
                    <div className='form-select'>
                      <label htmlFor='profile-country'>Country</label>
                      <select id='profile-country' name='profile_country'>
                        <option value='0'>Select your Country</option>
                        <option value='1' selected={true}>
                          United States
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className='form-item'>
                    <div className='form-select'>
                      <label htmlFor='profile-city'>City</label>
                      <select id='profile-city' name='profile_city'>
                        <option value='0'>Select your City</option>
                        <option value='1' selected={true}>
                          New York
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-item'>
                    <div className='form-input'>
                      <label htmlFor='profile-birthday'>.</label>
                      <input type='date' id='profile-birthday' name='profile_birthday' />
                    </div>
                  </div>
                  <div className='form-item'>
                    <div className='form-input'>
                      <label htmlFor='profile-occupation'>Occupation</label>
                      <input type='text' id='profile-occupation' name='profile_occupation' />
                    </div>
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-item'>
                    <div className='form-select'>
                      <label htmlFor='profile-status'>Status</label>
                      <select id='profile-status' name='profile_status'>
                        <option value='0'>Select your Status</option>
                        <option value='1' selected={false}>
                          In a Relationship
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className='form-item'>
                    <div className='form-input small'>
                      <label htmlFor='profile-birthplace'>Birthplace</label>
                      <input type='text' id='profile-birthplace' name='profile_birthplace' />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </S.Widget_Box>
          <S.Widget_Box>
            <p className='widget-box__title'>Jobs &amp; Education</p>

            <div className='widget-box__content'>
              <form className='form'>
                <div className='form-row split'>
                  <div className='form-item'>
                    <div className='form-input small active'>
                      <label htmlFor='profile-job-1-title'>Title or Place</label>
                      <input type='text' id='profile-job-1-title' name='profile_job_1_title' />
                    </div>
                  </div>

                  <div className='form-row split'>
                    <div className='form-item'>
                      <div className='form-select'>
                        <label htmlFor='profile-job-1-year-started'>Year Started</label>
                        <select id='profile-job-1-year-started' name='profile_job_1_year_started'>
                          <option value='0'>Select Year</option>
                          <option value='1' selected={false}>
                            2015
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className='form-item'>
                      <div className='form-select'>
                        <label htmlFor='profile-job-1-year-ended'>Year Ended</label>
                        <select id='profile-job-1-year-ended' name='profile_job_1_year_ended'>
                          <option value='0'>Select Year</option>
                          <option value='1' selected={false}>
                            Now
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-item'>
                    <div className='form-input small mid-textarea active'>
                      <label htmlFor='profile-job-1-description'>Description</label>
                      <textarea id='profile-job-1-description' name='profile_job_1_description' />
                    </div>
                  </div>
                </div>

                <div className='form-row split'>
                  <div className='form-item'>
                    <div className='form-input small'>
                      <label htmlFor='profile-job-2-title'>Title or Place</label>
                      <input type='text' id='profile-job-2-title' name='profile_job_2_title' />
                    </div>
                  </div>

                  <div className='form-row split'>
                    <div className='form-item'>
                      <div className='form-select'>
                        <label htmlFor='profile-job-2-year-started'>Year Started</label>
                        <select id='profile-job-2-year-started' name='profile_job_2_year_started'>
                          <option value='0'>Select Year</option>
                          <option value='1' selected={false}>
                            2019
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className='form-item'>
                      <div className='form-select'>
                        <label htmlFor='profile-job-2-year-ended'>Year Ended</label>
                        <select id='profile-job-2-year-ended' name='profile_job_2_year_ended'>
                          <option value='0'>Select Year</option>
                          <option value='1' selected={false}>
                            2019
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-item'>
                    <div className='form-input small mid-textarea'>
                      <label htmlFor='profile-job-2-description'>Description</label>
                      <textarea
                        id='profile-job-2-description'
                        name='profile_job_2_description'
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </S.Widget_Box>
        </S.Content>
      </S.Grid>
    </>
  );
}
