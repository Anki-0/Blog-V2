import { GlobalStyle } from '../styles/GlobalStyled';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Header from '../src/Layout/Header/Header';

import ThemeHoc from '../src/HOC/ThemeHoc';
import Sidebar from '../src/Layout/Sidebar/Sidebar';

import { SidebarToggleProvider } from '../src/Context/SidebarToggleContext';
import { ThemeTogglerProvider } from '../src/Context/ThemeTogglerContext';
import { HeaderMenuToggleProvider } from '../src/Context/HeaderMenuTogglwContext';
import PageWrapper from '../src/HOC/PageWrapper';
import { Fragment } from 'react';
import { SigninComponentToggleProvider } from '../src/Context/SigninComponentToggleContext';
import { AuthProvider } from '../src/Context/AuthContext';
import { IsAuthenticatedProvider } from '../src/Context/isAuthenticatedContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <HeaderMenuToggleProvider>
        <ThemeTogglerProvider>
          <SidebarToggleProvider>
            <SigninComponentToggleProvider>
              <AuthProvider>
                <IsAuthenticatedProvider>
                  <ThemeHoc>
                    <GlobalStyle />
                    <div className='page'>
                      <Sidebar />
                      <PageWrapper>
                        <Fragment>
                          <Header />
                          <Component {...pageProps} />
                        </Fragment>
                      </PageWrapper>
                    </div>
                  </ThemeHoc>
                </IsAuthenticatedProvider>
              </AuthProvider>
            </SigninComponentToggleProvider>
          </SidebarToggleProvider>
        </ThemeTogglerProvider>
      </HeaderMenuToggleProvider>
    </>
  );
}
export default MyApp;
