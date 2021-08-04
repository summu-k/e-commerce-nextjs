import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import '../styles/globals.css';
import store from '../../redux/store';
import Seo from '../component/Seo';
import Layout from '../component/baseLayouts/Layout';

const Loader = dynamic(() => import('../component/Loader'));

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false);
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
          <Layout>
            <Seo pageTitle={pageProps.pageTitle} />
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </html>
    </>
  );
};

export default MyApp;
