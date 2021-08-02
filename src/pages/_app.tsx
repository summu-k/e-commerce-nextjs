import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import '../styles/globals.css';
import store from '../../redux/store';
import Seo from '../component/Seo';

const Header = dynamic(() => import('../component/baseLayouts/Header'));
const Footer = dynamic(() => import('../component/baseLayouts/Footer'));
const Loader = dynamic(() => import('../component/Loader'));

const MyApp = ({ Component, pageProps }: AppProps) => {
  React.useEffect(() => {
    console.log('inside app tsx Component ', Component);
    console.log('inside app tsx pageProps ', pageProps);
  }, []);

  const [loading, setLoading] = useState(false as boolean);
  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
  });

  return (
    <>
      {loading && <Loader />}
      <html lang="en">
        <Provider store={store}>
          <Header>
            <Seo pageTitle={pageProps.pageTitle} />
            <Component {...pageProps} />
          </Header>
          <Footer />
        </Provider>
      </html>
    </>
  );
};

export default MyApp;
