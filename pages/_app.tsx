import Head from 'next/head';
import type { AppProps } from 'next/app';
import Header from '../src/Header/Header';
import { GlobalStyle } from '../styles/GlobalStyled';

import ThemeHoc from '../src/HOC/ThemeHoc';
import Sidebar from '../src/Sidebar/Sidebar';

import { SidebarToggleProvider } from '../src/Context/SidebarToggleContext';
import { ThemeTogglerProvider } from '../src/Context/ThemeTogglerContext';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <ThemeTogglerProvider>
        <SidebarToggleProvider>
          <ThemeHoc>
            <GlobalStyle />
            <div className='page'>
              <Sidebar />
              <div className='page__wrapper'>
                <Header />
                <Component {...pageProps} />
              </div>
            </div>
          </ThemeHoc>
        </SidebarToggleProvider>
      </ThemeTogglerProvider>
    </>
  );
}
export default MyApp;
