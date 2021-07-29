import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
// import ProductImage from '../../component/ProductImage';
import Image from 'next/image';
import { fetchSingleProduct } from '../../actions/hooks/shopping/userActionHooks';
import fetchAllProduct from '../../actions/hooks/shopping/asyncHooks';
import { ProductI } from '../../utils/interfaces';
import ProductDetails from '../../component/ProductDetails';

const ProductItem = ({ product: { image }, product }: { product: ProductI }) => (
  <div className="py-12 sm:pt-20">
    <div className="flex flex-col justify-center items-center md:flex-row md:items-start space-y-8 md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      <div className="w-full md:w-1/2 max-w-md border border-palette-lighter bg-white rounded shadow-lg">
        <div className="relative h-96">
          <Image
            src={image}
            alt="Product Hero"
            layout="fill"
            className="transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      <ProductDetails product={product} />
    </div>
  </div>
);

export default ProductItem;

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
  const check = params?.slug;
  const id = check?.slice(-1);
  const productData: { data: ProductI } = await fetchSingleProduct(id);
  return {
    props: { product: productData.data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await fetchAllProduct();
  const paths = allProducts.data.results.map((post: ProductI) => {
    let slugVal = `${post.name}`;
    slugVal = slugVal.replace(/\s+/g, '-').toLowerCase();
    const dataSlug = [slugVal, `${post.id}`];

    return { params: { slug: dataSlug } };
  });
  return { paths, fallback: false };
};
