/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import { useAmp } from 'next/amp';
import ProductCardTheme from '../component/ProductCardTheme';
import { ProductI } from '../utils/interfaces';

export const config = { amp: 'hybrid' };

export default function Home({ res }: { res: ProductI }) {
  const isAmp = useAmp();
  const { results } = res;
  const [productList, setProductList] = useState([] as any);

  React.useEffect(() => {
    const productListData = results.map((data: ProductI) => (
      <>
        <ProductCardTheme key={data.id} product={data} />
      </>
    ));
    setProductList(productListData);
  }, [res]);

  return (
    <>
      {isAmp ? (
        <amp-img width="300" height="300" src="/vercel.svg" alt="shopping website" layout="fixed" />
      ) : (
        <>
          <div className="w-full z-30 top-0 py-1">
            <section
              className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right xl h-98"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80)`,
              }}
            >
              <div className="container mx-auto h-96">
                <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
                  <h1 className="text-black text-2xl my-4">Stripy Zig Zag Jigsaw Pillow and Duvet Set</h1>
                  <a
                    className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
                    href="/"
                  >
                    products
                  </a>
                </div>
              </div>
            </section>
            <section className="bg-white">
              <div className="container mx-auto flex items-center flex-wrap">
                <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                  <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 pt-6">
                    <a
                      className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
                      href="/"
                    >
                      Store
                    </a>

                    <div className="flex items-center" id="store-nav-content">
                      <a className="pl-3 inline-block no-underline hover:text-black" href="/">
                        <svg
                          className="fill-current hover:text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                        </svg>
                      </a>

                      <a className="pl-3 inline-block no-underline hover:text-black" href="/">
                        <svg
                          className="fill-current hover:text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </section>
          </div>
          <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">{productList}</div>
        </>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_WEB_APP_URL}character`;
  const searchResult = await fetch(url);
  const res: { results: [] } = await searchResult.json();
  return {
    props: {
      res,
    },
  };
};
