/* eslint-disable no-unused-vars */
import React, { FC } from 'react';
import { GetServerSideProps } from 'next';
import { table, minifyRecords } from './api/utils/airtable';

interface WishlistProps {
  initialWislist: [];
}

const Wishlist: FC<WishlistProps> = ({ initialWislist }) => {
  console.log('initialWislist => ');
  console.log(initialWislist);
  return (
    <div>
      <h1>Wishlist Listing</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const allWislist = await table.select({}).firstPage();
    return {
      props: {
        initialWislist: minifyRecords(allWislist),
      },
    };
  } catch (error) {
    return {
      props: {
        err: error.message,
      },
    };
  }
};

export default Wishlist;
