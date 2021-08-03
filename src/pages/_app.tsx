import { Provider } from 'react-redux';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import '../styles/globals.css';
import store from '../../redux/store';
import Seo from '../component/Seo';
import Header from '../component/baseLayouts/Header';
import Footer from '../component/baseLayouts/Footer';
// import { addNotification } from '../../redux/notificationSlice';

// const Footer = dynamic(() => import('../component/baseLayouts/Footer'));
const Loader = dynamic(() => import('../component/Loader'));

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  // const dispatch = useDispatch();
  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });

  Router.events.on('routeChangeComplete', () => {
    setLoading(false);
    // setTimeout(() => {
    // dispatch(addNotification({ message: '', type: '' }));
    // }, 10000);
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
