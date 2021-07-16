import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps, GetStaticPaths } from 'next';
import fetchSingleProduct from '../../actions/hooks/shopping/userActionHooks';
import fetchAllProduct from '../../actions/hooks/shopping/asyncHooks';

const ProductItem = ({ product }) => (
  <div>
    <h1 className="center">{product.name}</h1>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />

    <div className="text-gray-800 text-xl text-center pt-4">Ecommerce Product Details</div>
    <div className="w-full h-screen flex justify-center items-center">
      <div>
        <div className="w-96">
          <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
            <div className="overflow-hidden relative">
              <Image
                className="w-full transition duration-700 ease-in-out group-hover:opacity-60"
                src={product.image}
                alt={product.name}
                height={350}
                width={350}
              />
              <div className="flex justify-center">
                <div className="absolute bottom-4 transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                  <Link href="/">
                    <a className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out">
                      <i className="fas fa-shopping-cart transition duration-300 ease-in-out flex justify-center items-center text-gray-100" />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out">
                      <i className="fas fa-random transition duration-300 ease-in-out flex justify-center items-center text-gray-100" />
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="bg-gray-700 px-3 py-3 hover:bg-red-500 transition duration-300 ease-in-out">
                      <i className="fas fa-search transition duration-300 ease-in-out flex justify-center items-center text-gray-100" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-white">
              <Link href="/">
                <a>
                  <h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                    {product.name}
                  </h1>
                </a>
              </Link>
              <h2 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">
                {product.gender}
              </h2>
              <div className="flex py-2">
                <p className="mr-2 text-xs text-gray-600">{product.status}</p>
                <p className="mr-2 text-xs text-red-600">{product.species}</p>
                <p className="mr-2 text-xs text-red-600">{product.type}</p>
              </div>
              <div className="flex">
                <div className="">
                  <i className="fas fa-star text-yellow-400 text-xs" />
                  <i className="fas fa-star text-yellow-400 text-xs" />
                  <i className="fas fa-star text-yellow-400 text-xs" />
                  <i className="fas fa-star text-yellow-400 text-xs" />
                  <i className="far fa-star text-gray-400 text-xs" />
                </div>
                <div className="ml-2">
                  <p className="text-gray-500 font-medium text-sm">(1)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  const [id] = params.slug.slice(-1);
  const productData = await fetchSingleProduct(id);
  return {
    props: { product: productData.data },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allProducts = await fetchAllProduct();
  const paths = allProducts.data.results.map((post) => {
    let slugVal = `${post.name}`;
    slugVal = slugVal.replace(/\s+/g, '-').toLowerCase();
    const dataSlug = [slugVal, `${post.id}`];

    return { params: { slug: dataSlug } };
  });
  return { paths, fallback: false };
};
