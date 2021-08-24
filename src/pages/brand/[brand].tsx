import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getProductByBrands } from '../api/category/[category]';
import { ProductMapProps } from '../../utils/interfaces';
import { brandMap } from '../../utils/commonUtility';

const ProductCardTheme = dynamic(() => import('../../component/ProductCardTheme'), {
  loading: () => <p>Loading...</p>,
});

const BrandPage = ({ products, productCount }: { products: ProductMapProps[]; productCount: number }) => {
  const router = useRouter();

  const [data, setData] = useState(products);
  const [hasMore, setHasMore] = useState(true);
  const [queryParams] = useState(router.query.brand);

  const getMoreResults = async () => {
    const { brand } = router.query;
    if (typeof brand === 'string') {
      const { results } = await getProductByBrands(brandMap[brand], 20, data.length + 1);
      setData((dataPrev: any) => [...dataPrev, ...results]);
    }
  };

  React.useEffect(() => {
    if (data) {
      setHasMore(productCount > data.length);
    }
  }, [data]);

  return (
    <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
      <h1 className="text-xl container mx-auto flex items-center flex-wrap font-medium mt-4">
        Results for {queryParams}
      </h1>
      <InfiniteScroll
        dataLength={data.length}
        next={getMoreResults}
        hasMore={hasMore}
        loader={<h4>loading...</h4>}
        endMessage={
          <div className="cards text-center py-6">
            <p data-test-py="productEnd">
              <b>Thats all folks !!!</b>
            </p>
          </div>
        }
      >
        <div className="cards flex flex-wrap">
          {data.map((product) => (
            <ProductCardTheme key={product.id} product={product} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default BrandPage;
export async function getServerSideProps(ctx: { query: { brand: string } }) {
  const { brand } = ctx.query;

  const { results, info } = await getProductByBrands(brandMap[brand], 20, 0);
  // const productCount = getProductCount(category);
  // return { props: { products, productCount: products.length, pageTitle: category.toUpperCase() } };
  return { props: { products: results, productCount: info.count, pageTitle: brand.toUpperCase() } };
}
