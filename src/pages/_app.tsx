import { Provider } from 'react-redux';
import 'tailwindcss/tailwind.css';
import React from 'react';
import BaseLayout from '../component/layouts/BaseLayout';
import '../styles/index.css';
import store from '../../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <BaseLayout>
        <Component {...pageProps} />;
      </BaseLayout>
    </Provider>
  );
}

export default MyApp;
