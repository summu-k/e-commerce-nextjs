import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import ProductCard from '../component/ProductCard';
import { ProductI } from '../utils/interfaces';

export default function Home({ res }: { res: ProductI }) {
  const { results } = res;
  const [productList, setProductList] = useState([] as any);

  React.useEffect(() => {
    const productListData = results.map((data: ProductI) => (
      <>
        <ProductCard key={data.id} product={data} />
      </>
    ));
    setProductList(productListData);
  }, [res]);

  return <div className="root-card flex flex-wrap">{productList}</div>;
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
