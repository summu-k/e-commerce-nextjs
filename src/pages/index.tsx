import React, { useState } from 'react';

export default function Home(productData) {
  const [productList, setProductList] = useState([]);

  React.useEffect(() => {
    const productList = productData.searchResult.results.map((data, index) => {
      return (
        <>
          <div className="max-w-sm rounded overflow-hidden shadow-lg mg-5 mx-8 my-4" key={data.id}>
            <img className="w-full" src={data.image} alt={'Product images'}></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{data.name}</div>
              <p className="text-gray-700 text-base">{data.location.name}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                #anime
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-300">
                #cartoon
              </span>
            </div>
          </div>
        </>
      );
    });

    setProductList(productList);
  }, [productData]);

  return <div className="root-card flex flex-wrap">{productList}</div>;
}

export async function getStaticProps() {
  const url = 'https://rickandmortyapi.com/api/character';
  let searchResult = await fetch(url);
  searchResult = await searchResult.json();
  return {
    props: {
      searchResult: searchResult,
    },
  };
}
