import { Provider } from 'react-redux';
import React from 'react';
import Head from 'next/head';
import BaseLayout from '../component/layouts/BaseLayout';
import '../styles/globals.css';
import store from '../../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <BaseLayout>
        <Head>
          <title>Shop Forever</title>
        </Head>
        <Component {...pageProps} />;
      </BaseLayout>
    </Provider>
  );
}

export default MyApp;
