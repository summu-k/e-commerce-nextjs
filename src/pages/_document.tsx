import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icons-shop.png" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
