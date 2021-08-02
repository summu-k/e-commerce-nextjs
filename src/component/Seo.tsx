import React, { FC } from 'react';
import Head from 'next/head';
import { SeoProps } from '../utils/interfaces';

const SEO: FC<SeoProps> = ({ pageTitle }) => (
  <Head>
    <title>{pageTitle}</title>
    <meta name="description" content={`Learn more about ${pageTitle}`} />
    <meta property="og:title" content={`${pageTitle} - Forever Shopping`} key="e-commerce" />
    <link rel="icon" href="/icons-shop.png" />

    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1 ,shrink-to-fit=no" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="apple-touch-icon" href="/assets/images/logo.png" />
    <meta name="theme-color" content="#fff" />
  </Head>
);

export default SEO;
