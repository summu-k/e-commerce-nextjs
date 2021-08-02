import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getProductsByCategory, getProductCount } from '../api/category/[category]';
import { ProductDataProps } from '../../utils/interfaces';

const ProductCardTheme = dynamic(() => import('../../component/ProductCardTheme'), {
  loading: () => <p>Loading...</p>,
});

const CategoryPage = ({ products, productCount }: { products: ProductDataProps[]; productCount: number }) => {
  const router = useRouter();

  const [data, setData] = useState(products);
  const [hasMore, setHasMore] = useState(true);
  const [queryParams] = useState(router.query.category);

  const getMoreResults = async () => {
    const { category } = router.query;
    if (typeof category === 'string') {
      const newProducts = getProductsByCategory(category, products.length, products.length + 6);
      setData((dataPrev: any) => [...dataPrev, ...newProducts]);
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
            <p>
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

export default CategoryPage;
// export async function getServerSideProps(ctx: { query: { category: string; start: number; limit: number } }) {
export async function getServerSideProps(ctx: { query: { category: string } }) {
  const { category } = ctx.query;
  const products = getProductsByCategory(category, 0, 6);
  const productCount = getProductCount(category);
  return { props: { products, productCount: +productCount, pageTitle: category.toUpperCase() } };
}
