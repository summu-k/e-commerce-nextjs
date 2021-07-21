import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCardTheme from '../../component/ProductCardTheme';
import { getProductsByCategory, getProductCount } from '../api/category/[category]';
import { ProductI } from '../../utils/interfaces';

const CategoryPage = ({ products, productCount }: { products: ProductI[]; productCount: number }) => {
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
    <div className="container">
      <h1 className="text-xl font-medium text-center mt-4">Results for {queryParams}</h1>
      <InfiniteScroll
        dataLength={data.length}
        next={getMoreResults}
        hasMore={hasMore}
        loader={<h4>loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Thats all folks !!!</b>
          </p>
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
  const products = await getProductsByCategory(category, 0, 6);
  const productCount = await getProductCount(category);
  return { props: { products, productCount: +productCount } };
}
