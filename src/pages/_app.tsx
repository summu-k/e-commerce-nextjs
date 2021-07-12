import 'tailwindcss/tailwind.css';
import React from 'react';
import BaseLayout from '../component/layouts/BaseLayout';

function MyApp({ Component, pageProps }) {
  return (
    <BaseLayout>
      <Component {...pageProps} />;
    </BaseLayout>
  );
}

export default MyApp;
