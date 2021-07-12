import React, { useState } from 'react';
import Link from 'next/link';

export default function Home(productData) {
  const [productList, setProductList] = useState([]);
  console.log('NEXT_PUBLIC_WEB_APP_URL ', process.env.NEXT_PUBLIC_WEB_APP_URL);

  React.useEffect(() => {
    const productListData = productData.searchResult.results.map((data) => (
      <>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mg-5 mx-8 my-4" key={data.id}>
          <img className="w-full" src={data.image} alt="Product images" />
          <div className="px-6 py-4">
            <Link href="/product/[id]" as={`/product/${data.id}`}>
              <a target="_blank">
                <h1 className="font-bold text-xl mb-2">{data.name}</h1>
              </a>
            </Link>

            <p className="text-gray-700 text-base">{data.location.name}</p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
              {data.status}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
              {data.species}
            </span>
          </div>
        </div>
      </>
    ));

    setProductList(productListData);
  }, [productData]);

  return <div className="root-card flex flex-wrap">{productList}</div>;
}

export async function getStaticProps() {
  // const url = 'https://rickandmortyapi.com/api/character';
  const url = `${process.env.NEXT_PUBLIC_WEB_APP_URL}`;
  let searchResult = await fetch(url);
  searchResult = await searchResult.json();
  return {
    props: {
      searchResult,
    },
  };
}
