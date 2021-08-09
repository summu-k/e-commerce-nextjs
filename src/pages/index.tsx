/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, FC } from 'react';
import { GetStaticProps } from 'next';
import { fetchAllProduct } from './api/product';
import { ProductDataProps } from '../utils/interfaces';
import ProductCardTheme from '../component/ProductCardTheme';
import CardSkeleton from '../component/Skeleton';
import HeroSection from '../component/HeroSection';

const Home: FC<ProductDataProps> = ({ results }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [productList, setProductList] = useState<Object[]>();

  React.useEffect(() => {
    const productListData = results.map((data: ProductDataProps) => <ProductCardTheme key={data.id} product={data} />);
    setProductList(productListData);
  }, []);

  React.useEffect(() => {
    if (productList?.length !== 0) {
      setLoading(false);
    }
  }, [productList]);

  return (
    <>
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
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { results } = await fetchAllProduct();
  return {
    props: {
      results,
      pageTitle: 'Shop Forver Bazaar',
    },
  };
};

export default Home;
