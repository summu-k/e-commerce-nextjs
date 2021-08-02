import React from 'react';
import { GetServerSideProps } from 'next';

const Fallback = () => (
  <div className="text-center py-16 px-0">
    <h1>This is offline fallback page</h1>
    <h2>When offline, any route will fallback to this page</h2>
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {
    pageTitle: 'This is offline fallback page',
  },
});

export default Fallback;
