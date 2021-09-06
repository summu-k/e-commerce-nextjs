/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { ProductMapProps } from '../utils/interfaces';
import { addToCart } from '../redux/cartSlice';
import Button from './actionableButtons/Button';
import showToast from '../utils/showToast';

const ProductInfo = ({ product: { product_name, brand, sale_price }, product }: { product: ProductMapProps }) => {
  const dispatch = useDispatch();
  const setCartItem = () => {
    dispatch(addToCart(product));
    showToast({ message: 'Item has been added successfully', type: 'success', dispatch });
  };

  return (
    <div className="font-primary">
      <h1 className="leading-relaxed font-extrabold text-3xl text-palette-primary py-2 sm:py-4">{product_name}</h1>
      <div className="py-4 space-x-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {brand}
        </span>
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {gender}
        </span> */}
        {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-800">
          {status}
        </span> */}
      </div>
      <div className="text-xl text-palette-primary font-medium py-4 px-1">
        $<span className="text-1xl">{sale_price}</span>
      </div>
      <Button
        buttonClass="bg-white-500 w-full hover:bg-gray-800 hover:text-white py-3 text-black font-bold py-2 px-4 border border-black-900 rounded"
        submitFunction={setCartItem}
        buttonText="Add to Cart"
        datatest="addToCart"
      />
    </div>
  );
};

export default ProductInfo;
