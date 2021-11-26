import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Header, Sidebar } from '@/src/Layout';
import { ThemeHOC, PageWrapper } from '@/src/HOC';
import {
  SidebarToggleProvider,
  ThemeTogglerProvider,
  HeaderMenuToggleProvider,
  IsAuthenticatedProvider,
  AuthProvider
} from '@/src/Context';

import { GlobalStyle } from '../styles/GlobalStyled';
import { MDXProvider } from '@mdx-js/react';

import components from '@/src/_components/components';

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
                            <MDXProvider components={components}>
                              <Component {...pageProps} />
                            </MDXProvider>
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
          </SidebarToggleProvider>
        </ThemeTogglerProvider>
      </HeaderMenuToggleProvider>
    </>
  );
}

export default MyApp;
