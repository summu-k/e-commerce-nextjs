import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { fetchSingleProduct } from '../api/product/[id]';
import { fetchAllProduct } from '../../pages/api/product';
import { ProductMapProps, ProductPropsMap } from '../../utils/interfaces';
import BackToProductButton from '../../component/BackToProductButton';
import ProductInfo from '../../component/ProductInfo';

const ProductDataProps: FC<ProductPropsMap> = ({ products }) => {
  const { images } = products;
  return (
    <div className="py-12 sm:pt-20">
      <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
        <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
          <div className="relative h-96">
            <Image
              src={images[0]}
              alt="Product Hero"
              layout="fill"
              className="transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
          <BackToProductButton />
          <ProductInfo product={products} />
        </div>
      </div>
    </div>
  );
};

export default ProductDataProps;

// using getServerSideProps generate page on demand
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
// export async function getServerSideProps({ params: { id } }) {
//   const productData = await fetchSingleProduct(id);
//   return {
//     props: { product: productData.data },
//   };
// }

// TODO: using getStaticProps and getStaticPaths

// using getStaticProps and getStaticPaths for static generation of dynamic routes
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = params?.slug?.slice(-1)[0];
  const products = await fetchSingleProduct(productId);
  return {
    props: { products, pageTitle: params?.slug?.slice(0) },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await fetchAllProduct();
  const paths = allProducts.results.map((post: ProductMapProps) => {
    let slugValue = `${post.product_name}`;
    slugValue = slugValue.replace(/\s+/g, '-').toLowerCase();
    const dataSlug = [slugValue, `${post.id}`];

    return { params: { slug: dataSlug } };
  });
  return { paths, fallback: false };
};
