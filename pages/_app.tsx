import Head from 'next/head';
import type { AppProps } from 'next/app';
import Header from '../src/Header/Header';
import { GlobalStyle } from '../styles/GlobalStyled';

import ThemeHoc from '../src/HOC/ThemeHoc';
import Sidebar from '../src/Sidebar/Sidebar';

import { SidebarToggleProvider } from '../src/Context/SidebarToggleContext';
import { ThemeTogglerProvider } from '../src/Context/ThemeTogglerContext';
import { HeaderMenuToggleProvider } from '../src/Context/HeaderMenuTogglwContext';
import PageWrapper from '../src/HOC/PageWrapper';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <HeaderMenuToggleProvider>
        <ThemeTogglerProvider>
          <SidebarToggleProvider>
            <ThemeHoc>
              <GlobalStyle />
              <div className='page'>
                <Sidebar />
                <PageWrapper>
                  <>
                    <Header />
                    <Component {...pageProps} />
                  </>
                </PageWrapper>
              </div>
            </ThemeHoc>
          </SidebarToggleProvider>
        </ThemeTogglerProvider>
      </HeaderMenuToggleProvider>
    </>
  );
}
export default MyApp;
