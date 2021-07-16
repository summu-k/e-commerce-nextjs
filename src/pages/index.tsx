import React, { useState } from 'react';
import { GetStaticProps } from 'next';
// import Link from 'next/link';
import ProductCard from '../component/ProductCard';

export default function Home(productData) {
  const [productList, setProductList] = useState([]);

  React.useEffect(() => {
    interface IKeys {
      id: number;
      image: string;
      name: string;
      location: Object;
      status: string;
      species: string;
    }

    const productListData = productData.searchResult.results.map((data: IKeys) => (
      <>
        <ProductCard key={data.id} product={data} />
      </>
    ));
    setProductList(productListData);
  }, [productData]);

  return <div className="root-card flex flex-wrap">{productList}</div>;
}

export const getStaticProps: GetStaticProps = async () => {
  const url = `${process.env.NEXT_PUBLIC_WEB_APP_URL}character`;
  let searchResult = await fetch(url);
  searchResult = await searchResult.json();
  return {
    props: {
      searchResult,
    },
  };
};
