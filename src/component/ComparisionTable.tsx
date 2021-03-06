import React, { FC } from 'react';
import Image from 'next/image';
import { ProductMapProps } from '../utils/interfaces';

interface ComparisionTableProps {
  products: ProductMapProps[];
}

const ComparisionTable: FC<ComparisionTableProps> = ({ products }) => {
  const comparisionHeader = (productArray: ProductMapProps[]) =>
    productArray.map((entry: ProductMapProps) => (
      <th
        key={entry.id}
        className="w-1/5 bg-gray-200 text-center border border-gray-400 font-normal px-4 py-6 sticky top-0"
      >
        <div className="uppercase tracking-wide font-bold text-gray-700">{entry.product_name}</div>
        <div className="mt-3">
          <span className="text-lg">$</span>
          <span className="font-bold text-4xl ml-1">{entry.sale_price}</span>
        </div>
      </th>
    ));

  return (
    <div>
      <table className="lg:block w-full text-base">
        <thead>
          <tr>
            <th className="w-1/5 bg-gray-100 text-left font-normal align-top px-4 py-6 sticky top-0">
              <span />
            </th>
            {comparisionHeader(products)}
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-100">
            <td className="border border-gray-400 text-left px-4 py-6">Image</td>
            {products.map(({ id, images }) => (
              <td key={id} className="border border-gray-400 text-center px-4 py-6">
                <Image
                  data-test-py="categoryProducts"
                  className="hover:grow hover:shadow-lg"
                  src={images[0]}
                  height={300}
                  width={300}
                  alt="Product images"
                />
              </td>
            ))}
          </tr>
          <tr className="odd:bg-white even:bg-gray-100">
            <td className="border border-gray-400 text-left px-4 py-6">Brand</td>
            {products.map(({ id, brand }) => (
              <td key={id} className="border border-gray-400 text-center px-4 py-6">
                {brand}
              </td>
            ))}
          </tr>
          <tr className="odd:bg-white even:bg-gray-100">
            <td className="border border-gray-400 text-left px-4 py-6">Description</td>
            {products.map(({ id, description }) => (
              <td key={id} className="border border-gray-400 text-center px-4 py-6">
                {description}
              </td>
            ))}
          </tr>
          <tr className="odd:bg-white even:bg-gray-100">
            <td className="border border-gray-400 text-left px-4 py-6">Rating</td>
            {products.map(({ id, rating }) => (
              <td key={id} className="border border-gray-400 text-center px-4 py-6">
                {rating}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* <div className="mobile-table mx-4 md:mx-32 mt-16 lg:hidden">
        <div className="text-center border border-gray-400 text-base">
          <div className="bg-gray-300 px-4 py-4">
            <div className="uppercase tracking-wide font-bold text-gray-700">Hobby</div>
            <div className="mt-3">
              <span className="text-lg">$</span>
              <span className="font-bold text-4xl ml-1">70</span>
              <span className="ml-2 text-sm">/ month</span>
            </div>
          </div>
          <div className="odd:bg-gray-200 even:bg-white flex px-3 py-4">
            <div className="text-left w-3/5">Shipping Discount</div>
            <div className="w-2/5">3</div>
          </div>
          <div className="odd:bg-gray-200 even:bg-white flex px-3 py-4">
            <div className="text-left w-3/5">Shipping Discount</div>
            <div className="w-2/5">3</div>
          </div>
          <div className="odd:bg-gray-200 even:bg-white flex px-3 py-4">
            <div className="text-left w-3/5">Shipping Discount</div>
            <div className="w-2/5">3</div>
          </div>
          <div className="odd:bg-gray-200 even:bg-white flex px-3 py-4">
            <div className="text-left w-3/5">Shipping Discount</div>
            <div className="w-2/5">3</div>
          </div>
          <div className="odd:bg-gray-200 even:bg-white px-3 py-4">
            <ul className="leading-loose">
              <li className="flex items-center">
                <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" />
                </svg>
                <span className="ml-2">Free Custom Domain</span>
              </li>
              <li className="flex items-center">
                <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" />
                </svg>
                <span className="ml-2">SSL Security</span>
              </li>
              <li className="flex items-center">
                <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" />
                </svg>
                <span className="ml-2">Unlimited Bandwidth</span>
              </li>
              <li className="flex items-center">
                <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" />
                </svg>
                <span className="ml-2">SEO Features</span>
              </li>
            </ul>
          </div>
          <div className="odd:bg-gray-200 even:bg-white px-3 py-4">
            <div className="">
              <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white inline-block rounded w-64 px-4 py-3">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ComparisionTable;
