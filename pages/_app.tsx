import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Header, Sidebar } from '@/src/Layout';
import { ThemeHOC, PageWrapper } from '@/src/HOC';
import {
  SidebarToggleProvider,
  ThemeTogglerProvider,
  HeaderMenuToggleProvider,
  AuthModelToggleProvider,
  IsAuthenticatedProvider,
  AuthProvider
} from '@/src/Context';

import { GlobalStyle } from '../styles/GlobalStyled';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <HeaderMenuToggleProvider>
        <ThemeTogglerProvider>
          <SidebarToggleProvider>
            <AuthModelToggleProvider>
              <AuthProvider>
                <IsAuthenticatedProvider>
                  <ThemeHOC>
                    <GlobalStyle />
                    <div className='page'>
                      {router.pathname !== '/login' ? (
                        <>
                          <Sidebar />
                          <PageWrapper>
                            <>
                              <Header />
                              <Component {...pageProps} />
                            </>
                          </PageWrapper>
                        </>
                      ) : (
                        <Component {...pageProps} />
                      )}
                    </div>
                  </ThemeHOC>
                </IsAuthenticatedProvider>
              </AuthProvider>
            </AuthModelToggleProvider>
          </SidebarToggleProvider>
        </ThemeTogglerProvider>
      </HeaderMenuToggleProvider>
    </>
  );
}

export default MyApp;
