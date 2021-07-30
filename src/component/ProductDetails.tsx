import React from 'react';
import dynamic from 'next/dynamic';
import { ProductI } from '../utils/interfaces';

const ProductInfo = dynamic(() => import('../component/ProductInfo'));
const BackToProductButton = dynamic(() => import('../component/BackToProductButton'));

const ProductDetails = ({ product }: { product: ProductI }) => (
  <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
    <BackToProductButton />
    <ProductInfo product={product} />
  </div>
);

export default ProductDetails;
