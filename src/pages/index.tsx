/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, FC, useContext, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { FieldSet } from 'airtable/lib/field_set';
import { Records } from 'airtable/lib/records';
import { table, minifyRecords } from './api/utils/airtable';
import { fetchAllProduct } from './api/product';
import { ProductMapProps, WishlistItemProps, WishlistMapType, AuthContextType } from '../utils/interfaces';
import ProductCardTheme from '../component/ProductCardTheme';
import CardSkeleton from '../component/Skeleton';
import HeroSection from '../component/HeroSection';
import { WishlistContext } from '../contexts/WishlistContext';

const Home: FC<ProductMapProps> = ({ results, wishlistMap, wishlistCount }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [productList, setProductList] = useState<Object[]>();
  const { setWishlistsCount } = useContext(WishlistContext) as AuthContextType;

  useEffect(() => {
    if (wishlistMap && results) {
      const productListData = results.map((data: ProductMapProps) => (
        <ProductCardTheme key={data.id} product={data} checkWishlist={!!wishlistMap[data.id]} />
      ));
      setProductList(productListData);
    }
  }, []);

  useEffect(() => {
    if (wishlistCount) {
      setWishlistsCount(wishlistCount);
    }
  }, [wishlistCount]);

  useEffect(() => {
    if (productList?.length !== 0) {
      setLoading(false);
    }
  }, [productList]);

  return (
    <main>
      <div className="index-height carousel relative mx-auto">
        <HeroSection />
      </div>
      {isLoading && (
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 productListWrapper">
          <CardSkeleton />
        </div>
      )}
      {!isLoading && (
        <div
          className="container mx-auto flex items-center flex-wrap pt-16 pb-12 productListWrapper"
          data-test-py="productListing"
        >
          {productList}
        </div>
      )}
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchAllProduct();
  const allWislist: Records<FieldSet> = await table.select({}).firstPage();

  const wishlistMap: WishlistMapType = {};
  minifyRecords(allWislist).forEach((data: WishlistItemProps) => {
    wishlistMap[data.fields.productId] = data.id;
  });

  return {
    props: {
      results,
      wishlistMap,
      wishlistCount: allWislist.length,
      pageTitle: 'Shop Forver Bazaar',
    },
  };
};

export default Home;
