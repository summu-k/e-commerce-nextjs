import React from 'react';
import { useRouter } from 'next/router';
import ProductCard from '../../component/ProductCard';
import { getProductsByCategory } from '../api/category/[category]';

const CategoryPage = ({ products }) => {
  const router = useRouter();

  return (
    <div className="container">
      <h1 className="search-title">Results for {router.query.category}</h1>
      <div className="cards flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps(ctx) {
  const { category } = ctx.query;
  const products = await getProductsByCategory(category);
  return { props: { products } };
}
