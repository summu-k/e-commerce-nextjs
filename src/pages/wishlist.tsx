import React, { FC, useEffect, useContext } from 'react';

import { GetServerSideProps } from 'next';
import { getSession } from '@auth0/nextjs-auth0';
import { FieldSet } from 'airtable/lib/field_set';
import { Records } from 'airtable/lib/records';
import { table, minifyRecords } from './api/utils/airtable';
import { WishlistProps, AuthContextType, WishlistItemProps, WishlistMapType } from '../utils/interfaces';
import { WishlistContext } from '../contexts/WishlistContext';
import ProductCardTheme from '../component/ProductCardTheme';

const Wishlist: FC<WishlistProps> = ({ initialWislist, wishlistMap }) => {
  const { wishlists, setWishlists } = useContext(WishlistContext) as AuthContextType;

  useEffect(() => {
    setWishlists(initialWislist);
  }, []);

  return (
    <div>
      <div className="justify-between text-2xl font-bold text-gray-800 md:text-3xl justify-between py-4 wishlist-list">
        <h2>Your Wishlist</h2>
      </div>
      <div className="productListingWrapper mx-auto pt-4 pb-12 container">
        <div className="flex items-center flex-wrap">
          {wishlists &&
            wishlistMap &&
            wishlists.map((item) => (
              <ProductCardTheme
                key={item.id}
                product={{
                  id: item.fields.productId,
                  product_name: item.fields.product_name,
                  images: typeof item.fields.images === 'string' ? [item.fields.images] : item.fields.images,
                  sale_price: item.fields.sale_price,
                  brand: item.fields.brand,
                }}
                checkWishlist={!!wishlistMap[item.fields.productId]}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = getSession(context.req, context.res);
  let allWislist: Records<FieldSet>;
  const wishlistMap: WishlistMapType = {};
  let wishlistdata = [];
  try {
    if (session?.user) {
      allWislist = await table.select({ filterByFormula: `userId = '${session?.user?.sub}'` }).firstPage();
      wishlistdata = minifyRecords(allWislist);
      wishlistdata.forEach((data: WishlistItemProps) => {
        wishlistMap[data.fields.productId] = data.id;
      });
    }
    return {
      props: {
        initialWislist: wishlistdata,
        wishlistMap,
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
