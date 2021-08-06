/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import { GetStaticProps } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import { fetchAllProduct } from './api/product';
// import { ProductDataProps } from '../utils/interfaces';
import ProductCardTheme from '../component/ProductCardTheme';
import CardSkeleton from '../component/Skeleton';
import HeroSection from '../component/HeroSection';

// const Home: FC<ProductDataProps> = ({ results }) => {
const Home = ({ results }) => {
  const [isLoading, setLoading] = useState(true);
  const [productList, setProductList] = useState();
  const [session] = useSession();

  React.useEffect(() => {
    const productListData = results.map((data) => <ProductCardTheme key={data.id} product={data} />);
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
        {!session && (
          <>
            Not signed in <br />
            <button type="button" onClick={signIn}>
              Sign In
            </button>
          </>
        )}
        {session && (
          <>
            Signed in as {session?.user?.email} <br />
            <div>You can now access our super secret pages</div>
            <button type="button">
              <Link href="/secret">To the secret</Link>
            </button>
            <button type="button" onClick={signOut}>
              sign out
            </button>
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
          </>
        )}
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const { results } = await fetchAllProduct();
  return {
    props: {
      results,
      pageTitle: 'Shop Forver Bazaar',
    },
  };
};

export default Home;
