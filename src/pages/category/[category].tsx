import React, { useState } from 'react';
import { useRouter } from 'next/router';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from '../../component/ProductCard';
import { getProductsByCategory } from '../api/category/[category]';
import { ProductI } from '../../utils/interfaces';

const CategoryPage = ({ products }: { products: ProductI[] }) => {
  const router = useRouter();
  console.log('products test first ', products.length);

  const [data, setData] = useState(products);
  // const [hasMore, setHasMore] = useState(true);
  const [queryParams] = useState(router.query.category);

  // React.useEffect(() => {
  // if (products) {
  // setData(products);
  // }
  // }, [products]);

  // React.useEffect(() => {
  //   if (router.query.category) {
  //     console.log('router.query.category ', router.query.category);
  //     setQueryParams(router.query.category);
  //   }
  // }, [router.query]);

  const getMoreResults = async () => {
    const { category } = router.query;
    if (typeof category === 'string') {
      const newProducts = getProductsByCategory(category, products.length, products.length + 6);
      console.log('newProducts length ', newProducts.length);
      setData((dataPrev: any) => [...dataPrev, ...newProducts]);
    }
  };

  React.useEffect(() => {
    if (data) {
      console.log('products length further ', data.length);
    }
  }, [data]);

  return (
    <div className="container">
      <h1 className="text-xl font-medium text-center mt-4">Results for {queryParams}</h1>
      <div className="cards flex flex-wrap">
        <InfiniteScroll
          dataLength={data.length}
          next={getMoreResults}
          hasMore
          loader={<h4>loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Thats all folks !!!</b>
            </p>
          }
        >
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default CategoryPage;
// export async function getServerSideProps(ctx: { query: { category: string; start: number; limit: number } }) {
export async function getServerSideProps(ctx: { query: { category: string } }) {
  const { category } = ctx.query;
  const products = await getProductsByCategory(category, 0, 6);
  console.log('products length first ', products.length);
  return { props: { products } };
}
