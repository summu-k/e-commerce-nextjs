/* eslint-disable no-unused-vars */
import React, { FC, useEffect, useContext } from 'react';
import { GetServerSideProps } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { table, minifyRecords } from './api/utils/airtable';
import { WishlistProps, AuthContextType, WishlistItemProps } from '../utils/interfaces';
import { WishlistContext } from '../contexts/WishlistContext';

const Wishlist: FC<WishlistProps> = ({ initialWislist }) => {
  const { wishlists, setWishlists } = useContext(WishlistContext) as AuthContextType;

  useEffect(() => {
    setWishlists(initialWislist);
  }, []);

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
  const session = getSession(context.req, context.res);
  let allWislist;
  try {
    if (session?.user) {
      allWislist = await table.select({ filterByFormula: `userId = '${session.user.sub}'` }).firstPage();
    }
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
