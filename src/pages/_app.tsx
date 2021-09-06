import { Provider as ReduxProvider } from 'react-redux';
// import { Provider } from 'next-auth/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import '../styles/globals.css';
import store from '../redux/store';
import Seo from '../component/Seo';
import Layout from '../component/baseLayouts/Layout';
import { WishlistProvider } from '../contexts/WishlistContext';

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
        <UserProvider>
          <WishlistProvider>
            <ReduxProvider store={store}>
              <Layout>
                <Seo pageTitle={pageProps.pageTitle} />
                <Component {...pageProps} />
              </Layout>
            </ReduxProvider>
          </WishlistProvider>
        </UserProvider>
      </html>
    </>
  );
};

export default MyApp;
