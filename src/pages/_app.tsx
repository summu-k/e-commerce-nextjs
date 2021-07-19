import { Provider } from 'react-redux';
import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import BaseLayout from '../component/layouts/BaseLayout';
import '../styles/globals.css';
import store from '../../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <html lang="en">
    <Head>
      <title>Blog build using NEXT, TS, NODE,</title>
      <meta property="og:title" content="Blog build using NEXT, TS, NODE," key="blog" />
      <meta
        name="description"
        content="This is MERN stack blog app fontent is build using NEXTJS, TS and it is also a PWA and Backend is build in NODE, TYPESCRIPT, MONGODB"
      />
      {/* Responsive meta tag */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/assets/images/logo.png" />
      <meta name="theme-color" content="#fff" />
    </Head>
    <Provider store={store}>
      <BaseLayout>
        <Head>
          <title>Shop Forever</title>
        </Head>
        <Component {...pageProps} />
      </BaseLayout>
    </Provider>
  </html>
);
export default MyApp;
