/* eslint-disable no-unused-vars */
import React, { FC, useEffect, useContext } from 'react';
import { GetServerSideProps } from 'next';
import { table, minifyRecords } from './api/utils/airtable';
import { WishlistProps, AuthContextType } from '../utils/interfaces';
import { WishlistContext } from '../contexts/WishlistContext';

const Wishlist: FC<WishlistProps> = ({ initialWislist }) => {
  const { wishlists, setWishlists } = useContext(WishlistContext) as AuthContextType;

  useEffect(() => {
    setWishlists(initialWislist);
  }, []);

  React.useEffect(() => {
    console.log('wishlists useEffect ', wishlists);
  }, [wishlists]);

  return (
    <div>
      <h1>Wishlist Listing</h1>
      {wishlists &&
        wishlists.map((item) => (
          <>
            <span>{item.fields.name}</span>
            <span>{item.fields.productId}</span>
          </>
        ))}
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
